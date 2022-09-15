import {SyntheticEvent, useContext, useState} from "react";
import {SearchContext} from "../../contexts/search.context";

export const AddNewProduct = () => {
    const {search, setSearch} = useContext(SearchContext);
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
        }

    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };


    if (loading) {
        return (<h1>Trwa dodawanie produktu do bazy danych...</h1>);
    }

    return (
        <div className="new-product">
            <h1>Dodaj produkt do cennika</h1>
            <form onSubmit={addProductToDatabase}>
                <label>
                    <p>Description</p>
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
                    <p>Drawing number</p>
                    <input type="text"
                           name="drawingNumber"
                           required
                           maxLength={20}
                           value={form.drawingNumber}
                           onChange={e => updateForm("drawingNumber", e.target.value)}/>
                </label>
                <label>
                    <p>Revision</p>
                    <input type="text"
                           name="revision"
                           required
                           maxLength={2}
                           value={form.revision}
                           onChange={e => updateForm("revision", e.target.value)}/>
                </label>
                <label>
                    <p>Item number</p>
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
                    <p>Price</p>
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
                    <p>Offer number</p>
                    <input type="text"
                           name="offerNumber"
                           minLength={7}
                           maxLength={8}
                           value={form.offerNumber}
                           onChange={e => updateForm("offerNumber", e.target.value)}/>
                </label>
                <button type="submit"> Dodaj do cennika</button>
            </form>
        </div>
    );
}