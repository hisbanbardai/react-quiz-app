import jsonServer from "json-server";
import cors from "cors";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use("/api", router); // Use '/api' prefix

const port = 9001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
