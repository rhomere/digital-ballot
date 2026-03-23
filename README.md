# Digital Ballot Guide

A UI-focused side project built with Next.js, Tailwind CSS, to help citizens understand their ballots.

## What It Demonstrates

-

## Deployed to 
https://digital-ballot-gray.vercel.app/

## Stack

- Next.js 16 (App Router + TypeScript)
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build Validation

```bash
npm run lint
npm run build
```

Both commands complete successfully in this workspace.

## Main Files

- `src/app/page.tsx`: Primary ballot UI and interactions
- `src/data/ballotData.ts`: Sample ballot contests and candidate data
- `src/store/ballotStore.ts`: Zustand state store
- `src/app/globals.css`: Theme styles and motion
