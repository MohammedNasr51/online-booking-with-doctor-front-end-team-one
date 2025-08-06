export function generateDatesToEndOfYear() {
  const dates = [];
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31);

  while (today <= endOfYear) {
    const dateStr = today.toISOString().split("T")[0];

    const label = today.toLocaleDateString("en-US", {
      weekday: "short",
    });

    const fullLabel = today.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    dates.push({ label, date: dateStr, fullLabel });

    today.setDate(today.getDate() + 1);
  }

  return dates;
}
