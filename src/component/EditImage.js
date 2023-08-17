import React from "react";

export default function Filter() {
  return (
    <>
      <div className="edit_wraper">
        <h1>Selfie Background Remover</h1>
        <form id="upload-form">
          <input type="file" id="image-input" accept="image/*" />
          <label
            htmlFor="overlay-text"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            This person is
          </label>
          <input
            type="text"
            id="overlay-text"
            placeholder="Enter text overlay here..."
            maxLength={46}
          />
          <label
            htmlFor="scale-range"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Scale
          </label>
          <input
            type="range"
            id="scale-range"
            min="0.1"
            max={3}
            step="0.01"
            defaultValue={1}
            style={{ marginBottom: "1rem" }}
          />
          <label
            htmlFor="rotation-range"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Rotation (degrees)
          </label>
          <input
            type="range"
            id="rotation-range"
            min={-180}
            max={180}
            step={1}
            defaultValue={0}
            style={{ marginBottom: "1rem" }}
          />
          <div className="arrow-buttons">
            <div id="arrow-buttons-container">
              <div id="arrow-up-container">
                <button id="arrow-up" className="arrow-button">
                  ↑
                </button>
              </div>
              <div id="arrow-middle-container">
                <button id="arrow-left" className="arrow-button">
                  ←
                </button>
                <button id="arrow-down" className="arrow-button">
                  ↓
                </button>
                <button id="arrow-right" className="arrow-button">
                  →
                </button>
              </div>
            </div>
          </div>
          <button type="submit">Upload</button>
        </form>
        <div id="result-container">
          <canvas id="result-canvas" />
          <a
            id="download-button"
            href="#"
            download="result.png"
            style={{ display: "none" }}
          >
            <button>Download</button>
          </a>
        </div>
      </div>
    </>
  );
}
