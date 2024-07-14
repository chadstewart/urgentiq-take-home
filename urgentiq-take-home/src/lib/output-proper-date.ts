export const outputProperDate = (dateString: string | null) => {
  try {
    if (!dateString) return "";
    const temp = new Date(dateString);
    if (temp instanceof Date && isNaN(+temp)) return "";
    const formattedDate = `${temp.getDate()}-${temp.getMonth()}-${temp.getFullYear()}`;
    return formattedDate;
  } catch (error) {
    return "";
  }
};
