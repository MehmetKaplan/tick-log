This is an ultra-lightweight, pure javascript library which gives colored log data for both node and browser.

If output is not TTY colors are suppressed so that the logs can still be human readable. 


## Installation

```
yarn add tick-log
```

## Usage

```javascript
const tickLog = require('tick-log');
tickLog.start('This is the START log message');
tickLog.info('This is the INFO log message');
tickLog.success('This is the SUCCESS log message');
tickLog.error('This is the ERROR log message');
```

## API

| Name  | Description |
|-------|-------------|
|start| Uses yellow label when the output is TTY|
|info| Uses blue label when the output is TTY|
|success| Uses green label when the output is TTY|
|error| Uses red background label when the output is TTY|
|forceColor| When the output is not TTY, pass `true` to still use the coloring. (For browsers coloring still will not apply.)|

## License

The license is MIT and full text [here](LICENSE).

### Used Modules

None
