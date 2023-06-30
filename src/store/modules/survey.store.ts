import { create } from "zustand";
import ISurvey from "../../types/ISurvey";
import IAnswer from "../../types/IAnswer";
type StoreType = {
  surveys: Array<ISurvey>;
  answers: Array<IAnswer>;
  setSurveys: (data: Array<ISurvey>) => unknown;
  setAnswers: (data: Array<IAnswer>) => unknown;
};
const initialState = {
  surveys: [],
  answers: [],
};
const useSurveyStore = create<StoreType>((set) => ({
  ...initialState,
  setSurveys: (data) => set({ surveys: data }),
  setAnswers: (data) => set({ answers: data }),
}));

export default useSurveyStore;
