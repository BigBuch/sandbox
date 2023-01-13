const express = require("express");
const path = require("path");
const hbs = require("hbs");

const geocode = require("./utils/geocode.js");
const getWeather = require("./utils/forecast.js");

const app = express();

// Define directory paths
const publicDirectory = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// setuo handlebars and views folder
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);
// setup static directory
app.use(express.static(publicDirectory));

// routes
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather APP",
    name: "Ros",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Weather APP",
    name: "Ros",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    helpText: "Some help message",
    name: "Ros",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "please provide an address",
    });
  }

  geocode(req.query.address, (error, { lat, lon, location } = {}) => {
    if (error) {
      return res.send({
        error: "please provide an address",
      });
    }
    getWeather(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        location: location,
        forecast: forecastData,
        address: req.query.address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found",
    name: "Ros",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
    name: "Ros",
  });
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
