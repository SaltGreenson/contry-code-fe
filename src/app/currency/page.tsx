import { getCurrency, ServerTable } from "@/shared";

export default async function Currency() {
  const data = await getCurrency();

  return (
    <div>
      <ServerTable
        head={[
          { key: "code", label: "CODE" },
          { key: "value", label: "VALUE" },
        ]}
        source={Object.entries(data.conversion_rates).map(([code, value]) => ({
          code,
          value,
        }))}
      />
    </div>
  );
}
