import React from "react";
import "./index.scss";
const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__overlay"></div>
      <div className="loader__spin">
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
        >
          <path
            fill="#0c89ff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;