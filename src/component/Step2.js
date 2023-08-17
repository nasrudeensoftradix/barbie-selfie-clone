import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Step1() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="step_container">
      <h1>Step2</h1>
      <img src={searchParams.get("url")} width={200} height={200} />
      <button
        className="download_button"
        onClick={() => navigate(`/step3?url=${searchParams.get("url")}`)}
      >
        Continue
      </button>
      <p className="go_back_btn" onClick={() => navigate("/step1")}>
        Go Back
      </p>
    </div>
  );
}
