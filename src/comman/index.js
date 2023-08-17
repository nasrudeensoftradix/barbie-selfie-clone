function loadLocalImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
  });
}

async function updateImage(segmentedPhoto, states) {
  const {
    userOffsetY,
    userOffsetX,
    scaleFactor,
    barbieText,
    text,
    rotationDegrees,
    overlayImage,
  } = states;
  if (!segmentedPhoto) return;
  segmentedPhoto = await loadLocalImage(segmentedPhoto);

  const resultContainer = document.getElementById("result-container");
  const resultCanvas = document.getElementById("result-canvas");

  const finalImage = await drawImageWithOverlay(
    segmentedPhoto,
    text,
    scaleFactor,
    rotationDegrees,
    userOffsetY,
    userOffsetX,
    barbieText,
    overlayImage
  );
  resultContainer.style.display = "block";
  resultCanvas.width = finalImage?.width || 200;
  resultCanvas.height = finalImage?.height || 200;
  const ctx = resultCanvas.getContext("2d");
  ctx.drawImage(finalImage, 0, 0);

  // Update download button
  const downloadButton = document.getElementById("download-button");
  downloadButton.style.display = "block";
  finalImage.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    downloadButton.href = url;
  });
}

async function drawImageWithOverlay(
  image,
  text,
  scaleFactor = 1,
  rotation = 0,
  userOffsetY,
  userOffsetX,
  barbieText,
  overlayImage
) {
  // Get the URLs of the images from the query parameters
  const params = new URLSearchParams(window.location.search);
  const backgroundUrl = params.get("background");
  const overlayUrl = overlayImage;

  const background = await loadLocalImage(
    backgroundUrl || "../assets/img/background.png"
  );
  const overlay = await loadLocalImage(
    overlayUrl || "../assets/img/overlay2.png"
  );

  const canvasHeight = 1920;
  const canvasWidth = 1080;

  const scale = Math.min(
    canvasWidth / image.width,
    canvasHeight / image.height
  );
  const scaledWidth = image.width * scale;
  const scaledHeight = image.height * scale;

  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(1, 1, canvasWidth, canvasHeight);

  // Draw the overlay on top
  ctx.drawImage(overlay, 0, 0, canvasWidth, canvasHeight);

  // Calculate the new scaled width and height
  const newScaledWidth = scaledWidth * scaleFactor;
  const newScaledHeight = scaledHeight * scaleFactor;

  // Adjust offsetX and offsetY to keep the image centered
  const offsetX = (canvasWidth - newScaledWidth) / 2;
  const offsetY = (canvasHeight - newScaledHeight) / 2;

  // Draw the centered, scaled, and rotated image with the removed background
  ctx.save();
  ctx.translate(canvasWidth / 2, canvasHeight / 2); // Translate to the center of the canvas
  ctx.rotate(rotation * (Math.PI / 180)); // Convert degrees to radians and rotate the context
  ctx.translate(-canvasWidth / 2, -canvasHeight / 2); // Translate back to the origin

  ctx.drawImage(
    image,
    offsetX + userOffsetX,
    offsetY + userOffsetY,
    newScaledWidth,
    newScaledHeight
  );

  ctx.restore();

  // Draw the background
  ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight);

  // Add text overlay
  const fontSize = 58; // Increased font size
  const curveRadius = 400; // Adjusted curve radius for less curvature
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2 - 300;
  const whiteSpaceWidth = 15;
  const lineHeight = 58;

  ctx.font = `bold ${fontSize}px 'DM Sans', sans-serif`;
  ctx.fillStyle = "#000000";

  const lines = [`${barbieText} `, text];
  let cursorPositionY = 0;

  // Iterate over each line of text
  for (const line of lines) {
    const lineWidth = ctx.measureText(line).width;
    const words = line.split(" ");
    const totalAngle = lineWidth / curveRadius;
    const startAngle = (-Math.PI - totalAngle) / 2;
    const endAngle = startAngle + totalAngle;

    let cursorPositionX = 0;

    // Iterate over each word in the line
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      // Iterate over each character in the word
      for (let j = 0; j < word.length; j++) {
        const char = word.charAt(j);
        const charWidth = ctx.measureText(char).width;

        const x = cursorPositionX / lineWidth;
        const angle = startAngle + x * (endAngle - startAngle);

        ctx.save();
        ctx.translate(
          centerX + curveRadius * Math.cos(angle),
          centerY + curveRadius * Math.sin(angle) + cursorPositionY
        );
        ctx.rotate(Math.PI / 2 + angle);
        ctx.fillText(char, 0, 0);
        ctx.restore();

        cursorPositionX += charWidth;
      }

      cursorPositionX += whiteSpaceWidth;
    }

    cursorPositionY += lineHeight;
  }

  return canvas;
}

export { drawImageWithOverlay, updateImage };
