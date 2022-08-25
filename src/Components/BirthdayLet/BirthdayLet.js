import Congratulation from '../Congratulation/Congratulation'

function BirthDayLet(props) {

    function handleNextSection(e) {
        e.preventDefault()
        props.setIsLetClicked(false)
        props.setIsThenClicked(true)
        props.setIsDisabled(true)
    }

    function onInputClick(e) {
        props.setBirthdayLet(e.target.value)
        props.setIsDisabled(false)
    }

    return (<div className={props.isLetClicked ? "form" : 'hidden'}>
        <p className="start-p">Шаг 4: будь...</p>
        {
            <ul className="elements">
                {props.birthday[2].map((birthdayLet) => {
                    return (<Congratulation
                        birthdayWish={birthdayLet}
                        key={birthdayLet.toString()} value={birthdayLet}
                        onInputClick={onInputClick}
                    />)
                }
                )}
            </ul>}
        <button className='button' type="submit" onClick={handleNextSection} disabled={props.checkButtonisDisabled()}>далее</button>
    </div>)
}

export default BirthDayLet;