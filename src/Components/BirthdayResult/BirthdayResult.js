function BirthdayResult(props) {
    let randomResult = `Дорогая, ${props.isRandom[0]} я желаю ${props.isRandom[1]} будь ${props.isRandom[2]} и пусть ${props.isRandom[3]} `
    let result = `Дорогая, ${props.BirthdayName}  ${props.congratulation} я желаю ${props.birthdayWishes} будь ${props.birthdayLet} и пусть ${props.birthdayThen}`

    return (
        <div className={props.isResultClicked || props.isRandomClicked ? "result" : 'hidden'} >
            {props.isResultClicked ?
                <>
                    <p className="result"> {result} </p>
                    <button className='button' type="submit" onClick={props.startAgain}>Попробовать еще раз</button>
                </>
                :
                <>
                    <p className="result-text"> {randomResult}</p>
                    <div className="buttons">
                        <button className='button' type="submit" onClick={props.randomCongratulation}>Еще рандом</button>
                        <button className='button' type="submit" onClick={props.startAgain}>Начать сначала</button>
                    </div>
                </>
            }

        </div>
    )
}

export default BirthdayResult;
