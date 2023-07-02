import { create } from "zustand";
import ISurvey from "../../types/ISurvey";
type StoreType = {
  surveys: Array<ISurvey>;
  setSurveys: (data: Array<ISurvey>) => unknown;
};
const initialState = {
  surveys: [],
};
const useSurveyStore = create<StoreType>((set) => ({
  ...initialState,
  setSurveys: (data) => set({ surveys: data }),
}));

export default useSurveyStore;
