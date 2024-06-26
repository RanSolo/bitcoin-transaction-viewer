# Bitcoin Transaction Viewer - code challenge

## Info

There are only two client side components that handle the SearchInput and the Checkbox.  Everything else is rendered server-side.  I used the app router for the first time, which was fun!  It’s odd and satisfying to use async/await in the server side components.

## Deployed at

<https://bitcoin-transaction-viewer-rho.vercel.app/>

## Transaction Viewer features

- You can save your favorite transactions and they will persist across sessions.
- The onChange saves your selection to the data.  
- You can search for transactions by their address hash which is rendered server side using a query string parameter.  
- A directive displays when no address matches.
- data is fetched from the api and displayed in a table.
- The filters are set up to work using query parameters, but I don't know the data that well so I didn't implement them.

## Next-Auth

Authorization through google provider is now live.  Send me your gmail account and I will add you to the test email group <ransolo@me.com>.  I am not protecting any routes at this point, but that would be the next step.  

- The user clicks login and is redirected to google to authorize the app.  Then they are redirected back to the app.
- I get the session and display the picture and email of the user.
- I toggle login and logout buttons based on if the user is authorized or not.  

## UI/UX

- loading state is displayed when the data is being fetched.
- error state is showed when nothing is returned from the api.

### Future steps

- the favorites do save to the database, but they are not associated to a user.  This was just a quick way to get the functionality working.  Add pg adapter for Next Auth.
- Protect all routes
- Match the figma designs
- Display correct data fields in the table, the figma designs did not mirror to the data returned from the api.
- Add the filter functionality
- Add Pagination or infinite scroll to the table.

<https://gyazo.com/81dbc10d221b505ffe4ffcb818a56e00>

## Getting Started

First, run the development server:
See env.example to see the environment variables needed to run the project.

```bash
npx prisma migrate dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Save favorite transactions by clicking the checkbox in their row.

## Deployed on Vercel

## Tech Stack

- Next.js
- Prisma
- Postgres
- Next-Auth
- React
- Typescript
- TailwindCSS
- DaisyUI
- Vercel
- mempool
