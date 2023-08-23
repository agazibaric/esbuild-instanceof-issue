# esbuild instanceof issue in monorepo

### Steps to reproduce:

1. npm install
2. npm run test
3. test fails due to `instanceof` issue
4. check in `packages/lambda/build/index.js` for existence of two `ZodError` classes (in my case it was `ZodError` and `ZodError2`)
