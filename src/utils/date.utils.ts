export const last7Days = () => {
  return [...Array(7)]
    .map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.toLocaleDateString("en-EN", { weekday: "long" });
    })
    .reverse();
};
