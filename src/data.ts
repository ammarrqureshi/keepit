export interface Binder {
  binderId: string;
  title: string;
  color?: string | "#f2f2f2";
  pages?: string[];
}

export const binders: Binder[] = [
  {
    binderId: "01",
    title: "My Journal",
    pages: ["day 1", "day 2", "day 3"],
  },
];
