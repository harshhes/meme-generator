const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const imageInput = document.getElementById("imageInput");
const textInput = document.getElementById("textInput");
// const textInput2 = document.getElementById("textInput2");
// const textInput3 = document.getElementById("textInput3");
let isDragging = false;
let textX = canvas.width / 2;
let textY = canvas.height - 30;

let backgroundImage = new Image();

function loadImage() {
  const file = imageInput.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    backgroundImage.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      // Reset the text input
      textInput.value = "";
      //   textInput2.value = "";
      //   textInput3.value = "";
    };

    backgroundImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

function drawText() {
  const text = textInput.value;
  if (!text) return;

  ctx.font = "60px Impact";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  //   ctx.fillText(text, textX, textY);
  ctx.strokeText(text, textX, textY);
}

function drawText2() {
  const text = textInput2.value;
  if (!text) return;

  ctx.font = "50px Impact";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  //   ctx.fillText(text, textX, textY);
  ctx.strokeText(text, textX, textY);
}

function drawText3() {
  const text = textInput3.value;
  if (!text) return;

  ctx.font = "50px Impact";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  //   ctx.fillText(text, textX, textY);
  ctx.strokeText(text, textX, textY);
}

function saveImage() {
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = "canvas_image.png";
  link.href = dataURL;
  link.click();
}

function downloadImage() {
  canvas.toBlob(function (blob) {
    const link = document.createElement("a");
    link.download = "canvas_image.png";
    link.href = URL.createObjectURL(blob);
    link.click();
  }, "image/png");
}

canvas.addEventListener("mousedown", function (e) {
  const mouseX = e.clientX - canvas.getBoundingClientRect().left;
  const mouseY = e.clientY - canvas.getBoundingClientRect().top;

  if (
    mouseX > textX - ctx.measureText(textInput.value).width / 2 &&
    mouseX < textX + ctx.measureText(textInput.value).width / 2 &&
    mouseY > textY - parseInt(ctx.font) / 2 &&
    mouseY < textY + parseInt(ctx.font) / 2
  ) {
    isDragging = true;
  }
});

canvas.addEventListener("mousemove", function (e) {
  if (isDragging) {
    textX = e.clientX - canvas.getBoundingClientRect().left;
    textY = e.clientY - canvas.getBoundingClientRect().top;
    drawText();
  }
});

canvas.addEventListener("mouseup", function () {
  isDragging = false;
});
