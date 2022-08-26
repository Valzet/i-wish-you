import '../Main/Main.css'
import Congratulation from '../Congratulation/Congratulation'

function BirthdayStart(props) {

    function handleNameChange(el) {
        props.setBirthdayName(el.target.value)
    }

    function handleNextSection(e) {
        props.setIsNameClicked(true)
        e.preventDefault()
        props.setisCongratulationClicked(true)
    }

    function onInputClick(e) {
        console.log(e.target.value)
        props.setCongratulation(e.target.value)
        props.setIsDisabled(false)
    }

    function handleNextNextSection(e) {
        e.preventDefault()
        props.setisCongratulationClicked(false)
        props.setIsWishClicked(true)
        props.setIsDisabled(true)
    }

    return (
        <>
            <div className={!props.isNameClicked ? "birthdayName" : 'hidden'}>
                <p className="start-p">Введите имя именинницы или оставьте все без изменений</p>
                <input className='name' type='text' placeholder='именинница' onChange={handleNameChange}></input>
                <button className='buttonStart' type="submit" onClick={handleNextSection}>Далее</button>
                <p className="start-p">Либо выберите рандомное поздравление</p>
                <button className='buttonStart' type="submit" onClick={props.randomCongratulation}>Рандом</button>
            </div>
            <div className={props.isCongratulationClicked ? 'form' : 'hidden'}>
                <p className="start-p">Шаг 2: выберите начальное поздравление</p>
                {
                    <ul className="elements">
                        {props.birthday[0].map((birthdayStart) => {
                            return (<Congratulation
                                birthdayWish={birthdayStart}
                                key={birthdayStart.toString()} value={birthdayStart}
                                id={Math.floor(Math.random() * 10000)}
                                onInputClick={onInputClick}
                            />)
                        }
                        )}
                    </ul>}
                <button className='button' type="submit" onClick={handleNextNextSection} disabled={props.checkButtonisDisabled()}>далее</button>

            </div>
        </>
    )
}

export default BirthdayStart;