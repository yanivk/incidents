import myDataSource from "../../utils/AppDataSource";
import {BaseRepository} from "../BaseRepository";
import {Incidents} from "../../entity/incidents";

class IncidentsRepository extends BaseRepository<Incidents>{
  constructor() {
    super(myDataSource.getRepository(Incidents));
  }
}

export default new IncidentsRepository()
