import React from "react";

//style do zaciangiecia z Products table

interface drawingNumberToSearch {
    dwgNo: string,
}

export const NoFoundProductsList = (props: drawingNumberToSearch) => {

    return (
        <>
            <table>
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


