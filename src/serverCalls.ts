const SERVER_URL = "https://api.parliament.uk/historic-hansard";

const monthToAlpha = (month: number) => {
  const alpha = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return alpha[month];
};

export const getSitting = async (date: Date) => {
  // Example format: https://api.parliament.uk/historic-hansard/sittings/2002/apr/16.js
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const alphaMonth = monthToAlpha(month);

  const fullPath = `${SERVER_URL}/sittings/${year}/${alphaMonth}/${day}.js`;

  console.log("fullPath");
  console.log(fullPath);

  const response = await fetch(fullPath);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
