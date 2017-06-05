
function clearScreen() {
	document.calculator.screen.value = '';
	document.calculator.result.value = '';
};
function clearLast() {
	document.calculator.screen.value = document.calculator.screen.value.slice(0, document.calculator.screen.value.length-1);
};
function btnClick(value){
	document.calculator.screen.value += value;
};
function evaluation() {
	document.calculator.result.value = eval(document.calculator.screen.value);
};

