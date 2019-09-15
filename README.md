# React Wordpress theme

[![circleci](https://circleci.com/gh/melvinversluijs/React-wp-theme/tree/master.svg?style=shield)](https://circleci.com/gh/melvinversluijs/React-wp-theme/tree/master)

A project to test out the capabilities of the Wordpress API
and the use of React in a Wordpress theme.

Since this is a personal project I will push all my commits directly to the master branch.

The basic blog functionlity has been implemented, in the future I'll try to add some more features and optimize the current code.

## Info

Maintainer: Melvin Versluijs

Github: [https://github.com/melvinversluijs](https://github.com/melvinversluijs)

## Prerequisites

- Wordpress 4.9.6 or greater
- PHP 7.1 or greater
- MySQL 5.6 or greater | MariaDB 10.1 or greater
- NodeJS 10.3 or greater and NPM 6.1 or greater
- Yarn 1.13 or greater

## Development

Before developing you need to install the NPM packages using `yarn install`.

While developing you can use the `yarn run dev` command to let webpack watch your JS and SCSS files.

After developing use the `yarn run build` to create a production ready dist package.

Don't forget the use the `yarn run test:eslint` to check your code style.
