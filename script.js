// Getting Elements.....
const historyValue = document.getElementById("history-value");
const outputValue = document.getElementById("output-value");
const backspaceBtn = document.getElementById("backspace");

// Getting And Printing History Value.....
function getHistory() {
    return historyValue.innerText;
}
function printHistory(num) {
    historyValue.innerText = num;
}




// Getting And Printing Output Value.....
function getOutput() {
    return outputValue.innerText;
}
function printOutput(num) {
    if(num == "") {
        outputValue.innerText = num;
    } else {
        outputValue.innerText = getFormattedNumber(num);
    }
}


// Formatting nNumber With Commas......
function getFormattedNumber(num) {
    if(num == "-") {
        return "";
    }
    const n = Number(num);
    const value = n.toLocaleString("en");
    return value;
}

// reversing Comma Seperated Number......
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ""));
}

// Operator
var operator = document.getElementsByClassName("operator");
for(let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        // Clear Button......
        if(this.id == "clear"){
            printOutput("");
            printHistory("");

            // Backspace Button .......
        } else if(this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if(output) { //If Output Has Value.....
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history= getHistory();
            if(output == "" && history != "") {
                if(isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if(output != "" || history != "") {
                
                output = output ==""? output : reverseNumberFormat(output);
                history += output;
                if(this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history += this.id;
                    printHistory(history);
                    printOutput("");

                }

            }
        }
    });
}




// Number
var number = document.getElementsByClassName("number");
for(let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN) { // If output is a Number.....
            output += this.id;
            printOutput(output);
        }
    });
}