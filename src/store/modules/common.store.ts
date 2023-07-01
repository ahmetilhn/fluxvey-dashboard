import { create } from "zustand";
type StoreType = {
  isLoading: boolean;
  isAppReady: boolean;
  updateLoading: (val: boolean) => void;
  updateAppReady: (val: boolean) => void;
};
const initialState = {
  isLoading: false,
  isAppReady: true,
};
const useCommonStore = create<StoreType>((set) => ({
  ...initialState,
  updateLoading: (val) => set({ isLoading: val }),
  updateAppReady: (val) => set({ isAppReady: val }),
}));

export default useCommonStore;
