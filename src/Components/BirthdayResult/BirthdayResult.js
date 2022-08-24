function BirthdayResult(props) {
    return (
        <div className={props.isResultClicked ? "result" : 'hidden'}>
            <p className="result"> Дорогая, {props.BirthdayName}  {props.congratulation} я желаю {props.birthdayWishes} будь {props.birthdayLet} и пусть {props.birthdayThen}</p>
        </div>
    )
}

export default BirthdayResult;