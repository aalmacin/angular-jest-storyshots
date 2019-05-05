# Jest Setup

## Update angular.json to use jest builder

`angular.json`
```json
// ...

  "test": {
    "builder": "@angular-builders/jest:run",
    "options": {}
  }

// ...
```

# Storybook Setup

## Initialize Storybook

```sh
  npm i -g @storybook/cli
  sb init --type angular
```
