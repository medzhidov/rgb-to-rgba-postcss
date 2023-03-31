# rgb-to-rgba-postcss

Postcss plugin to replace all `rgb(255 255 255 / var(--any-var))` with `rgba(255, 255, 255, var(--any-var))`.

```
...
plugins: [
    require('rgb-to-rgba-postcss'),
]
...
```
