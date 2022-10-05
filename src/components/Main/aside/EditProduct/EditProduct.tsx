import {SyntheticEvent, useContext, useEffect, useState} from "react";
import {SearchContext} from "../../../../contexts/search.context";
import {GlobalContext} from "../../../../contexts/global.context";
import {Button} from "../../../common/Button/Button";
import {IdContext} from "../../../../contexts/id.context";

export const EditProduct = () => {
    const {search, setSearch} = useContext(SearchContext);
    const {id, setId} = useContext(IdContext);
    const {randomNumber, setRandomNumber} = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        id: '',
        description: '',
        drawingNumber: '',
        revision: '',
        itemNumber: '',
        moq: 0,
        price: 0,
        offerNumber: '',
    });


    const fillEditForm = async () => {
        const res = await fetch(`http://localhost:3001/price/get-one/${id}`);
        const data = await res.json();
        setForm(data);
    }


    useEffect(() => {
        fillEditForm();
    }, [id]);


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const updateProduct = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        console.log('form z submit', form);


        try {
            const res = await fetch(`http://localhost:3001/price/update-one/${form.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });

            const data = await res.json();
            console.log('res z BE', data);

        } finally {
            setLoading(false);
            // setSearch(`${form.drawingNumber}`);
            setRandomNumber(Math.random());
        }
    }


    if (loading) {
        return (<h1>Trwa aktualizacja bazy danych...</h1>);
    }

    return (
        <div className="add-new-product-container">
            <h1>Aktualizuj dane</h1>
            <form onSubmit={updateProduct}>
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
                <Button text='Aktualizuj' type={'submit'} className={'add-product-form-button'}/>
            </form>
        </div>
    );
}