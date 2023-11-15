This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that integrates an Express server to demonstrate the set up of a React based frontend with an express server backend. The application analyzes user input to calculate the longest streak of even or odd of alphabetical characters (i.e a=even, b=odd, c=even, etc.). 

Max streak(s) of characters are highlighted by their color (even or odd). Non alphabetical characters break the streak while spaces are ignored.

## Getting Started

The project is very lightweight and should only require running `npm i` for set-up.

Once dependecies are installed run `npm run dev` to start the Next.js development server and `npm run server` to start the Express development server.

Once servers are running visit `http://localhost:3000/`

## Project Structure

The project consists of two main components: the server directory and the src directory. 

`server` directory contains an `app.ts` express file and `routes` and `services` directories. `routes` contains the `analyze-string` route and `services` contains the `calculateStreak` function handling all of the string analysis logic.

`src` is the Next app and includes an `analyze-string` route directory, a `components` directory, and a `hooks` directory. `analyze-string` is the proxy endpoint that sends a post request to the server, `components` contains the input, display, and legend used for the UI, and `hooks` contains `useAnalyzeString` which calls the proxy endpoint and retrieves/sets the string analyses. 

## Using the application

Simply enter text into the input field to start calculating the longest streak. Responses should be automatic and the the longest streaks will be highlighted in their approriate color. Errors should be handled in a red display text under the input field.
