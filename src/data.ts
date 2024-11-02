export interface Binder {
  binderId: string;
  title: string;
  description?: string;
  color?: string | "#f2f2f2";
  pages?: string[];
}

export const binders: Binder[] = [
  {
    binderId: "01",
    title: "My Journal",
    description:
      "this is all about my daily entries and thoughts i wrestle with.",
    pages: ["day 1", "day 2", "day 3"],
  },
  {
    binderId: "02",
    title: "Favourite",
    pages: ["dff df df", "day 3"],
  },
  {
    binderId: "03",
    title: "My projects",
    pages: ["Keepit", "likhlo"],
  },
  {
    binderId: "04",
    title: "2024",
    pages: ["goals ", "likhlo"],
  },
];
