"use client";
export default function ViTime({ dateString }) {
  let dayTime = new Date(dateString);
  {
    return (
      dayTime.getDate() +
      "/" +
      (dayTime.getMonth() + 1) +
      "/" +
      dayTime.getFullYear()
    );
  }
}
