# Culurs

## Installation

```shell
npm install --save-dev culurs
```

```javascript
import culurs from 'culurs';
```

## Styling with CSS variables

```css
body {
  background-color: var(--primary);
  color: var(--secondary);
}
```

```javascript
const paint = culurs(0.5, 0.7, 'primary', 'secondary');

setInterval(paint, 1000);
```

## Styling in JavaScript

```javascript
const [primary, secondary] = culurs(0.5, 0.3);

function paint() {
  document.body.style.backgroundColor = primary;
  document.body.style.color = secondary;
}

setInterval(paint, 1000);
```
