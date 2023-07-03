import { SurveyTypes } from "../enums/survey.enums";

export default interface ISurvey {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  author_id: string;
  comment: string;
  name: string;
  view_counts: number;
  render_counts: number;
  answer_counts: number;
  type: string | SurveyTypes;
  title: string;
  response_counts: number;
}
