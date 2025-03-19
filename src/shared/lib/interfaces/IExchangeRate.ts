export interface IExchangeRate {
  time_last_update_unix: number;
  time_next_update_unix: number;
  base_code: string;
  conversion_rates: Record<string, number>;
}
