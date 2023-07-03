import "./index.scss";
import IAnswer from "../../types/IAnswer";
import NotResult from "../shared/NotResult";
import React, { PropsWithChildren } from "react";
import { StarFill } from "react-bootstrap-icons";
import useDate from "../../hooks/useDate";
type Props = {
  data: Array<IAnswer>;
  isDetailed?: boolean;
};
export const AnswerList: React.FC<PropsWithChildren<Props>> = ({
  data,
  isDetailed = false,
}) => {
  const { formattedDate } = useDate();
  return (
    <div className="answer-list vertical-center">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Rate</th>
            <th>Device</th>
            <th>Message</th>
            <th>Platform</th>
            {isDetailed && (
              <>
                <th>Operating System</th>
                <th>From URL</th>
                <th>User Agent</th>
                <th>Translation</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 20).map((item: IAnswer, index) => (
            <tr key={index}>
              <td>{formattedDate(item.createdAt)}</td>
              <td>
                {Array(item.rate)
                  .fill(0)
                  .map((item) => (
                    <StarFill
                      key={item}
                      fill="#f5d100"
                      style={{ marginLeft: "2px" }}
                    />
                  ))}
              </td>
              <td>{item.session.device_type}</td>
              <td>{item.message}</td>
              <td> {item.session.platform} </td>
              {isDetailed && (
                <>
                  <td>{item.session.operating_system}</td>
                  <td> {item.session.page_url} </td>
                  <td> {item.session.user_agent} </td>
                  <td> {item.session.translation} </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {!data.length && <NotResult msg="Not enough answers" />}
    </div>
  );
};

export default AnswerList;
