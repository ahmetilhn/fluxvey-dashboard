import { create } from "zustand";
import IAnswer from "../../types/IAnswer";
type StoreType = {
  lastAnswers: Array<IAnswer>;
  setLastAnswers: (data: Array<IAnswer>) => unknown;
};
const initialState = {
  lastAnswers: [],
};
const useAnswerStore = create<StoreType>((set) => ({
  ...initialState,
  setLastAnswers: (data) => set({ lastAnswers: data }),
}));

export default useAnswerStore;
