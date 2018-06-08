# smooth-anchor

Lightweight smooth scrolling polyfill for anchor tags. Every `<a href='#'>` will result in a smooth scroll and focus to the element referenced in the `href`.

## Install

`yarn add smooth-anchor`

## Usage

```js
import smoothAnchor from "smooth-anchor";

smoothAnchor();
```

## Note

This package also includes `smoothscroll-polyfill` meaning `scrollTo` & `scrollIntoView` will also be polyfilled on your page.
