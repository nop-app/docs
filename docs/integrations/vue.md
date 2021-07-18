# Vue

Nop has a first-party support for Vue and Vue router.  
Currently only Vue2 is supported.

## Installation

```shell
npm install @nop-app/vue-nop@^2
```

or

```shell
yarn add @nop-app/vue-nop@^2
```

## Usage

::: tip
You can see a working demo repository [on GitHub](https://github.com/nop-app/demo-vue-router).
:::

Include and use VueNop inside your main file. In order to let it work, you must provide the router instance too:

```js
import Vue from 'vue'
import VueNop from '@nop-app/vue-nop'

// Your router defined somewhere else
import router from './router'

Vue.use(VueNop, {
  router,
  enabledRoutes: [
    // Your routes here
  ],
  settings: {
    token: 'TOKEN_HERE',
    // ... Other settings
  }
})
```

Note that the plugin will inject a `$nop` variable inside your Vue instance, therefore your can access it anytime with `this.$nop`.

## Settings

### `router`

<small>**Type**: `VueRouter`</small>  
<small>**Default**: `null`</small>  

The `VueRouter` instance. Required to let the plugin work properly.

### `enabledRoutes`

<small>**Type**: `Array`</small>  
<small>**Default**: `[]`</small>  

The list of enabled routes where the plugin should be loaded. It can be a list of [route names](https://router.vuejs.org/guide/essentials/named-routes.html), regular expressions or [absolute paths](https://router.vuejs.org/api/#route-object-properties).

```js
Vue.use(VueNop, {
  enabledRoutes: [
    // RegExp
    '/posts/[0-9]+',

    // Absolute path
    '/posts/123',

    // Route name
    'edit-post',
  ],
})
```

### `settings`

<small>**Type**: `Object`</small>  
<small>**Default**: `{}`</small>  

The Nop settings, where you define your token and other cool properties. [Discover the available settings here](/usage/settings/).

## Methods

### `setUser(name: String): void`

Set the current user name.

```js
this.$nop.setUser('Laura Palmer')
```

### `mergeSettings(settings: Object): void`

Merge the given settings for the Nop instance.

```js
/*
Current settings: {
  user: 'Laura',
  enabled: true,
  redirectOnApprove: '/',
}
*/

this.$nop.mergeSettings({
  redirectOnApprove: '/bye',
})

/*
New settings: {
  user: 'Laura',
  enabled: true,
  redirectOnApprove: '/bye',
}
*/
```
