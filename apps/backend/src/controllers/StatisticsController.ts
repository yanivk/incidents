import {Request, Response} from "express";
import IncidentsRepository from "../repository/incidents/IncidentsRepository";
import {Between} from "typeorm";
import {getEndCurrentDay, getPassedDate, getStartCurrentDay} from "../utils/Helpers";

export async function incidentsOfDay(req: Request, res: Response){
  const countIncidents = await IncidentsRepository.count({
    where: {
      createdAt: Between(getStartCurrentDay(), getEndCurrentDay()),
      deleted: false
    }
  })
  const listIncidents = await IncidentsRepository.find({
    where: {
      createdAt: Between(getStartCurrentDay(), getEndCurrentDay()),
      deleted: false
    },
    order: {
      updatedAt: "DESC"
    }
  })
  return res.status(200).json({
    incidents: listIncidents,
    count: countIncidents,
  })
}

export async function totalOpenIncidents(req: Request, res: Response){
  const countOpened = await IncidentsRepository.count({
    where: {
      status: "opened",
      deleted: false
    }
  })
  return res.status(200).json(countOpened)
}

export async function recentlyClosedIncidents(req: Request, res: Response){
  const closedIncidents = await IncidentsRepository.count({
    where: {
      updatedAt: Between(getPassedDate(), getEndCurrentDay()),
      status: "closed",
      deleted: false
    }
  })
  return res.status(200).json(closedIncidents)
}