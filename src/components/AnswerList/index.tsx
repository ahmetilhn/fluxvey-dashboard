import "./index.scss";
import IAnswer from "../../types/IAnswer";
import NotResult from "../shared/NotResult";
import React, { PropsWithChildren } from "react";
type Props = {
  data: Array<IAnswer>;
  isDetailed?: boolean;
};
export const AnswerList: React.FC<PropsWithChildren<Props>> = ({
  data,
  isDetailed = false,
}) => {
  return (
    <div className="answer-list vertical-center">
      <table>
        <thead>
          <tr>
            {isDetailed && <th>Date</th>}
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
            <tr>
              {isDetailed && <td>{item.createdAt.toString()}</td>}
              <td>{item.rate}</td>
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
