const path = require("path");
const { setGlobal } = require("next/dist/trace/shared");
const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");
const { startServer } = require("next/dist/server/lib/start-server");

const dir = process.cwd();
const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOSTNAME || "127.0.0.1";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.NEXT_TELEMETRY_DISABLED = process.env.NEXT_TELEMETRY_DISABLED || "1";
process.env.__NEXT_DISABLE_MEMORY_WATCHER =
  process.env.__NEXT_DISABLE_MEMORY_WATCHER || "1";

setGlobal("phase", PHASE_DEVELOPMENT_SERVER);
setGlobal("distDir", path.join(dir, ".next"));

startServer({
  dir,
  port,
  allowRetry: true,
  isDev: true,
  hostname
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
