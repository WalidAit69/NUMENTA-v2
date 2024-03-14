import create from "zustand";

interface BooleanState {
  isDark: boolean;
  setisDark: (newValue: boolean) => void;
}

const useSwitch = create<BooleanState>((set) => ({
    isDark: true,
    setisDark: (newValue) => set({ isDark: newValue }),
}));

export default useSwitch;
