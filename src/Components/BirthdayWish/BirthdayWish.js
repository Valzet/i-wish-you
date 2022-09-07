import Congratulation from '../Congratulation/Congratulation'

function BirthdayWish(props) {
    function handleNextSection(e) {
        e.preventDefault()
        props.setIsWishClicked(false)
        props.setIsLetClicked(true)
        props.setIsDisabled(true)
    }

    function onInputClick(e) {
        props.setBirthdayWishes(e.target.value)
        props.setIsDisabled(false)
    }

    return (
        <div className={props.isWishClicked ? "form" : 'hidden'}>
            <p className="start-p">Шаг 3: я желаю...</p>
            {
                <ul className="elements">
                    {props.birthday[1].map((birthdayWish) => {
                        return (<Congratulation
                            birthdayWish={birthdayWish}
                            key={birthdayWish.toString()} value={birthdayWish}
                            onInputClick={onInputClick}
                        />)
                    }
                    )}
                </ul>}
            <button className='button' type="submit" onClick={handleNextSection} disabled={props.checkButtonisDisabled()}>далее</button>
        </div>
    )
}

export default BirthdayWish;