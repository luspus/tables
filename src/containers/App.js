import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Table from '../component/Table';
import PopupTable from './PopupTable';
import TableBottom from '../component/TableBottom';
import BottomTableNav from './BottomTableNav';

class App extends Component {
    render () {
        const { togglePopup } = this.props;
        return(
            <>
                <Navbar />
                <Table topTable={this.props.topTable} />
                {togglePopup && <PopupTable />}
                <BottomTableNav />
                <TableBottom bottomTable={this.props.bottomTable} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        togglePopup: state.togglePopup,
        bottomTable: state.bottomTable,
        topTable: state.topTable
    };
};
export default connect(mapStateToProps, null)(App)
