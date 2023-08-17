import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <div className="home_wrapper">
        <div className="hero_section">
          <img src="../assets/img/logo-barbie.png" className="brand_logo" />
          <div className="svg_art">
            <img
              src="../assets/img/logo-selfie.png"
              className="svg_art_title"
            />
            <svg
              viewBox="0 0 1290 1292"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M645 0L681.506 65.7473L725.965 5.09393L753.943 74.8982L805.654 20.2953L824.662 93.0558L882.808 45.3644L892.548 119.934L956.213 79.9059L956.53 155.108L1024.71 123.375L1015.6 198.024L1087.22 175.086L1068.82 248.004L1142.75 234.224L1115.36 304.262L1190.44 299.856L1154.48 365.908L1229.52 370.947L1185.57 431.972L1259.38 446.375L1208.13 501.412L1279.56 524.952L1221.82 573.131L1289.73 605.437L1226.4 646L1289.73 686.563L1221.82 718.869L1279.56 767.048L1208.13 790.588L1259.38 845.625L1185.57 860.028L1229.52 921.053L1154.48 926.092L1190.44 992.144L1115.36 987.738L1142.75 1057.78L1068.82 1044L1087.22 1116.91L1015.6 1093.98L1024.71 1168.62L956.53 1136.89L956.213 1212.09L892.548 1172.07L882.808 1246.64L824.662 1198.94L805.654 1271.7L753.943 1217.1L725.965 1286.91L681.506 1226.25L645 1292L608.494 1226.25L564.035 1286.91L536.057 1217.1L484.346 1271.7L465.338 1198.94L407.192 1246.64L397.452 1172.07L333.787 1212.09L333.47 1136.89L265.291 1168.62L274.402 1093.98L202.783 1116.91L221.178 1044L147.248 1057.78L174.638 987.738L99.5641 992.144L135.515 926.092L60.4818 921.053L104.428 860.028L30.6175 845.625L81.8658 790.588L10.4424 767.048L68.1845 718.869L0.274719 686.563L63.6 646L0.274719 605.437L68.1845 573.131L10.4424 524.952L81.8658 501.412L30.6175 446.375L104.428 431.972L60.4818 370.947L135.515 365.908L99.5641 299.856L174.638 304.262L147.248 234.224L221.178 248.004L202.783 175.086L274.402 198.024L265.291 123.375L333.47 155.108L333.787 79.9059L397.452 119.934L407.192 45.3644L465.338 93.0558L484.346 20.2953L536.057 74.8982L564.035 5.09393L608.494 65.7473L645 0Z"
                fill="#FFECF5"
              />
            </svg>
            <p className="sub_text">
              Welcome to Barbie Land,
              <br />
              where you can be Barbie (or Ken).
            </p>
            <p className="sub_text_second">
              Click below to become an instant icon!
            </p>
            <p className="sub_text_third">#BarbieTheMovie</p>
            <button
              onClick={() => navigate("/step1")}
              className="custom_button"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
