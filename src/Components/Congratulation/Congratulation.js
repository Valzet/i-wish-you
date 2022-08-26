function Congratulation(props) {
    return (
        <div className="elements__block">
            <label htmlFor={props.id} className="congratulationInput">{props.birthdayWish}</label>
            <input type="radio" name="congratulationInput" className="element" id={props.id} value={props.birthdayWish} onClick={props.onInputClick} />
        </div>
    )
}

export default Congratulation;