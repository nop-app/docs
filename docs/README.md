---
title: Installation
---
# Installation

1. Create an account on [Nop](https://nop.is) and create a project with your domain name.  

2. Include the Nop SDK before the `</head>` tag:

```html
<script src="https://nop.is/js/sdk.js"></script>
```

3. Init the SDK with the secret token of your project. You can find the token in the projects list or when you edit them.

```html
<script src="https://nop.is/js/sdk.js"></script>
<script>
Nop.init({
    token: '<your_token_here>',
});
</script>
```


