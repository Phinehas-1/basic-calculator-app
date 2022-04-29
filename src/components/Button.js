import '../css/Button.module.css'
const ButtonKey = ({onClick, buttonValue, buttonType}) => {

    // to be passed with the action up to the Calculator component 
    const buttonObject = {
        keyValue: buttonValue,
        keyType : buttonType
    }

    return (
        <button onClick={() => onClick(buttonObject)}>{ buttonValue}</button>
    );
}

export default ButtonKey;