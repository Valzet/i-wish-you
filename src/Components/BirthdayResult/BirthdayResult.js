function BirthdayResult(props) {
    let randomResult = `Дорогая, ${props.isRandom[0]} я желаю ${props.isRandom[1]} будь ${props.isRandom[2]} и пусть ${props.isRandom[3]} `
    let result = `Дорогая, ${props.BirthdayName}  ${props.congratulation} я желаю ${props.birthdayWishes} будь ${props.birthdayLet} и пусть ${props.birthdayThen}`
    console.log(props.isRandom.lenght)
    return (
        <div className={props.isResultClicked || props.isRandomClicked ? "result" : 'hidden'} >
            {props.isResultClicked ? <p className="result"> {result} </p> : 
            <>
            <p className="result"> {randomResult}</p>
            <button className='button' type="submit" onClick={props.randomCongratulation}>Еще раз</button>
            </>
            }
            {/* <p className="result"> {props.isRandom.lenght === 0 ? result : randomResult }   
            </p> */}
        </div>
    )
}

export default BirthdayResult;
