This is a ultra-lightweight, pure javascript library which gives colored log data for both node and browser.

If output is not TTY colors are suppressed so that log can still be human readable. 


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
|start| Uses yellow label when the outpus is TTY|
|info| Uses blue label when the outpus is TTY|
|success| Uses green label when the outpus is TTY|
|error| Uses red background label when the outpus is TTY|

## License

The license is MIT and full text [here](LICENSE).

### Used Modules

None