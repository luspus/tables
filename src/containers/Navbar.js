import React, { Component }  from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/';

import add from '../img/add.png';
import del from '../img/del.png';
import playBtn from '../img/play.png';
import pauseBtn from '../img/pause.png';
import update from '../img/update.png';

class Navbar extends Component {
    render () {
        const { togglePopup, deleteAll, getDataToTable, play } = this.props;
        let from = 0;
        let to = 5;
        return(
            <div className='navbar__btn'>
                { play ?
                    <button onClick={() => {
                        console.log('stop')
                    }}>
                        <img src={pauseBtn} />
                        Pause
                    </button>
                :
                    <button onClick={() => {
                        setInterval(() => {
                        getDataToTable(from, to);
                        from = from + 5;
                        to = to + 5;
                        }, 2000);
                        }}>
                        <img src={playBtn} alt='play'/>
                        Play
                    </button>
                }
                <button onClick={() => togglePopup(true)}>
                    <img src={add} alt='add'/>
                    New
                </button>
                <button onClick={() => deleteAll()}>
                    <img src={del} alt='delete'/>
                    Delete All
                </button>
                <button className='repost__btn'>
                    <img src={update} alt='update'/>
                    Repost All
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        play: state.play
    };
};

const mapDispatchToProps = dispatch => ({
    togglePopup: (val) => dispatch(ACTIONS.togglePopup(val)),
    deleteAll: (val) => dispatch(ACTIONS.deleteAll(val)),
    getDataToTable: (from, to) => dispatch(ACTIONS.getDataToTable(from, to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
