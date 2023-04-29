let cnv;

window.onload = function () {
  console.log("loading.");
  cnv = document.getElementById("cnv");
  cnv.style.backgroundColor = "#282a36";
  prepareDocument();
  resizeCanvas();
  drawRect();
};

window.onresize = function () {
  console.log("resizing.");
  resizeCanvas();
  drawRect();
};

function resizeCanvas() {
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
}

function prepareDocument() {
  document.body.style.padding = "0px";
  document.body.style.margin = "0px";
}

function drawRect() {
  let ctx = cnv.getContext("2d");
  let width = cnv.width * 0.2;
  let height = cnv.height * 0.2;
  let xpos = cnv.width / 2 - width / 2;
  let ypos = cnv.height / 2 - height / 2;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(xpos, ypos, width, height);
}
