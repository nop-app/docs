# Nuxt

Nop has a first-party support for Nuxt.js (Vue) and Vue router.  
Currently only Nuxt 2.x is supported.

## Installation

```shell
npm install --save-dev @nop-app/nuxt-nop@^2
```

or

```shell
yarn add --dev @nop-app/nuxt-nop@^2
```

::: warning
If you are using Nuxt < v2.9, you have to install the module as dependency (without `--dev` or `--save-dev`)
:::

## Usage

::: tip
You can see a working demo repository [on GitHub](https://github.com/nop-app/demo-nuxt).
:::

Add `@nop-app/nuxt-nop` to the `buildModules` section of your `nuxt.config.js`.

```js
{
  buildModules: [
    '@nop-app/nuxt-nop'
  ],
}
```

::: warning
If you are using Nuxt < v2.9, you have to add it to `modules` section instead of `buildModules`.
:::

Then, always in the `nuxt.config.js` file, add your settings for Nop:

```js
export default {
  // ... Other stuff
  nop: {
    enabledRoutes: [
      // Your routes here
    ],
    settings: {
      token: 'TOKEN_HERE',
      // ... Other settings
    },
  },
}
```

If you want, you can take advantage of the `publicRuntimeConfig` too to have dynamic environment variables available in production.

```js
export default {
  // ... Other stuff
  publicRuntimeConfig: {
    nop: {
      enabledRoutes: [
        // Your routes here
      ],
      settings: {
        token: 'TOKEN_HERE',
        // ... Other settings
      },
    },
  },
}
```

Note that the plugin will inject a `$nop` variable inside your Nuxt instance, therefore your can access it anytime with `app.$nop`.

## Settings

Please refer to [Vue settings](/integrations/vue.html#settings) to know more.

## Methods

Please refer to [Vue methods](/integrations/vue.html#methods) to know more.