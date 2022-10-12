const textColors = require('./text-colors.js');
const logCounter = {
	counter: 1
}

if (process && (!(process.stdout.isTTY))) for (let key in textColors) { if (textColors.hasOwnProperty(key)) { textColors[key] = "" } }
const writeFunction = process ? process.stdout.write : console.log;
const lastEnter = process ? "\n" : "";

const commonWrite = (p_text, p_colors) => {
	for (let i = 0; i < p_colors.length; i++) {
		writeFunction(p_colors[i]);
	}
	writeFunction(p_text);
	writeFunction(textColors.Color_Off);
}

const tick = () => {
	commonWrite(`${logCounter.counter++}`.padStart(3, '0'), [textColors.Cyan_Underline]);
	writeFunction(` ${new Date().toString()} `);
}

const start = (p_text) => {
	tick();
	commonWrite(`Process Starting:`, [textColors.Yellow]);
	writeFunction(` ${p_text}${lastEnter}`);
}

const info = (p_text) => {
	tick();
	commonWrite(`Info:`, [textColors.Blue]);
	writeFunction(` ${p_text}${lastEnter}`);
}

const success = (p_text) => {
	tick();
	commonWrite(`Success:`, [textColors.Green]);
	writeFunction(` ${p_text}${lastEnter}`);
}

const error = (p_text) => {
	tick();
	commonWrite(`Error:`, [textColors.Yellow, textColors.Red_Background,]);
	writeFunction(` ${p_text}${lastEnter}`);
}

module.exports = {
	start: start,
	info: info,
	success: success,
	error: error
}