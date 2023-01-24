## Live Demo
https://public-github-repo-browser.vercel.app/

## Specs
- State management: Redux
- UI library: Tailwind

## Routes
Index page: 
- Route: `/?page=&username=`
- Query:
  - page (required, default = 1)
  - username (required, default = ilhamgunawan)

## API
This project is using [GitHub API](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user) to fetch public repository data.

##

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Up And Running
Install all dependencies:
```bash
npm install
```

Create env file:
```bash
touch .env.local
```

Insert this value to the env file:
```
NEXT_PUBLIC_TOKEN=[your_github_token]
```

Make sure your token has permission to access public repository. Please refer to the [offical docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3030](http://localhost:3030) with your browser to see the result.
