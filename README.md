# Theme

1. **Fonts**: load the fonts in [\_app.tsx](./next/pages/_app.tsx)
2. **Styles**: modify the files in [styles](./next/template/styles/)
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

1. Convert to MUI

- theme
- components

2. Add more sections
