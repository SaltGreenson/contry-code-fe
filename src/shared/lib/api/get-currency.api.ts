import { IExchangeRate } from "../interfaces";

export const getCurrency = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/currency/many`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Ошибка загрузки данных");
  }

  return (await res.json()) as IExchangeRate;
};
