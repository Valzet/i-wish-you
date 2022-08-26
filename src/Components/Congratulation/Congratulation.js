function Congratulation(props) {
    return (
        <label className="congratulationInput">
            <p className="input-text">{props.birthdayWish}</p>
            <input type="radio" name="congratulationInput" className="element" value={props.birthdayWish} onClick={props.onInputClick} />
        </label>
    )
}

export default Congratulation;