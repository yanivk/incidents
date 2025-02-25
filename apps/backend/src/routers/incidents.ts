import express from 'express';
import {
    createIncident,
    showAllIncidents, showOneIncident,
    softDeleteIncident,
    updateIncident
} from "../controllers/IncidentsController";

const router = express.Router();

router.get('/', async (req, res) => {
    await showAllIncidents(req, res);
});

router.get('/:id', async (req, res) => {
    await showOneIncident(req, res);
});

router.post('/', async (req, res) => {
    await createIncident(req, res);
});

router.put('/:id', async (req, res) => {
    await updateIncident(req, res);
});

router.delete('/:id', async (req, res) => {
    await softDeleteIncident(req, res);
});

export default router;