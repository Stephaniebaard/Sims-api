import express from "express";
import simRoutes from "./routes/simRoutes.js";
import familjRoutes from "./routes/familjRoutes.js";
import tomtRoutes from "./routes/tomtRoutes.js";
import varldRoutes from "./routes/varldRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { db } from "./db.js";


const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.json({ message: "Hej från API:t!" });
});


app.use("/sims", simRoutes);
app.use("/familjer", familjRoutes);
app.use("/tomter", tomtRoutes);
app.use("/varld", varldRoutes);
app.use("/api", healthRoutes);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`);
});


async function shutdown(signal: string) {
  console.log(`\n Fångade ${signal}, stänger ner...`);

  try {
    server.close(() => {
      console.log("Server stängd.");
    });

    await db.end();
    console.log("Databasanslutning stängd.");

    process.exit(0);
  } catch (err) {
    console.error("Fel vid nedstängning:", err);
    process.exit(1);
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
