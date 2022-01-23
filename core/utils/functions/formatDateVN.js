export default function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 101).toString().substring(1);
  const day = (date.getDate() + 100).toString().substring(1);
  return day + '/' + month + '/' + year;
}
