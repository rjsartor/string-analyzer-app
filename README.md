This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that integrates an Express server to demonstrate the set up of a React based frontend with an express server backend. The application analyzes user input to calculate the longest streak of even or odd of alphabetical characters (i.e a=even, b=odd, c=even, etc.). 

Max streak(s) of characters are highlighted by their color (even or odd). Non alphabetical characters break the streak while spaces are ignored.

## Getting Started

The project is very lightweight and should only require running `npm i` for set-up.

Once dependecies are installed run `npm run dev` to start the Next.js development server and `npm run server` to start the Express development server.

Once servers are running visit `http://localhost:3000/`

## Project Structure

The project consists of two main components: the server directory and the src directory. 

`server` directory contains an `app.ts` express file and `routes` and `services` directories. `routes` contains the `analyze-string` route and `services` contains the `calculateStreak` function handling all of the string analysis logic.

server/
│
├── app.ts
│
├── routes/
│   └── analyze-string.ts
│
└── services/
    └── calculateStreak.ts

`src` is the Next.js app and includes an `analyze-string` route directory, a `components` directory, and a `hooks` directory. `analyze-string` is the proxy endpoint that sends a POST request to the server, `components` contains the input, display, and legend used for the UI, and `hooks` contains `useAnalyzeString` which calls the proxy endpoint and retrieves/sets the string analysis. 

src/
│
├── analyze-string/
│   └── route.ts
│
├── components/
│   ├── input.tsx
│   ├── display.tsx
│   └── legend.tsx
│
└── hooks/
    └── useAnalyzeString.ts

## Using the application

Simply enter text into the input field to start calculating the longest streak. Responses should be automatic and the the longest streaks will be highlighted in their approriate color. Errors should be handled in a red display text under the input field.

<img width="728" alt="Screen Shot 2023-11-16 at 10 39 47" src="https://github.com/rjsartor/string-analyzer-app/assets/51131460/ed986de2-fba1-4a60-a7c3-d12b18984106">

<img width="722" alt="Screen Shot 2023-11-16 at 10 41 02" src="https://github.com/rjsartor/string-analyzer-app/assets/51131460/cf572b99-5a6e-4118-bd45-4f15fcda8b30">


