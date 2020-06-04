export const formatDate = dateTime => {
  let date = dateTime.replace('T', ' ').slice(0, 19);
  return date;
};
