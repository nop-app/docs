# Methods

## `enable(): void`

Enable Nop for the current page is not already enabled.

```js
Nop.enable();
```

## `disable(): void`

Disable Nop for the current page if enabled.

```js
Nop.disabled();
```

## `isEnabled(): Boolean`

Check whether Nop is currently enabled.

```js
console.log(Nop.isEnabled()); // true
```

## `setUser(name: String): void`

Set the current user name.

```js
Nop.setUser('Laura Palmer');
```

## `mergeSettings(settings: Object): void`

Merge the given settings for the Nop instance.

```js
/*
Current settings: {
  user: 'Laura',
  enabled: true,
  redirectOnApprove: '/',
}
*/

Nop.mergeSettings({
  redirectOnApprove: '/bye',
});

/*
New settings: {
  user: 'Laura',
  enabled: true,
  redirectOnApprove: '/bye',
}
*/
```
