// api.js
import axios from "axios";

const handleImageUpload = async (e) => {
  const apiKey = "m2DdAiV782wvtW9aeP3XJYgb";
  const apiUrl = "https://api.remove.bg/v1.0/removebg";

  const formData = new FormData();
  formData.append("image_file", e.target.files[0]);

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        "X-Api-Key": apiKey,
      },
      responseType: "arraybuffer", // To handle binary image data
    });

    const imageUrl = URL.createObjectURL(new Blob([response.data]));
    return imageUrl;
  } catch (error) {
    console.error("Error processing image:", error);
  }
};

export { handleImageUpload };
