[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/dennyhong96/denny-hong)

## Overview

- `src/pages/index.js` - Static generated home page
- `src/pages/posts/*` - Static generated blog posts
- `src/pages/snippets/*` - Static generated code snippets
- `src/pages/projects/*` - Static generated projects portfolio
- `src/pages/about.js` - Static about page

## Run the project locally

```bash
$ git clone https://github.com/dennyhong96/denny-hong.git
$ cd denny-hong
$ npm i
$ npm run dev
```

Create a `.env.local` file similar to [`.env.example`](.env.example).

## Built With

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)

StyledComponents Migration TODO:

- Next Image Wrapper with aspect ratios
- Check for breakpoints
- Tech Icon Link Component
- Container & Section component
- Add prism for code syntax highligting
- Forestry blocks
- Import orders
- Fix nav item link underlines on small screen
- Search for TODO
