import {useContext, useState} from "react";
import {Button} from "../../../common/Button/Button";
import './ChangePrices.css';
import {GlobalContext} from "../../../../contexts/global.context";

export const ChangePrices = () => {
    const {randomNumber, setRandomNumber} = useContext(GlobalContext);

    const [percent, setPercent] = useState(1);
    const [loading, setLoading] = useState(false);


    const changePrices = async () => {
        try {
            setLoading(true);

            const res = await fetch('http://localhost:3001/price/update-prices', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    percent
                }),
            });

            const data = await res.json();

            console.log(data);


        } finally {
            setLoading(false);
            setRandomNumber(Math.random());
        }

    };


    return (<div className='change-price-container'>
        <h1>Zmień ceny produktów</h1>
        {loading ?
            <h1>Trwa aktualizowanie cen...</h1> :
            <form onSubmit={changePrices}>
                <label>
                    <p>Podaj wartość procentową podwyżki/obniżki</p>
                    <input
                        type="number"
                        name="percent"
                        required
                        min={-20}
                        max={20}
                        value={percent}
                        onChange={e => setPercent(Number(e.target.value))}
                    />
                </label>
                <Button className={`standard-button-low-margin`} text={`Zastosuj`}/>
            </form>
        }
    </div>);
}