import Congratulation from '../Congratulation/Congratulation'

function BirthDayThen(props) {
    function handleNextSection(e) {
        e.preventDefault()
        props.setIsThenClicked(false)
        props.setIsResultClicked(true)
        props.setIsDisabled(true)
    }

    function onInputClick(e) {
        props.setBirthdayThen(e.target.value)
        props.setIsDisabled(false)
    }

    return (<div className={props.isThenClicked ? "form" : 'hidden'}>
        <p className="start-p">Шаг 5: и пусть..</p>
        {
            <ul className="elements">
                {props.birthday[3].map((birthdayThen) => {
                    return (<Congratulation
                        birthdayWish={birthdayThen}
                        key={birthdayThen.toString()} value={birthdayThen}
                        onInputClick={onInputClick}
                    />)
                }
                )}
            </ul>}
        <button className='button' type="submit" onClick={handleNextSection} disabled={props.checkButtonisDisabled()}>далее</button>
    </div>)
}

export default BirthDayThen;