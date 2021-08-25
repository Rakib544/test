const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
require("dotenv").config();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(fileUpload());

const PORT = 8000;

const servicesCardRoute = require("./routes/servicesCard");
const headerInfoTopServices = require("./routes/headerInfoTopService");
const headerInfoVirtualExports = require("./routes/headerInfoVirtualExports");
const banner = require("./routes/banner");
const about = require("./routes/about");
const aboutUnique = require("./routes/aboutUnique");
const aboutUniqueList = require("./routes/aboutUniqueList");
const aboutTeam = require("./routes/aboutTeam");
const topServicesRoute = require("./routes/topServices");
const virtualService = require("./routes/whyChooseVirtualExports");
const placeAnOrder = require("./routes/placeAnOrder");
const placeAnOrderList = require("./routes/placeAnOrderList");
const whatWeDo = require("./routes/whatWeDo");
const footer = require("./routes/footer");
const footerLink = require("./routes/footerLink");
const order = require("./routes/order");
const testimonials = require("./routes/testimonials");
const serviceCardHeader = require("./routes/serviceCardHeader");
const amazon = require("./routes/amazon");
const aboutUser = require("./routes/aboutUser");
const adminLogin = require("./routes/adminLogin");
const team = require("./routes/team");
const scheduleMeeting = require("./routes/scheduleMeeting");
const topServices = require("./routes/topServices");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connecting to mongoDB"))
  .catch((err) => console.log(err));

app.use("/headerInfoTopServices", headerInfoTopServices);
app.use("/headerInfoVirtualExports", headerInfoVirtualExports);
app.use("/virtualService", virtualService);
app.use("/banner", banner);
app.use("/servicesCard", servicesCardRoute);
app.use("/about", about);
app.use("/aboutUnique", aboutUnique);
app.use("/aboutUniqueList", aboutUniqueList);
app.use("/aboutTeam", aboutTeam);
app.use("/placeAnOrder", placeAnOrder);
app.use("/placeAnOrderList", placeAnOrderList);
app.use("/topServices", topServicesRoute);
app.use("/whatWeDo", whatWeDo);
app.use("/footer", footer);
app.use("/footerLink", footerLink);
app.use("/order", order);
app.use("/testimonials", testimonials);
app.use("/serviceCardHeader", serviceCardHeader);
app.use("/aboutUser", aboutUser);
app.use("/amazon", amazon);
app.use("/adminLogin", adminLogin);
app.use("/team", team);
app.use("/scheduleMeeting", scheduleMeeting);
app.use("/topServices", topServices);

app.get("/", (req, res) => {
  res.send("Hello Buddy!!!");
});

app.listen(process.env.PORT || PORT);
