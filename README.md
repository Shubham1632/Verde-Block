# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/00d770f2-71ea-4a83-851a-a90bc0b82038

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/00d770f2-71ea-4a83-851a-a90bc0b82038) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/00d770f2-71ea-4a83-851a-a90bc0b82038) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Local email notification service (for investor signups)

This project includes a small Express-based email service you can run locally to send notifications when an investor signs up.

1. Copy `.env.example` to `.env` and fill in your Gmail address and an App Password (recommended) and the recipient address:

```
SMTP_EMAIL=your-email@gmail.com
SMTP_APP_PASSWORD=your-app-password
NOTIFY_TO=team@example.com
```

2. Install dependencies and run the server (from project root):

```
# install dependencies (npm/pnpm/yarn)
npm i
# start the email server
npm run start:server
```

3. Run the frontend in a separate terminal (dev server):

```
npm run dev
```

When the investor form is submitted, the frontend will POST to `/api/investor-signup`. If both servers are running on the same machine and ports, calling `/api/investor-signup` from the Vite app should work with the express server (CORS is enabled in the server).

If you run the email server on a different port (the default in this repo is 4000), the frontend is configured to use the environment variable `VITE_EMAIL_API_BASE` as the API base URL. For example, in `.env` for the frontend (Vite) you can add:

```
VITE_EMAIL_API_BASE=http://localhost:4000
```

Vite exposes variables prefixed with `VITE_` to the client; if you don't set `VITE_EMAIL_API_BASE`, the frontend will default to `http://localhost:4000`.

Notes:

- Use a Gmail App Password (create under Google Account -> Security -> App passwords) instead of your main password.
- For production, host the email service on a secure backend and keep secrets out of client code. This is a minimal example for local/dev use.
