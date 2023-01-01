const textColors = require('./text-colors.js');
const textColors_ = Object.assign({}, textColors); // dublicate to reuse colors in case of forceColor
const logCounter = {
	counter: 1
}

if (process && (!(process?.stdout?.isTTY))) {
	for (let key in textColors) {
		if (textColors.hasOwnProperty(key)) { textColors[key] = "" }
	}
};

const forceColor = (p) => {
	for (let key in textColors) {
		textColors[key] = p ? textColors_[key] : "";
	}
}

const tick = () => {
	let tickValue = `${logCounter.counter++}`.padStart(3, '0')
	return `${textColors.Cyan_Underline}${tickValue}${textColors.Color_Off}`
}

const commonWrite = (label, text, useProcessStdoutWrite) => {
	let toBeWritten = `${tick()} ${label}${text}`;
	if (useProcessStdoutWrite && process && process?.stdout) {
		process.stdout.write(`${toBeWritten}\n`);
	}
	else console.log(toBeWritten)
}

const start = (text, useProcessStdoutWrite = false) => {
	let label = `${textColors.Yellow}Start:${textColors.Color_Off}   `;
	commonWrite(label, text, useProcessStdoutWrite);
}

const info = (text, useProcessStdoutWrite = false) => {
	let label = `${textColors.Blue}Info:${textColors.Color_Off}    `;
	commonWrite(label, text, useProcessStdoutWrite);
}

const success = (text, useProcessStdoutWrite = false) => {
	let label = `${textColors.Green}Success:${textColors.Color_Off} `;
	commonWrite(label, text, useProcessStdoutWrite);
}

const error = (text, useProcessStdoutWrite = false) => {
	let label = `${textColors.Yellow}${textColors.Red_Background}Error:${textColors.Color_Off}   `;
	commonWrite(label, text, useProcessStdoutWrite);
}

module.exports = {
	start: start,
	info: info,
	success: success,
	error: error,
	forceColor: forceColor
}