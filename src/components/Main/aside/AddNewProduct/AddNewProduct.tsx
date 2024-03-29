import {SyntheticEvent, useContext, useState} from "react";
import {SearchContext} from "../../../../contexts/search.context";
import "./AddNewProduct.css";
import {Button} from "../../../common/Button/Button";
import {TextInput} from "../../../common/Input/TextInput";
import { GlobalContext } from "../../../../contexts/global.context";


export const AddNewProduct = () => {
    const {search, setSearch} = useContext(SearchContext);
    const {randomNumber, setRandomNumber} = useContext(GlobalContext);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        description: '',
        drawingNumber: '',
        revision: '',
        itemNumber: '',
        moq: 0,
        price: 0,
        offerNumber: '',
    });

    const addProductToDatabase = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch('http://localhost:3001/price', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });


        } finally {
            setLoading(false);
            setSearch(`${form.drawingNumber}`);
            setRandomNumber(Math.random());
        }

    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const clearForm = () => {
        setForm({
            description: '',
            drawingNumber: '',
            revision: '',
            itemNumber: '',
            moq: 0,
            price: 0,
            offerNumber: '',
        });
    }


    if (loading) {
        return (<h1>Trwa dodawanie produktu do bazy danych...</h1>);
    }

    return (
        <div className="add-new-product-container">
            <h1>Dodaj produkt do cennika</h1>
            <form onSubmit={addProductToDatabase}>
                <label>
                    <p>Opis</p>
                    <input
                        type="text"
                        name="description"
                        required
                        maxLength={50}
                        value={form.description}
                        onChange={e => updateForm("description", e.target.value)}
                    />
                </label>
                <label>
                    <p>Numer rysunku</p>
                    <input type="text"
                           name="drawingNumber"
                           required
                           maxLength={20}
                           value={form.drawingNumber}
                           onChange={e => updateForm("drawingNumber", e.target.value)}/>
                </label>
                <label>
                    <p>Rewizja</p>
                    <input type="text"
                           name="revision"
                           required
                           maxLength={2}
                           value={form.revision}
                           onChange={e => updateForm("revision", e.target.value)}/>
                </label>
                <label>
                    <p>Numer materiału</p>
                    <input type="text"
                           name="itemNumber"
                           maxLength={20}
                           value={form.itemNumber}
                           onChange={e => updateForm("itemNumber", e.target.value)}/>
                </label>
                <label>
                    <p>MOQ</p>
                    <input type="number"
                           name="moq"
                           required
                           step={1}
                           min={1}
                           value={form.moq}
                           onChange={e => updateForm("moq", Number(e.target.value))}/>
                </label>
                <label>
                    <p>Cena</p>
                    <input type="number"
                           name="price"
                           required
                           step={0.01}
                           min={0.01}
                           max={99999.99}
                           value={form.price}
                           onChange={e => updateForm("price", Number(e.target.value))}/>
                </label>
                <label>
                    <p>Numer oferty</p>
                    <input type="text"
                           name="offerNumber"
                           minLength={7}
                           maxLength={8}
                           value={form.offerNumber}
                           onChange={e => updateForm("offerNumber", e.target.value)}/>
                </label>
                <Button text={'Dodaj do cennika'} type={'submit'} className={'add-product-form-button'}/>
            </form>
            <Button text={'Wyczyść pola'} className={'add-product-form-button'} onClick={clearForm}/>
        </div>
    );
}