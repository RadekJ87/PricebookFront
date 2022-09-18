import React from "react";

//usun i zrob props z klasa i wsrzykiwniem tbody

interface drawingNumberToSearch {
    dwgNo: string,
}

export const NoFoundProductsList = (props: drawingNumberToSearch) => {

    return (
        <>
            <table className="products-table">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Drawing number</th>
                    <th>Revision</th>
                    <th>Item number</th>
                    <th>MOQ</th>
                    <th>Price</th>
                    <th>Offer number</th>
                </tr>
                </thead>
            </table>
            <div>
                <p>Brak wpisów dla rysunku {props.dwgNo}</p>
            </div>
        </>
    )
        ;
};


