# Deployment Guide for Hostinger (Node.js)

This repository is configured for deployment on Hostinger's Node.js platform using **MySQL**.

## 1. Prerequisites
- Only the source code is needed.
- **DO NOT** upload `node_modules`. Hostinger installs them.
- **DO NOT** upload `dist` manually. Hostinger builds it.

## 2. Hostinger Setup
1.  **Create a Database:**
    -   Go to Hostinger Dashboard > Databases.
    -   Create a new MySQL database.
    -   Note down: `Database Name`, `Username`, `Password`.

2.  **Environment Variables:**
    -   Go to your Node.js Application settings in Hostinger.
    -   Add the following variables (copy values from your local `.env`):
        -   `HOST`: `0.0.0.0`
        -   `PORT`: `1337` (or whatever Hostinger assigns, usually handled automatically but good to set)
        -   `APP_KEYS`: (Copy from valid .env)
        -   `API_TOKEN_SALT`: (Copy from valid .env)
        -   `ADMIN_JWT_SECRET`: (Copy from valid .env)
        -   `TRANSFER_TOKEN_SALT`: (Copy from valid .env)
        -   `DATABASE_CLIENT`: `mysql`
        -   `DATABASE_HOST`: `localhost` (or the IP provided by Hostinger)
        -   `DATABASE_PORT`: `3306`
        -   `DATABASE_NAME`: (Your Hostinger DB Name)
        -   `DATABASE_USERNAME`: (Your Hostinger DB User)
        -   `DATABASE_PASSWORD`: (Your Hostinger DB Password)
        -   `DATABASE_SSL`: `false`

3.  **Deployment Steps:**
    -   Connect this GitHub repository to Hostinger.
    -   **Build Command:** `npm run build`
    -   **Start Command:** `npm run start`
    -   Click **Deploy**.

## 3. Troubleshooting
-   **"Error: better-sqlite3":** This should **NOT** happen anymore. We replaced it with `mysql2` in `package.json`.
-   **Public Assets:** Images in `public/uploads` are now tracked in Git.
