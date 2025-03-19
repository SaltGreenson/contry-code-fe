import { ICurrency, IExchangeRate, storage, Table } from "@/shared";

type Props = {
  currency: IExchangeRate;
};

export const CurrencyTable = ({ currency }: Props) => {
  const isSelected = (item: ICurrency) => {
    const active = storage.get<Record<string, number>>("active-currency", {});

    return Boolean(active[item.code]);
  };

  const toggleChecked = (item: ICurrency) => () => {
    const { [item.code]: current, ...data } = storage.get<
      Record<string, number>
    >("active-currency", {});

    if (!current) {
      data[item.code] = item.value;
    }

    storage.set("active-currency", data);
  };

  return (
    <div>
      <Table
        head={[
          { key: "code", label: "CODE" },
          { key: "value", label: "VALUE" },
        ]}
        source={Object.entries(currency.conversion_rates).map(
          ([code, value]) => ({ code, value })
        )}
        isSelected={isSelected}
        toggleChecked={toggleChecked}
      />
    </div>
  );
};
