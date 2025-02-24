import "reflect-metadata"
import { DataSource } from "typeorm";
import {Incidents} from "../entity/incidents";


const myDataSource = new DataSource({
  type: "sqlite",
  database: "src/sql/incidents.sqlite",
  entities: [
    Incidents
  ],
  logging: true,
  synchronize: true,
});

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

export default myDataSource
