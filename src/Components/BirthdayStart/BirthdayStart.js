import '../Main/Main.css'
import { birthday } from '../../utils/birthdayStart'
import Congratulation from '../Congratulation/Congratulation'

function BirthdayStart(props) {

    function handleNameChange(e) {
        props.setBirthdayName(e.target.value)
    }

    function handleNextSection(e) {
        props.setIsNameClicked(true)
        e.preventDefault()
        props.setisCongratulationClicked(true)
    }

    function onInputClick(e) {
        props.setCongratulation(e.target.value)
    }

    function handleNextNextSection(e) {
        e.preventDefault()
        props.setisCongratulationClicked(false)
        props.setIsWishClicked(true)
    }

    return (
        <>
            <div className={!props.isNameClicked ? "birthdayName" : 'hidden'}>
                <p className="">Введите имя именниницы или оставьте все без изменений</p>
                <input className='name' type='text' placeholder='именниница' onChange={handleNameChange} defaultValue='именниница'></input>
                <button className='buttonStart' type="submit" onClick={handleNextSection}>далее</button>
            </div>

            <div className={props.isCongratulationClicked ? 'form' : 'hidden'}>
                <p className="">Шаг 2: выберите начальное поздравление</p>
                {
                    <ul className="elements">
                        {birthday.map((birthdayStart) => {
                            return (<Congratulation
                                birthdayWish={birthdayStart}
                                key={birthdayStart.toString()} value={birthdayStart}
                                onInputClick={onInputClick}
                            />)
                        }
                        )}
                    </ul>}
                <button className='button' type="submit" onClick={handleNextNextSection}>далее</button>

            </div>
        </>
    )
}

export default BirthdayStart;