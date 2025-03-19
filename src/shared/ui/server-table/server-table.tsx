import { ITableHead } from "@/shared/lib";

type Props<T> = {
  head: Omit<ITableHead<T>, "render">[];
  source: T[];
};

export function ServerTable<T>({ head, source }: Props<T>) {
  return (
    <table>
      <thead>
        <tr>
          {head.map(({ label }) => (
            <td key={label}>{label}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {source.map((row, index) => (
          <tr key={index}>
            {head.map(({ key }, idx) => (
              <td key={idx}>
                <>{row[key]}</>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
