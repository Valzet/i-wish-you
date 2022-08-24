import Congratulation from '../Congratulation/Congratulation'
import { birthdayThen } from '../../utils/birthdayStart'

function BirthDayThen(props) {

    function handleNextSection(e) {
        e.preventDefault()
        props.setIsThenClicked(false)
        props.setIsResultClicked(true)
    }

    function onInputClick(e) {
        props.setBirthdayThen(e.target.value)
    }

    return (<div className={props.isThenClicked ? "form" : 'hidden'}>
        <p className="">Шаг 5: и пусть..</p>
        {
            <ul className="elements">
                {birthdayThen.map((birthdayThen) => {
                    return (<Congratulation
                        birthdayWish={birthdayThen}
                        key={birthdayThen.toString()} value={birthdayThen}
                        onInputClick={onInputClick}
                    />)
                }
                )}
            </ul>}
        <button className='button' type="submit" onClick={handleNextSection}>далее</button>
    </div>)
}

export default BirthDayThen;