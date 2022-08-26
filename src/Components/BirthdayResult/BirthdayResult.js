import { useState } from 'react';

function BirthdayResult(props) {

    const [isCopy, setIsCopy] = useState(false)

    function pushCopyStatus() {
        setIsCopy(true)
        const timer = setTimeout(() => {
            setIsCopy(false)
        }, 1500);
        return () => clearTimeout(timer);
    }

    function copyToClipboard(text) {
        const elem = document.createElement('textarea');
        elem.value = text;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
    }
    // console.log(isCopy)
    let randomResult = `Дорогая, ${props.isRandom[0]} я желаю тебе ${props.isRandom[1]} будь ${props.isRandom[2]} и пусть ${props.isRandom[3]} `
    let result = `Дорогая ${props.BirthdayName}, ${props.congratulation} я желаю ${props.birthdayWishes} будь ${props.birthdayLet} и пусть ${props.birthdayThen}`

    return (
        <div className={props.isResultClicked || props.isRandomClicked ? "result" : 'hidden'} >
            {props.isResultClicked ?
                <>
                    <p className="result" > {result} </p>
                    <div className="buttons">
                        <button className='button' type="submit" onClick={props.startAgain} >Начать сначала</button>
                        <button className='button' type="submit" onSubmit={copyToClipboard(result)} onClick={pushCopyStatus}>Копировать</button>
                    </div>
                    <span className="span-msg" >{isCopy ? 'сохраненно в буфер обмена' : ''}</span>
                </>
                :
                <>
                    <p className="result" id='resultText' value={randomResult}>{randomResult} </p>
                    <div className="buttons">
                        <button className='button' type="submit" onClick={props.randomCongratulation}>Еще рандом</button>
                        <button className='button' type="submit" onClick={props.startAgain}>Начать сначала</button>
                        <button className='button' type="submit" onSubmit={copyToClipboard(randomResult)} onClick={pushCopyStatus}>Копировать</button>
                    </div>
                    <span className="span-msg" >{isCopy === true ? 'сохраненно в буфер обмена' : ''}</span>
                </>
            }

        </div>
    )
}

export default BirthdayResult;
