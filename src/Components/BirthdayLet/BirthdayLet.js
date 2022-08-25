import Congratulation from '../Congratulation/Congratulation'
import { birthdayLet } from '../../utils/birthdayStart'

function BirthDayLet(props) {

    function handleNextSection(e) {
        e.preventDefault()
        props.setIsLetClicked(false)
        props.setIsThenClicked(true)
    }

    function onInputClick(e) {
        props.setBirthdayLet(e.target.value)
    }

    return (<div className={props.isLetClicked ? "form" : 'hidden'}>
        <p className="start-p">Шаг 4: будь...</p>
        {
            <ul className="elements">
                {birthdayLet.map((birthdayLet) => {
                    return (<Congratulation
                        birthdayWish={birthdayLet}
                        key={birthdayLet.toString()} value={birthdayLet}
                        onInputClick={onInputClick}
                    />)
                }
                )}
            </ul>}
        <button className='button' type="submit" onClick={handleNextSection}>далее</button>
    </div>)
}

export default BirthDayLet;