## Quick Start

```html
<script src="f5.js">
```

## Usage

### f5.Swatch
```js
var swatch = new f5.Swatch();
// add some colors to your platte
swatch.add(color(255, 0, 0));
swatch.add(color(0, 255, 0));
swatch.add(color(0, 0, 255));

// randomly select a fill color from the swatch
fill(swatch.random());
```

### f5.Grid
```js
var grid = new f5.Grid();

grid.go(function() {
  ellipse(0, 0, 30, 30);
})
```
