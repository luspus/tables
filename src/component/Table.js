import React from 'react';
import RowTopTable from './RowTopTable';
import Thead from './Thead';

function Table (props) {
    return (
        <table>
            <tbody>
                <Thead />
                <RowTopTable {...props}/>
            </tbody>
        </table>
    )
}

export default Table;
