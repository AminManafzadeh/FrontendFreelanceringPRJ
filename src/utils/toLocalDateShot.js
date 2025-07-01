export default function toLocalDateShot(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
