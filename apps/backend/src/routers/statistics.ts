import express from 'express';
import {incidentsOfDay, recentlyClosedIncidents, totalOpenIncidents} from "../controllers/StatisticsController";

const router = express.Router();

router.get('/total-open', async (req, res) => {
  await totalOpenIncidents(req, res);
});

router.get('/total-closed', async (req, res) => {
  await recentlyClosedIncidents(req, res);
});

router.get('/total-daily', async (req, res) => {
  await incidentsOfDay(req,res);
});

export default router;