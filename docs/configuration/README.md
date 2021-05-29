---
title: Configuration
---
# Configuration

The Nop SDK allows several configuration options to provide the best experience.  
Before scrolling, please take a second to understand the following terminology:  

**Owner**: The user that first lands on the given page. All the access requests will be sent to the owner.  
**Guest**: The user that lands on a busy page - where another user is already active. He can request access or force it. 

## `token`

<small>**Type**: `String`</small>  

<small>**Required**</small> The project secret token. Without it, it won't work.

```js
Nop.init({
    token: 'ce0bb036-6708-4b77-9413-1fc96e1dd0c4',
});
```

## `enabled`

<small>**Type**: `Boolean`</small>  
<small>**Default**: `true`</small>  

<small>*Optional*</small> Enable or disable Nop in the current page. Useful if you want to include the SDK in all the pages and decide per-page if enable it.

```js
Nop.init({
    enabled: false,
});
```

## `user`

<small>**Type**: `String`</small>  
<small>**Default**: `null`</small>  

<small>*Optional*</small> The current user name. It can be really anything: an email adress, a name, whatever. If given, it will be shown on access requests and other messages.

```js
Nop.init({
    user: 'John Doe',
});
```

## `locale`

<small>**Type**: `String | Object`</small>  
<small>**Default**: `en-US`</small>  

<small>*Optional*</small> The locale used to translate the messages. You can provide a custom translation providing an **object** as argument. [On GitHub](https://github.com/nop-is/i18n/blob/master/en-US.json) you can find the keys and their translation values.  

::: tip Locales
These are the locales currently supported out-of-the-box: <strong>en-US</strong>, <strong>it-IT</strong>.
:::

**Example 1**
```js
Nop.init({
    locale: 'it-IT',
});
```

**Example 2**
```js
Nop.init({
    locale: {
        PAGE_LOCKED: {
            TITLE: "Page locked",
            DESCRIPTION: "Wait wait, someone else is currently editing this page!",
            DESCRIPTION_USER: "Wait wait, <strong>{user}</strong> is currently editing this page!",
            BUTTONS: {
                REQUEST_ACCESS: "Request access",
                CANCEL: "Cancel"
            }
        },
    },
});
```

## `redirectOnCancel`

<small>**Type**: `String`</small>  
<small>**Default**: `/`</small>  

<small>*Optional*</small> The URL in which the **guest** will be redirected when canceling an access request.  
If you're looking for more control, take a look to [onCancel](#on-cancel).

```js
Nop.init({
    redirectOnCancel: '/list',
});
```

## `redirectOnReject`

<small>**Type**: `String`</small>  
<small>**Default**: `/`</small>  

<small>*Optional*</small> The URL in which the **guest** will be redirected when his access request has been rejected.  
If you're looking for more control, take a look to [onReject](#on-reject).

```js
Nop.init({
    redirectOnReject: '/sad',
});
```

## `redirectOnApprove`

<small>**Type**: `String`</small>  
<small>**Default**: `/`</small>  

<small>*Optional*</small> The URL in which the **owner** will be redirected when accepting an access request and, therefore, his session has been closed.  
If you're looking for more control, take a look to [onApprove](#on-approve).

```js
Nop.init({
    redirectOnApprove: '/yay',
});
```

## `redirectOnForced`

<small>**Type**: `String`</small>  
<small>**Default**: `/`</small>  

<small>*Optional*</small> The URL in which the **owner** will be redirected when an access request has been forced from a *guest* and, therefore, his session has been closed.  
If you're looking for more control, take a look to [onForced](#on-forced).

```js
Nop.init({
    redirectOnForced: '/kick',
});
```

## `onCancel`

<small>**Type**: `Function`</small>  
<small>**Default**: *redirect to `redirectOnCancel`*</small>  

<small>*Optional*</small> Callback invoked when the **guest** cancels an access request.  

```js
Nop.init({
    onCancel: () => {
        console.log('Canceled');
    },
});
```

## `onReject`

<small>**Type**: `Function`</small>  
<small>**Default**: *redirect to `redirectOnReject`*</small>  

<small>*Optional*</small> Callback invoked when the **guest** access request has been rejected.  

```js
Nop.init({
    onReject: () => {
        console.log('Rejected');
    },
});
```

## `onApprove`

<small>**Type**: `Function`</small>  
<small>**Default**: *redirect to `redirectOnApprove`*</small>  

<small>*Optional*</small> Callback invoked when the **owner** approves an access request.  

```js
Nop.init({
    onApprove: () => {
        console.log('Approved');
    },
});
```

## `onForced`

<small>**Type**: `Function`</small>  
<small>**Default**: *redirect to `redirectOnForced`*</small>  

<small>*Optional*</small> Callback invoked for the **owner** when an access request has been forced.  

```js
Nop.init({
    onForced: () => {
        console.log('Forced');
    },
});
```