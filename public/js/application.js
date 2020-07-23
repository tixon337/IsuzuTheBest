const e = require("express");

const form = document.getElementById("configForm");
const sum = document.querySelector(".sum");

// const selected = document.querySelectorAll('.select')

const engineImport = document.getElementById("engine");
const carcassImport = document.getElementById("carcass");
const transmittionImport = document.getElementById("transmission");
const colorImport = document.getElementById("color");
let engine = engineImport.options[engineImport.selectedIndex].text;
let carcass = carcassImport.options[carcassImport.selectedIndex].text;
let transmittion =
  transmittionImport.options[transmittionImport.selectedIndex].text;
let color = colorImport.options[colorImport.selectedIndex].text;
sum.innerText = `${engine + carcass + transmittion + color}`;

engineImport.addEventListener("change", () => {
  engine = engineImport.options[engineImport.selectedIndex].text;
  sum.innerText = `${engine + carcass + transmittion + color}`;
});
carcassImport.addEventListener("change", () => {
  carcass = carcassImport.options[carcassImport.selectedIndex].text;
  sum.innerText = `${engine + carcass + transmittion + color}`;
});
transmittionImport.addEventListener("change", () => {
  transmittion =
    transmittionImport.options[transmittionImport.selectedIndex].text;
  console.log(transmittion);
  sum.innerText = `${engine + carcass + transmittion + color}`;
});
colorImport.addEventListener("change", () => {
  color = colorImport.options[colorImport.selectedIndex].text;
  console.log(color);
  sum.innerText = `${engine + carcass + transmittion + color}`;
});

document.getElementById("addoption").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
