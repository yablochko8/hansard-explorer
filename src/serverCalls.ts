const SERVER_URL = "https://api.parliament.uk/historic-hansard";

type getSittingProps = {
  year: number;
  month: number;
  day: number;
};

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
  return alpha[month - 1];
};

export const getSitting = async ({ year, month, day }: getSittingProps) => {
  // Example format: https://api.parliament.uk/historic-hansard/sittings/2002/apr/16.js
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
