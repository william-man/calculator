var inputValue1 = "";
var inputValue2 = "";
var operator = "";
var outputValue = "";

$(document).ready(function() {
    $(".calc_button").on("click",function(e){
        let value = e.target.innerHTML;
        if (value >= 0 && value <= 9) {
            assignValue(value);
        } else if( value === ".") {
            assignValue(value);
        } else if(value === "%") {
            assignOperator(value);
        } else {
            assignOperator(value);
        }
    })
    function assignValue(num) {
        if (operator === "") {
            inputValue1 += num;
            displayInput(inputValue1);
        } else if ( operator === "=") {
            inputValue1 = "";
            operator = "";
            inputValue1 += num;
            displayInput(inputValue1);
        }
        else {
            inputValue2 += num;
            displayInput(inputValue2);
        }
        
    }   

    function assignOperator(oper) {
        if (oper === "AC") {
            allClear(oper);
        } else if (oper ==="C") {
            cancel(oper);
        } else if(oper === "%") {
            if (operator != "") {
                inputValue2 /= 100;
                calculateValue();
                operator = "";
            } else {
                allClear();
            }
        } else if(operator === "") {
            operator = oper;
        } else {
            calculateValue();
            operator = oper;
        }
    }

    function displayInput(btn) {
        $("#display1").text(btn);
    }

    function calculateValue() {
        switch(operator) {
            case "+":
                outputValue = +inputValue1 + +inputValue2;
                break;
            case "-":
                outputValue = +inputValue1 - +inputValue2;
                
                break;
            case "*":
                outputValue = +inputValue1 * +inputValue2;
                break;
            case "/":
                outputValue = +inputValue1 / +inputValue2;
                break;
        }
        errorCheck(outputValue)
    }

    function allClear(oper) {
        inputValue1 = "";
        inputValue2 = "";
        operator = "";
        outputValue = "";
        displayInput(0);
    }

    function cancel(oper) {
        if(oper === "") {
            inputValue1 = "";
            displayInput(0);
        } else {
            inputValue2 = "";
            displayInput(0);
        }
    }

    function errorCheck(err) {
        if (err === NaN || err === Infinity) {
            allClear();
            displayInput("Error!");
        } else {
            inputValue1 = err;
            inputValue2 = "";
            displayInput(err);
        }
    }
})
