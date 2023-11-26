import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const availableThemes = ['night', 'dimare', 'winter', 'aftereight', 'dracula'];

type store = {
  gamerMode?: boolean;
  isFaqOpen: boolean;
  theme: string;
};
type actions = {
  toggleMode: () => void;
  toggleFaq: () => void;
  selectTheme: (theme: string) => void;
};
const useGlobalStore = create<store & actions>()(
  persist(
    (set) => ({
      gamerMode: true,
      isFaqOpen: false,
      theme: availableThemes[0],
      selectTheme: (theme: string) => set({ theme: theme }),
      toggleFaq: () => set((state) => ({ isFaqOpen: !state.isFaqOpen })),
      toggleMode: () => set((state) => ({ gamerMode: !state.gamerMode })),
    }),
    {
      name: 'globals',
    }
  )
);

export default useGlobalStore;

export const useTheme = () => useGlobalStore((state) => state.theme);
