import {Request, Response} from "express";
import IncidentsRepository from "../repository/incidents/IncidentsRepository";
import {Incidents} from "../entity/incidents";
import {isKeyValid} from "../utils/Helpers";

export async function showAllIncidents(req: Request, res: Response) {
  const incidents = await IncidentsRepository.find({});

  return res.status(200).send(incidents);
}

export async function createIncident(req: Request, res: Response) {
  const data = req.body;
  if (!isKeyValid(data, "description") || !isKeyValid(data, "requesterDetails") || !isKeyValid(data, "status") || !isKeyValid(data, "title")) {
    return res.status(400).send("One or more parameters is missing");
  }
  let incident: Incidents;
  incident = {...data}
  const dbSave = await IncidentsRepository.save(incident);

  return res.status(200).send(dbSave);
}

export async function updateIncident(req: Request, res: Response) {
  const data: Partial<Incidents> = req.body;
  if (isKeyValid(data, "title")) {
    return res.status(400).send("You can't update the title");
  }
  if (!isKeyValid(data, "description") && !isKeyValid(data, "requesterDetails") && !isKeyValid(data, "status")) {
    return res.status(400).send("One or more parameters is missing");
  }
  await IncidentsRepository.update({ id: parseInt(req.params.id) }, {...data});

  return res.status(200).send(`The incident has been updated successfully.`);
}

export async function softDeleteIncident(req: Request, res: Response) {
  await IncidentsRepository.update({ id: parseInt(req.params.id) }, {deleted: true});

  return res.status(200).send(`The incident ${req.params.id} was deleted.`);
}