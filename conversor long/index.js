var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resulType = document.getElementById('resultType');
var inputType,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
reultType.addEventListener("change",myResult);

inputTypeValue= inputType.value;
resultTypeValue= resultType.value;

if(inputTypeValue)