import { Router } from 'express';

import currency from './currency';

const api = Router();

api.use('/currency', currency);

export default api;
