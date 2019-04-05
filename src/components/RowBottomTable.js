import React from 'react';

function RowBottomTable ({bottomTable}) {
    return(
        <>
            {bottomTable.map((item, id) => {
                return (
                    <tr key={id}>
                        <td>{item.city}</td>
                        <td>{item.comments}</td>
                        <td>{item.dater}</td>
                        <td>{item.id_city}</td>
                        <td>{item.id_item}</td>
                        <td>{item.id_model}</td>
                        <td>{item.id_photo}</td>
                        <td>{item.id_route}</td>
                        <td>{item.id_user}</td>
                        <td>{item.route}</td>
                        <td>{item.street}</td>
                        <td>{item.street_tl}</td>
                        <td>{item.id_photo}</td>
                        <td>{item.id_item}</td>
                        <td>{item.model}</td>
                        <td>{item.num}</td>
                        <td>{item.route}</td>
                    </tr>
                )
            })}
        </>
    )
}

export default RowBottomTable;
