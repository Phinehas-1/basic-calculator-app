import ButtonKey from "./Button"
import Display from "./Display"
import { useState, useRef } from 'react'
import style from  '../css/Calculator.module.css'

const Calculator = () => {

    // to be passed as props to the individual Button components 
    const buttonValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '/', 'X', '=', 'clr'];
    const buttonType = ['operator', 'operand'];

    const operands = useRef([]);
    const operators = useRef('');
    const [value, setValue] = useState('0');

    const doOperation = buttonObject => {
        if (buttonObject.keyValue === 'clr') {
            clearOperation();
            return '0';
        }
        // if the button clicked is an operator 
        if (buttonObject.keyType === 'operator') {
            // set the operator type to the button clicked 
            operators.current = buttonObject.keyValue;
            // dislay the latest value added in the operands array
            return operands.current[operands.current.length - 1];
        } else { /* if the button clicked is an operand... */
            // update the values in the operands array 
            operands.current.push(buttonObject.keyValue);
            // if there is less than two values in the operands array 
            if (operands.current.length < 2) {
                // dislay the latest value added in the operands array
                return operands.current[0];
            } else { /* if there are atleast two operands, do the operation corresponding to the current operator type */
                switch (operators.current) {
                    case '-': return subtractOperation(operands.current);
                    case '+': return additionOperation(operands.current);
                    case 'X': return multiplicationOperation(operands.current);
                    default: return;
                }
            }
        }
    }
    
    const subtractOperation = arr => {
        let result = arr[0] - arr[1];
        arr.push(result);
        while (arr.length > 1) {
            arr.shift();
        }
        return result;
    }

    const additionOperation = arr => {
        let result = arr[0] + arr[1];
        arr.push(result);
        while (arr.length > 1) {
            arr.shift();
        }
        return result;
    }

    const multiplicationOperation = arr => {
        let result = arr[0] * arr[1];
        arr.push(result);
        while (arr.length > 1) {
            arr.shift();
        }
        return result;
    }

    const clearOperation = () => {
        operands.current = [];
        operators.current = null;
        setValue('0');
    }

    const handleClickButton = (buttonObject) => {
        let displayValue = doOperation(buttonObject);
        setValue(displayValue);
    }

    return (
        <div className={style.container}>
            <section>
                <Display displayValue={value} />
            </section>
            <section className={style.buttonContainer }>                
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[1]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[2]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[3]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[4]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[5]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[6]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[7]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[8]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[9]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[0]} buttonType={buttonType[1]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[10]} buttonType={buttonType[0]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[11]} buttonType={buttonType[0]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[13]} buttonType={buttonType[0]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[14]} buttonType={buttonType[0]} />
                <ButtonKey onClick={handleClickButton} buttonValue={buttonValue[15]} buttonType={buttonType[0]} />
            </section>            
        </div>
    )
}

export default Calculator