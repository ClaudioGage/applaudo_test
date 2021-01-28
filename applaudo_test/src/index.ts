import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes/index";

createConnection()
  .then(async connection => {
    let port = 7777
    const app = express();

    //midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use("/", routes);

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch(error => console.log(error));
