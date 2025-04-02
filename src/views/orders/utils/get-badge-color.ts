export const getBadgeColor = (status: string) => {
  const colors: Record<string, string> = {
    Pending: "bg-yellow-500",
    Paid: "bg-green-500",
    Signal: "bg-red-500",
  };
  return colors[status];
};
