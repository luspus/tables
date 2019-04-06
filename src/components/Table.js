import React from 'react';
import RowTopTable from './RowTopTable';
import Thead from './Thead';

function Table (props) {
    return (
        <div className='table'>
            <table>
                <tbody>
                    <Thead />
                    <RowTopTable {...props}/>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
