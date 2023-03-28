import { create } from "zustand";
import type { Cat } from "@/types";

export interface CatStoreState {
  cats: Cat[];
  filteredCats: Cat[];
  filter: string;
  setFilter: (filter: string) => void;
  setCats: (cats: Cat[]) => void;
}

export const useCatStore = create<CatStoreState>((set) => ({
  cats: [],
  filteredCats: [],
  filter: "",
  setCats: (cats: Cat[]) => set({ cats, filteredCats: cats }),
  setFilter: (filter: string) =>
    set((state) => ({
      filter,
      filteredCats: state.cats.filter((cat) => {
        return (
          cat.name.toLowerCase().includes(filter.toLowerCase()) ||
          cat.slug.toLowerCase().includes(filter.toLowerCase()) ||
          cat.category.toLowerCase().includes(filter.toLowerCase())
        );
      }),
    })),
}));
