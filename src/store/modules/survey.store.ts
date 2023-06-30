import { create } from "zustand";
import ISurvey from "../../types/ISurvey";
import IAnswer from "../../types/IAnswer";
type StoreType = {
  surveys: Array<ISurvey>;
  answers: Array<IAnswer>;
};
const initialState = {
  surveys: [],
  answers: [],
};
const useSurveyStore = create<StoreType>((set) => ({
  ...initialState,
  setSurveys: (data: Array<ISurvey>) => set({ surveys: data }),
  setAnswers: (data: Array<IAnswer>) => set({ answers: data }),
}));

export default useSurveyStore;
