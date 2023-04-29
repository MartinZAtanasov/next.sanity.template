# Theme

1. **Fonts**: load the fonts in [\_app.tsx](./next/pages/_app.tsx)
2. **Theme**: modify the files in [theme\index.ts](./next/template/theme/index.ts)
3. **FavIcon**: hosted locally in [public](./next/public/) and used in [\_document.tsx](./next/pages/_document.tsx)

# Apollo

1. Add .env file

# Next Config

1. Edit the next config so that next.js can process external images:

```js
{
  ...
  images: {
    domains: ["cdn.sanity.io"],
  }
}
```

<!-- TODO -->

1. .... SanityBlockContent doesn't style other elements like - em, strong, list
2. font initial flickering
