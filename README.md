# Node.js GitHub Actions Demo

A simple Node.js Hello World server with Jest/Supertest tests and a GitHub Actions CI workflow.

## Run locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
```

Expected output:

```text
Hello World from Node.js!
```

## Run tests

```bash
npm test
```

## GitHub Actions

The workflow is located at:

```text
.github/workflows/nodejs-ci.yml
```

It runs automatically when code is pushed to the `main` branch or when a pull request targets `main`.
