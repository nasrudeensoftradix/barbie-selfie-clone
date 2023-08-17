import React from "react";
import { handleImageUpload } from "../api_helpers/axios";
import { useNavigate } from "react-router-dom";
import { drawImageWithOverlay } from "../comman";
import { toast } from "react-hot-toast";

export default function Step1() {
  const navigate = useNavigate();
  const onChangeHandler = async (e) => {
    // Create a Blob from the uploaded file
    let file = e.target.files[0];

    //This is for in case api is not working
    // const blobFile = URL.createObjectURL(file);

    const toastId = toast.loading("File is uploading");
    try {
      let response = await handleImageUpload(e);
      toast.success("Uploaded", { id: toastId });
      navigate(`/step2?url=${response}`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error, "response");
    }
  };
  return (
    <div className="step_container">
      <h1>Step1</h1>
      <h3>Upload image</h3>
      <input type="file" onChange={onChangeHandler} />
    </div>
  );
}
