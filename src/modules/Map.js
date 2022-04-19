const { readFileSync } = require("fs");
const { resolve } = require("path");
const { zoomInfo } = require("./Info");
const { getPaths } = require("./Path");
const rootMap = document.querySelector("#rootMap");
const zoomIn = document.querySelector("#zoomIn");
const zoomOut = document.querySelector("#zoomOut");
const transform = 0.3;
let zoom = 1;

const func = ({ out, svg }) => {
  zoom += out ? -transform : transform;
  if (zoom < 0) zoom += transform;
  if (zoom > 3.4) zoom -= transform;
  svg.style.transform = `scale(${zoom})`;
  zoomInfo.textContent = zoom.toFixed(2);
};

const map = () => {
  rootMap.innerHTML = readFileSync(
    resolve(__dirname, ".", "..", "assets", "africa.svg")
  );

  const svg = document.querySelector("#svg2");

  const paths = getPaths();

  for (let path of paths) {
    path.addEventListener("click", (e) => (e.target.style.fill = player.color));
    path.addEventListener(
      "mouseover",
      ({ target }) => (regionInfo.textContent = target.getAttribute("title"))
    );
  }

  zoomIn.addEventListener("click", () => func({ svg, out: false }));

  zoomOut.addEventListener("click", () => func({ svg, out: true }));
};

module.exports = { rootMap, map };
