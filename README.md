# SENA-DATE

Una utilidad para manejar fechas en formato timestamp y long time

## Install

```bash
npm install sena-date
```

## Uso

```js
const { getTimeStamp, getLongTime } = require('sena-date');

getTimeStamp();        // 1792423800000
getLongTime('en-US')   // 'Monday, October 19, 2026 ...
```