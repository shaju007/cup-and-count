import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const port = 4173;

// Routes that exist in this app
const routes = [
  "/",
  "/about",
];

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
  };
  return types[ext] || "application/octet-stream";
}

function startStaticServer() {
  return http
    .createServer((req, res) => {
      let reqPath = decodeURIComponent(req.url.split("?")[0]);

      if (reqPath === "/") {
        reqPath = "/index.html";
      }

      let filePath = path.join(distDir, reqPath);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distDir, "index.html");
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("Not found");
          return;
        }

        res.writeHead(200, { "Content-Type": getContentType(filePath) });
        res.end(data);
      });
    })
    .listen(port);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function outputPathForRoute(route) {
  if (route === "/") {
    return path.join(distDir, "index.html");
  }

  const cleanRoute = route.replace(/^\/+|\/+$/g, "");
  return path.join(distDir, cleanRoute, "index.html");
}

function injectSeoSafeBase(html) {
  return "<!DOCTYPE html>\n" + html;
}

async function prerender() {
  if (!fs.existsSync(distDir)) {
    throw new Error("dist folder not found. Run npm run build first.");
  }

  const server = startStaticServer();
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      const url = `http://localhost:${port}${route}`;

      console.log(`Prerendering ${url}`);

      await page.goto(url, {
        waitUntil: "networkidle0",
        timeout: 60000,
      });

      // Small extra wait in case app renders after hydration
      await new Promise((r) => setTimeout(r, 1500));

      const html = await page.content();
      const outFile = outputPathForRoute(route);

      ensureDir(path.dirname(outFile));
      fs.writeFileSync(outFile, injectSeoSafeBase(html), "utf8");

      console.log(`  → wrote ${outFile}`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("Prerender complete.");
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
