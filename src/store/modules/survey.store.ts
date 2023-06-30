import { create } from "zustand";
import ISurvey from "../../types/ISurvey";
import IAnswer from "../../types/IAnswer";
type StoreType = {
  surveys: Array<ISurvey>;
  answers: Array<IAnswer>;
  last7DaysAnswers: Array<IAnswer>;
  setSurveys: (data: Array<ISurvey>) => unknown;
  setAnswers: (data: Array<IAnswer>) => unknown;
  setLast7DaysAnswers: (data: Array<IAnswer>) => unknown;
};
const initialState = {
  surveys: [],
  last7DaysAnswers: [],
  answers: [],
};
const useSurveyStore = create<StoreType>((set) => ({
  ...initialState,
  setSurveys: (data) => set({ surveys: data }),
  setAnswers: (data) => set({ answers: data }),
  setLast7DaysAnswers: (data) => set({ last7DaysAnswers: data }),
}));

export default useSurveyStore;
