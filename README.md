# Quote Search and Favourite Application

This application allows users to search for quotes from famous authors using the 'quotable' API and mark them as favourites. The favourites are stored in a MySQL database and can be reviewed on a separate page.

## Technology Stack

- Backend: Node.js with Express
- Database: MySQL
- Frontend: React with Vite.js
- Styling: Bootstrap 5

## Backend Endpoints

`/api/search`: Accepts a query parameter and returns a list of quotes matching the search term.
`/api/favourites`: GET to retrieve all favourite quotes, POST to add a new favourite quote.

## Frontend Pages

`/search`: Interface to search for quotes and display results.
`/favourites`: Displays all quotes marked as favourite.

## Installation and Local Setup

**Prerequisites:**

- Node.js (latest LTS version)
- MySQL Server

**Setup Steps:**

1. **Clone the repository:**

```shell
git clone https://github.com/heyasif/Slashash.git

- cd backend
  - Run `npm install` and configure the database in `/config/db.js`
  - Then run `node index.js`
- cd frontend
  - Run `npm install`
  - Then run `npm run dev`

```
