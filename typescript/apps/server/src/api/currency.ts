import { CurrencyConversionRates } from '@coding-challenge/contract';
import { Router } from 'express';

const currencyRouter = Router();

currencyRouter.get('/', (req, res) =>
  res.status(500).send({
    error:
      'No currency for conversion given. Please provide a currency like: `GET /api/conversion/USD`',
  })
);

currencyRouter.get('/:currency', (req, res) => {
  const { currency } = req.params;
  console.log({ currency });

  const conversion = CurrencyConversionRates[currency];

  if (!conversion) {
    res.status(500).send({
      error: `No conversion found for currency: "${currency}"`,
    });
  }

  res.send(conversion);
});

export default currencyRouter;
