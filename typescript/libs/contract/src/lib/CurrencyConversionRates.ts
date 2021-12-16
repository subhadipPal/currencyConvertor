export enum CurrencyCode {
  EUR = 'EUR',
  GBP = 'GBP',
  USD = 'USD',
}

export type ConversionRate = {
  timestamp: number;
  source: CurrencyCode;
  quotes: Record<CurrencyCode, number>;
};

// NOTE: Really, just an example! ;)
export const CurrencyConversionRates: Record<CurrencyCode, ConversionRate> = {
  [CurrencyCode.EUR]: {
    timestamp: 1610726830,
    source: CurrencyCode.EUR,
    quotes: {
      [CurrencyCode.EUR]: 1.0,
      [CurrencyCode.GBP]: 0.875614,
      [CurrencyCode.USD]: 1.211564,
    },
  },
  [CurrencyCode.GBP]: {
    timestamp: 1610726830,
    source: CurrencyCode.GBP,
    quotes: {
      [CurrencyCode.EUR]: 1.153134,
      [CurrencyCode.GBP]: 1.0,
      [CurrencyCode.USD]: 1.394518,
    },
  },
  [CurrencyCode.USD]: {
    timestamp: 1610726830,
    source: CurrencyCode.USD,
    quotes: {
      [CurrencyCode.EUR]: 0.812838,
      [CurrencyCode.GBP]: 0.735329,
      [CurrencyCode.USD]: 1.0,
    },
  },
};
