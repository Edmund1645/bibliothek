export const truncateString = (text: string, maxLength: number = 80) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
