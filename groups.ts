export const DUE_GROUPS = [
  { key: "03-05-08", name: "Vencimentos 03, 05 e 08", days: [3, 5, 8] },
  { key: "10-13-15-17", name: "Vencimentos 10, 13, 15 e 17", days: [10, 13, 15, 17] },
  { key: "21-25-28", name: "Vencimentos 21, 25 e 28", days: [21, 25, 28] },
] as const;
export type DueGroupKey = typeof DUE_GROUPS[number]["key"];
export const findGroup = (key: string) => DUE_GROUPS.find(g => g.key === key);

export function competenceFromMonth(month?: string) {
  const now = new Date();
  const fallback = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const val = month && /^\d{4}-(0[1-9]|1[0-2])$/.test(month) ? month : fallback;
  return `${val}-01`;
}

export function monthLabel(competence: string) {
  const [year, month] = competence.slice(0, 7).split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(new Date(year, month - 1, 1));
}
