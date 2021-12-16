# Client Side (Frontend)

The purpose of this exercise is to evaluate your ability to write clean, understandable code and communicate with other developers in a pair programming session.

You do _**NOT**_ have to fulfill all tasks. This is not to give you any pressure or force you into hours of work, it can also be a good discussion about how you'd tackle the task, but we'd like to see some code 🤓

## Task

1. Extend this React with the functionality to convert any given amount of money 1 < n < 1000 from USD to EUR using the API mentioned below.

2. Write basic unit test for a single component.
   
3. Write basic e2e tests - check out the apps/client-e2e folder ;)

During working on the task you are welcome to use any available resources (also Google) and libraries.

### The Backend API
We've prepared a backend for you to use in the folder apps/server, try calling:
`
GET http://localhost:3333/api/currency/USD
`

You can find the types for this API in the following file: [libs/contract/src/lib/CurrencyConversionRates.ts](../../libs/contract/src/lib/CurrencyConversionRates.ts)

## Interview
During the next interview you will go through your solution together with interviewers and further extend it.
