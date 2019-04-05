import React, { Component }  from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/';

import clean from '../img/no-stopping.png';
import update from '../img/update.png';

class BottomTableNav extends Component {
    render () {
        const { cleanAll } = this.props;
        return(
            <div className='navbar__btn right'>
                <button>
                    <img src={update} />
                    Undo
                </button>
                <button onClick={() => cleanAll()}>
                    <img src={clean} />
                    Clean
                </button>
            </div>
            )
    }
}

const mapDispatchToProps = dispatch => ({
    cleanAll: () => dispatch(ACTIONS.cleanAll()),
});

export default connect(null, mapDispatchToProps)(BottomTableNav)
