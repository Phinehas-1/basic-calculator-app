import style from '../css/Display.module.css'
const Display = ({ displayValue }) => {
    return (
        <div className={style.container}>
            { displayValue }
        </div>
    )
}

export default Display