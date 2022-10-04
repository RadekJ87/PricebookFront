import React from "react";

interface drawingNumberToSearch {
    dwgNo: string,
}

export const NoFoundProductsList = (props: drawingNumberToSearch) => {

    return (
        <>
            <table className="products-table">
                <thead>
                <tr>
                    {/*EN*/}
                    {/*<th>Description</th>*/}
                    {/*<th>Drawing number</th>*/}
                    {/*<th>Revision</th>*/}
                    {/*<th>Item number</th>*/}
                    {/*<th>MOQ</th>*/}
                    {/*<th>Price</th>*/}
                    {/*<th>Offer number</th>*/}

                    {/*PL*/}
                    <th>Opis</th>
                    <th>Numer rysunku</th>
                    <th>Rewizja</th>
                    <th>Numer materiału</th>
                    <th>MOQ</th>
                    <th>Cena</th>
                    <th>Numer oferty</th>
                    <th>Akcja</th>
                </tr>
                </thead>
            </table>
            <div>
                <p>Brak wpisów dla rysunku {props.dwgNo}</p>
            </div>
        </>
    );
};


