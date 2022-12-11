
# microicon

SVG icon microservice and node module

Includes **over 1200** icons from Material Design, Reline, Geomicons, and Simple Icons

## Usage

https://microicon-six.vercel.app/chevron

### Size

https://microicon-six.vercel.app/chevron/32

### Color

https://microicon-six.vercel.app/chevron/ff0000

### Direction

(Only for directional icons)

https://microicon-six.vercel.app/chevron/down

### Stroke width

(Only for Reline icons)

https://microicon-six.vercel.app/chevron/?strokeWidth=1


## Node.js Usage

```sh
npm install microicon
```

```js
const paths = require('microicon')

const svg = `
<svg viewBox='0 0 32 32'
  width='32'
  height='32'
  fill='currentcolor'>
  <path d='${paths.heart}' />
</svg>
`
```

Note: the `paths` object is quite large and it is **not** recommended for use in client side scripts. Consider using a build step to extract the subset of icons that you need.

### React Component

```js
const React = require('react')
const { Icon } = require('microicon')

module.exports = () => (
  <div>
    <Icon name='heart' size={32} color='tomato' />
  </div>
)
```


MIT License

