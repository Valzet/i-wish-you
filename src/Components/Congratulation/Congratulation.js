function Congratulation(props) {
    return (
    <div className="elements__block">
        <label htmlFor="input" className="congratulationInput">{props.birthdayWish}</label>
        <input type="radio" name="congratulationInput" className="element" id='input' value={props.birthdayWish} onChange={props.onInputClick} />

    </div>
    )
}

export default Congratulation;