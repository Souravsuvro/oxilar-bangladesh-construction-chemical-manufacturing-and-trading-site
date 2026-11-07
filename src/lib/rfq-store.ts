import { create } from "zustand";
import { persist } from "zustand/middleware";

export type RfqLine = {
  id: string;
  sku: string;
  name: string;
  pack: string;
  qty: number;
  note: string;
};

type State = {
  lines: RfqLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (line: Omit<RfqLine, "id" | "qty"> & { qty?: number }) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useRfq = create<State>()(
  persist(
    (set) => ({
      lines: [],
      open: false,
      setOpen: (open) => set({ open }),
      add: (line) =>
        set((s) => {
          const id = `${line.sku}-${line.pack}-${line.note}`;
          const hit = s.lines.find((l) => l.id === id);
          if (hit) {
            return {
              open: true,
              lines: s.lines.map((l) =>
                l.id === id ? { ...l, qty: l.qty + (line.qty ?? 1) } : l,
              ),
            };
          }
          return {
            open: true,
            lines: [...s.lines, { ...line, id, qty: line.qty ?? 1 }],
          };
        }),
      setQty: (id, qty) =>
        set((s) => ({
          lines: s.lines.map((l) => (l.id === id ? { ...l, qty: Math.max(1, qty) } : l)),
        })),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.id !== id) })),
      clear: () => set({ lines: [] }),
    }),
    { name: "oxilar-rfq", skipHydration: true, partialize: (s) => ({ lines: s.lines }) },
  ),
);
