export const outputProperDate = (dateString: string | null) => {
  if (dateString === null) return dateString;
  const temp = new Date(dateString);
  const formattedDate = `${temp.getDate()}-${temp.getMonth()}-${temp.getFullYear()}`;
  return formattedDate;
};
