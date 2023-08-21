const tasks = require("./routes/tasks");
const domainhosting = require("./routes/DomianHosting");
const graphicdesigning = require("./routes/GraphicDesigning");
const maintancesupport = require("./routes/MaintanceSupport");
const seo = require("./routes/Seo");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();

app.use(express.json());
app.use(cors());
app.use("/api/tasks", tasks); graphicdesigning
app.use("/api/graphicdesigning", graphicdesigning);
app.use("/api/domainhosting", domainhosting);
app.use("/api/maintancesupport", maintancesupport);
app.use("/api/seo", seo);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
