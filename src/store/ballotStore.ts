import { create } from "zustand";

type BallotMode = "scroll" | "flip";

type BallotState = {
  mode: BallotMode;
  currentIndex: number;
  expandedIds: Record<string, boolean>;
  setMode: (mode: BallotMode) => void;
  nextCard: (total: number) => void;
  prevCard: () => void;
  jumpTo: (index: number) => void;
  toggleExpanded: (id: string) => void;
};

export const useBallotStore = create<BallotState>((set) => ({
  mode: "scroll",
  currentIndex: 0,
  expandedIds: {},
  setMode: (mode) => set({ mode }),
  nextCard: (total) =>
    set((state) => ({
      currentIndex: Math.min(state.currentIndex + 1, total - 1),
    })),
  prevCard: () =>
    set((state) => ({
      currentIndex: Math.max(state.currentIndex - 1, 0),
    })),
  jumpTo: (index) => set({ currentIndex: index }),
  toggleExpanded: (id) =>
    set((state) => ({
      expandedIds: {
        ...state.expandedIds,
        [id]: !state.expandedIds[id],
      },
    })),
}));
