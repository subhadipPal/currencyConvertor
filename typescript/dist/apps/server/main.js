/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/server/src/api/currency.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const contract_1 = __webpack_require__("./libs/contract/src/index.ts");
const express_1 = __webpack_require__("express");
const currencyRouter = (0, express_1.Router)();
currencyRouter.get('/', (req, res) => res.status(500).send({
    error: 'No currency for conversion given. Please provide a currency like: `GET /api/conversion/USD`',
}));
currencyRouter.get('/:currency', (req, res) => {
    const { currency } = req.params;
    console.log({ currency });
    const conversion = contract_1.CurrencyConversionRates[currency];
    if (!conversion) {
        res.status(500).send({
            error: `No conversion found for currency: "${currency}"`,
        });
    }
    res.send(conversion);
});
exports["default"] = currencyRouter;


/***/ }),

/***/ "./apps/server/src/api/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__("express");
const currency_1 = __webpack_require__("./apps/server/src/api/currency.ts");
const api = (0, express_1.Router)();
api.use('/currency', currency_1.default);
exports["default"] = api;


/***/ }),

/***/ "./libs/contract/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/contract/src/lib/CurrencyConversionRates.ts"), exports);


/***/ }),

/***/ "./libs/contract/src/lib/CurrencyConversionRates.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrencyConversionRates = exports.CurrencyCode = void 0;
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["EUR"] = "EUR";
    CurrencyCode["GBP"] = "GBP";
    CurrencyCode["USD"] = "USD";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
// NOTE: Really, just an example! ;)
exports.CurrencyConversionRates = {
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


/***/ }),

/***/ "cors":
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
const cors = __webpack_require__("cors");
const api_1 = __webpack_require__("./apps/server/src/api/index.ts");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', api_1.default);
app.get('/hello-world', (_, res) => {
    res.send({
        message: 'Hello to you too! :)',
    });
});
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map