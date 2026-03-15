export const CATEGORY_COLORS: Record<string, string> = {
  Remboursement: "bg-green-100 text-green-700",
  "Guide Pratique": "bg-blue-100 text-blue-700",
  Dialyse: "bg-purple-100 text-purple-700",
};

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
