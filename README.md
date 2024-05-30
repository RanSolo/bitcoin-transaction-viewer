# Info 

There are only two client side components that handle the SearchInput and the Checkbox.  Everything else is rendered server-side.  I used the app router for the first time, which was fun!  It’s odd and satisfying so use async/await in the server side components.

## Getting Started

First, run the development server:
See env.example to see the environment variables needed to run the project.
```bash
npx prisma migrate dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To make a user in your local database you need to send a POST http://localhost:3000/api/users with the following body:
```json
{
    "name": "your name",
    "email": "your email",
}
```

Then you should be able to save favorite transactions by clicking the checkbox in their row.

## Deploy on Vercel

https://bitcoin-transaction-viewer-rho.vercel.app/

I got the deployment to work, but have been struggling with getting prisma/postgress initialized on Vercel.  So locally you can save fav transactions, but not in production.  

