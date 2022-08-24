import { useState } from 'react';
import BirthdayStart from '../BirthdayStart/BirthdayStart';
import BirthdayWish from '../BirthdayWish/BirthdayWish';
import BirthdayLet from '../BirthdayLet/BirthdayLet';
import BirthdayThen from '../BirthdayThen/BirthdayThen';
import BirthdayResult from '../BirthdayResult/BirthdayResult';
import './Main.css';


function Main() {
    const [BirthdayName, setBirthdayName] = useState('');
    const [isNameClicked, setIsNameClicked] = useState(false)
    const [isCongratulationClicked, setisCongratulationClicked] = useState(false)
    const [congratulation, setCongratulation] = useState('Именниница')
    const [isWishClicked, setIsWishClicked] = useState(false)
    const [birthdayWishes, setBirthdayWishes] = useState('');
    const [isLetClicked, setIsLetClicked] = useState(false)
    const [birthdayLet, setBirthdayLet] = useState('');
    const [isThenClicked, setIsThenClicked] = useState(false);
    const [birthdayThen, setBirthdayThen] = useState('')
    const [isResultClicked, setIsResultClicked] = useState(false)

    return (
        <section className='main'>
            <BirthdayStart
                setBirthdayName={setBirthdayName}
                setIsNameClicked={setIsNameClicked}
                isNameClicked={isNameClicked}
                setisCongratulationClicked={setisCongratulationClicked}
                isCongratulationClicked={isCongratulationClicked}
                congratulation={congratulation}
                setCongratulation={setCongratulation}
                setIsWishClicked={setIsWishClicked}
            ></BirthdayStart>

            <BirthdayWish
                isWishClicked={isWishClicked}
                setIsWishClicked={setIsWishClicked}
                birthdayWishes={birthdayWishes}
                setBirthdayWishes={setBirthdayWishes}
                setIsLetClicked={setIsLetClicked}
            >
            </BirthdayWish>

            <BirthdayLet
                isLetClicked={isLetClicked}
                setIsLetClicked={setIsLetClicked}
                birthdayLet={birthdayLet}
                setBirthdayLet={setBirthdayLet}
                setIsThenClicked={setIsThenClicked}
            >
            </BirthdayLet>

            <BirthdayThen
                isThenClicked={isThenClicked}
                setIsThenClicked={setIsThenClicked}
                birthdayThen={birthdayThen}
                setBirthdayThen={setBirthdayThen}
                setIsResultClicked={setIsResultClicked}
            >
            </BirthdayThen>

            <BirthdayResult
                setIsResultClicked={setIsResultClicked}
                BirthdayName={BirthdayName}
                isResultClicked={isResultClicked}
                congratulation={congratulation}
                birthdayWishes={birthdayWishes}
                birthdayLet={birthdayLet}
                birthdayThen={birthdayThen}
            >
            </BirthdayResult>
        </section>
    )


}

export default Main;