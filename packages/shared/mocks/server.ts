import { setupServer } from "msw/node";
import { handlers } from "./api-mock";

const server = setupServer(...handlers);

export default server;
