import express from "express";
import incidents from "./incidents";
import statistics from "./statistics";


const app = express();

app.use('/incidents', incidents);
app.use('/statistics', statistics);

export default app;