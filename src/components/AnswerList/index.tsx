import { BrowserChrome } from "react-bootstrap-icons";
import "./index.scss";
export const AnswerList = () => {
  const mockDate = [
    {
      rate: 5,
      icon: <BrowserChrome />,
      message: "Good Website",
      device: "Desktop",
    },
    {
      rate: 2,
      icon: <BrowserChrome />,
      message: "Good Website",
      device: "Desktop",
    },
    {
      rate: 3,
      icon: <BrowserChrome />,
      message: "Good Website",
      device: "Desktop",
    },
    {
      rate: 1,
      icon: <BrowserChrome />,
      message: "Good Website",
      device: "Desktop",
    },
    {
      rate: 5,
      icon: <BrowserChrome />,
      message: "Good Website",
      device: "Desktop",
    },
    {
      rate: 4,
      icon: <BrowserChrome />,
      message: "Yeah bro",
      device: "Desktop",
    },
    {
      rate: 5,
      icon: <BrowserChrome />,
      message: "Lorem ipsum dolar sit ament",
      device: "Desktop",
    },
  ];
  return (
    <div className="answer-list vertical-center">
      {mockDate.map((item, index) => (
        <div key={index} className="answer-list__item horizontal-center">
          {item.icon}
          <span className="rate">{item.rate}</span>
          <span className="msg">{item.message}</span>
          <span>{item.device}</span>
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
