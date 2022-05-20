import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Transaction 1",
          amount: 1000,
          type: "income",
          category: "game",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Transaction 2",
          amount: 1000,
          type: "outcome",
          category: "game",
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);
      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
