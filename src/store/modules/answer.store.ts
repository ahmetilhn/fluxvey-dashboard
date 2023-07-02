import { create } from "zustand";
import IAnswer from "../../types/IAnswer";
type StoreType = {
  answers: Array<IAnswer>;
  lastAnswers: Array<IAnswer>;
  setAnswers: (data: Array<IAnswer>) => unknown;
  setLastAnswers: (data: Array<IAnswer>) => unknown;
};
const initialState = {
  lastAnswers: [],
  answers: [],
};
const useAnswerStore = create<StoreType>((set) => ({
  ...initialState,
  setAnswers: (data) => set({ answers: data }),
  setLastAnswers: (data) => set({ lastAnswers: data }),
}));

export default useAnswerStore;
