import dayjs from "dayjs";
const useDate = () => {
  const formattedDate = (date: Date) => {
    return dayjs(date).format("MMM DD, HH:MM");
  };
  return {
    formattedDate,
  };
};

export default useDate;
