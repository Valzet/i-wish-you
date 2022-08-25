import { birthdayWish } from '../../utils/birthdayStart'
import Congratulation from '../Congratulation/Congratulation'

function BirthdayWish(props) {

    function handleNextSection(e) {
        e.preventDefault()
        props.setIsWishClicked(false)
        props.setIsLetClicked(true)
    }

    function onInputClick(e) {
        props.setBirthdayWishes(e.target.value)
    }

    return (
        <div className={props.isWishClicked ? "form" : 'hidden'}>
            <p className="start-p">Шаг 3: я желаю...</p>
            {
                <ul className="elements">
                    {birthdayWish.map((birthdayWish) => {
                        return (<Congratulation
                            birthdayWish={birthdayWish}
                            key={birthdayWish.toString()} value={birthdayWish}
                            onInputClick={onInputClick}
                        />)
                    }
                    )}
                </ul>}
            <button className='button' type="submit" onClick={handleNextSection}>далее</button>
        </div>
    )
}

export default BirthdayWish;