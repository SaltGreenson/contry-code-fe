"use client";
import { CurrencyTable } from "@/features";
import { useCurrency } from "@/shared/hooks";
import styles from "./page.module.css";

export default function Home() {
  const { data } = useCurrency();

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.container}>
      <CurrencyTable currency={data} />
    </div>
  );
}
