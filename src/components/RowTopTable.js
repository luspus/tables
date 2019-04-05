import React from 'react';

function RowTopTable ({topTable}) {
    return(
        <>
            {topTable.map((item, id) => {
                return (
                    <tr key={id}>
                        <td>{item.controll}</td>
                        <td>{item.read}</td>
                        <td>{item.call}</td>
                        <td>{item.truck}</td>
                        <td>{item.origin}</td>
                        <td>{item.destination}</td>
                        <td>{item.pickup}</td>
                        <td>{item.dho}</td>
                        <td>{item.dhd}</td>
                        <td>{item.fp}</td>
                        <td>{item.length}</td>
                        <td>{item.weigth}</td>
                        <td>{item.trip}</td>
                        <td>{item.alarm}</td>
                        <td>{item.actions}</td>
                    </tr>
                )
            })}
        </>
    )
}

export default RowTopTable;
