"use client";

import { useEffect, useState } from "react";
import { getCurrency, IExchangeRate } from "../lib";

export const useCurrency = () => {
  const [data, setData] = useState<IExchangeRate | null>(null);

  useEffect(() => {
    getCurrency().then((data) => setData(data));
  }, []);

  return { data };
};
