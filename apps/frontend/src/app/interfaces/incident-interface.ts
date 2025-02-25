export interface IncidentInterface {
  id?: number;
  title: string;
  description: string;
  requesterDetails: string;
  status: string;
  deleted: boolean,
  createdAt: Date;
  updatedAt: Date;
}
