import "dotenv/config";

import { app } from "./app.js";

const port = Number(process.env.API_PORT ?? 3333);

app.listen(port, () => {
  console.info(`API disponível em http://localhost:${port}`);
});
