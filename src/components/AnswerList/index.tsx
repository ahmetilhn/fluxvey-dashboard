import { BrowserChrome } from "react-bootstrap-icons";
import "./index.scss";
export const AnswerList = () => {
  const mockDate = [
    {
      _id: "649df0ac80asd113dfd785f6d4e098",
      rate: 3,
      message: "",
      session: {
        device_type: "Desktop",
        operating_system: "Mobile Safari",
        page_url: "http://localhost:3030/",
        platform: "iOS",
        referer: "",
        translation: "en-US",
        user_agent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
      },
      survey_id: "649d9ac8e40a6e3076e30b6c",
      custom_data: [],
      createdAt: "2023-06-29T20:59:24.433Z",
      updatedAt: "2023-06-29T20:59:24.433Z",
      __v: 0,
    },
    {
      _id: "649df0ac80dfd785f6d4e098",
      rate: 3,
      message: "",
      session: {
        device_type: "Mobile",
        operating_system: "Mobile Safari",
        page_url: "http://localhost:3030/",
        platform: "iOS",
        referer: "",
        translation: "en-US",
        user_agent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
      },
      survey_id: "649d9ac8e40a6e3076e30b6c",
      custom_data: [],
      createdAt: "2023-06-29T20:59:24.433Z",
      updatedAt: "2023-06-29T20:59:24.433Z",
      __v: 0,
    },
  ];
  return (
    <div className="answer-list vertical-center">
      {mockDate.map((item, index) => (
        <div key={index} className="answer-list__item horizontal-center">
          <span className="device-type horizontal-center">
            <BrowserChrome />
            {item.session.device_type}
          </span>
          <span className="rate">{item.rate}</span>
          <span className="msg">{item.message}</span>
          <span>{item.session.platform}</span>
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
