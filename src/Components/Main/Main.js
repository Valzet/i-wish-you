import { useState } from 'react';
import BirthdayStart from '../BirthdayStart/BirthdayStart';
import BirthdayWish from '../BirthdayWish/BirthdayWish';
import BirthdayLet from '../BirthdayLet/BirthdayLet';
import BirthdayThen from '../BirthdayThen/BirthdayThen';
import BirthdayResult from '../BirthdayResult/BirthdayResult';
import './Main.css';
import { birthday } from '../../utils/birthdayStart'

function Main() {

    const [BirthdayName, setBirthdayName] = useState('');
    const [isNameClicked, setIsNameClicked] = useState(false)
    const [isCongratulationClicked, setisCongratulationClicked] = useState(false)
    const [congratulation, setCongratulation] = useState(null)
    const [isWishClicked, setIsWishClicked] = useState(false)
    const [birthdayWishes, setBirthdayWishes] = useState(null);
    const [isLetClicked, setIsLetClicked] = useState(false)
    const [birthdayLet, setBirthdayLet] = useState(null);
    const [isThenClicked, setIsThenClicked] = useState(false);
    const [birthdayThen, setBirthdayThen] = useState(null)
    const [isResultClicked, setIsResultClicked] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isRandom, setIsRandom] = useState([])
    const [isRandomClicked, setIsRandomClicked] = useState(false)

    console.log(isRandomClicked)

    function randomCongratulation(e) {
        e.preventDefault()
        let random = birthday.map((cards) => {
            let res = cards[Math.floor(cards.length * Math.random())]
            return res
        })
        setIsRandom(random)
        setIsNameClicked(true)
        setIsRandomClicked(true)
    }

    function checkButtonisDisabled() {
        if (isDisabled) {
            return 'disabled'
        } else return ''
    }

    function startAgain() {
        setIsRandomClicked(false)
        setIsResultClicked(false)
        setIsNameClicked(false)
    }

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
                checkButtonisDisabled={checkButtonisDisabled}
                setIsDisabled={setIsDisabled}
                randomCongratulation={randomCongratulation}
                birthday={birthday}
            ></BirthdayStart>

            <BirthdayWish
                isWishClicked={isWishClicked}
                setIsWishClicked={setIsWishClicked}
                birthdayWishes={birthdayWishes}
                setBirthdayWishes={setBirthdayWishes}
                setIsLetClicked={setIsLetClicked}
                checkButtonisDisabled={checkButtonisDisabled}
                setIsDisabled={setIsDisabled}
                birthday={birthday}
            >
            </BirthdayWish>

            <BirthdayLet
                isLetClicked={isLetClicked}
                setIsLetClicked={setIsLetClicked}
                birthdayLet={birthdayLet}
                setBirthdayLet={setBirthdayLet}
                setIsThenClicked={setIsThenClicked}
                checkButtonisDisabled={checkButtonisDisabled}
                setIsDisabled={setIsDisabled}
                birthday={birthday}
            >
            </BirthdayLet>

            <BirthdayThen
                isThenClicked={isThenClicked}
                setIsThenClicked={setIsThenClicked}
                birthdayThen={birthdayThen}
                setBirthdayThen={setBirthdayThen}
                setIsResultClicked={setIsResultClicked}
                checkButtonisDisabled={checkButtonisDisabled}
                setIsDisabled={setIsDisabled}
                birthday={birthday}
            >
            </BirthdayThen>

            <BirthdayResult
                BirthdayName={BirthdayName}
                isResultClicked={isResultClicked}
                isRandomClicked={isRandomClicked}
                congratulation={congratulation}
                birthdayWishes={birthdayWishes}
                birthdayLet={birthdayLet}
                birthdayThen={birthdayThen}
                birthday={birthday}
                isRandom={isRandom}
                randomCongratulation={randomCongratulation}
                startAgain={startAgain}        >
            </BirthdayResult>
        </section>
    )


}

export default Main;