const tickLog = require('../tick-log');

const writeTexts = (useProcessStdoutWrite) => {
	tickLog.start('This is the START log message', useProcessStdoutWrite);
	tickLog.info('This is the INFO log message', useProcessStdoutWrite);
	tickLog.success('This is the SUCCESS log message', useProcessStdoutWrite);
	tickLog.error('This is the ERROR log message', useProcessStdoutWrite);
}

console.log('\n\nConsole Normal Colorful:');
writeTexts(false);
console.log('\n\nProcess.Stdout.Write Normal Colorful:');
writeTexts(true);

tickLog.forceColor(false);
console.log('\n\nConsole Force Non-colorful:');
writeTexts(false);
console.log('\n\nProcess.Stdout.Write Force NonColorful:');
writeTexts(true);

tickLog.forceColor(true);
console.log('\n\nConsole Force Colorful:');
writeTexts(false);
console.log('\n\nProcess.Stdout.Write Force Colorful:');
writeTexts(true);
