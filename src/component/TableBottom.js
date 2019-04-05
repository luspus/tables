import React from 'react';
import RowBottomTable from './RowBottomTable';

function TableBottom (props) {
    return(
        <table>
            <tbody>
                <tr className='thead'>
                    <td>Rade</td>
                    <td>F</td>
                    <td>Source</td>
                    <td>Age </td>
                    <td>Avail</td>
                    <td>Truck</td>
                    <td>Truck-o</td>
                    <td>DH-O</td>
                    <td>F/P</td>
                    <td>Origin</td>
                    <td>Trip</td>
                    <td>Destination</td>
                    <td>DH-D</td>
                    <td>Truck-D</td>
                    <td>Length</td>
                    <td>Weigth</td>
                    <td>Company</td>
                </tr>
                <RowBottomTable {...props}/>
            </tbody>
        </table>
    )
}

export default TableBottom;
