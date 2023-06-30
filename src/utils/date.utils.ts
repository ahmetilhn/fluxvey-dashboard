export const last7Days = () => {
  return [...Array(7)]
    .map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return getDayByDate(d);
    })
    .reverse();
};

export const getDayByDate = (date: Date): string => {
  return date.toLocaleDateString("en-EN", { weekday: "long" });
};
