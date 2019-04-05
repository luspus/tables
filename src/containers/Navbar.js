import React, { Component }  from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/';

import add from '../img/add.png';
import del from '../img/del.png';
import playBtn from '../img/play.png';
import pauseBtn from '../img/pause.png';
import update from '../img/update.png';

class Navbar extends Component {
    constructor (props) {
        super(props);
        this.timerId = '';
        this.state = {
            play: false
        }
    }
    toggleSwitch(p) {
        let from = 0;
        let to = 5;
        if(this.state.play === false) {
            this.timerId = setInterval(() => {
                p.getDataToTable(from, to);
                from = from + 5;
                to = to + 5;
            }, 1000);
            this.setState({play: true})
        } else {
            clearTimeout(this.timerId);
            this.setState({play: false});
        }
    }
    render () {
        const { togglePopup, deleteAll } = this.props;
        const { play } = this.state;
        return(
            <div className='navbar__btn'>
                {play
                    ?
                    <button onClick={() => this.toggleSwitch()}>
                        <img src={pauseBtn}/>
                        Pause
                    </button>
                    :
                    <button onClick={() => this.toggleSwitch(this.props)}>
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

const mapDispatchToProps = dispatch => ({
    togglePopup: (val) => dispatch(ACTIONS.togglePopup(val)),
    deleteAll: () => dispatch(ACTIONS.deleteAll()),
    getDataToTable: (from, to) => dispatch(ACTIONS.getDataToTable(from, to))
});

export default connect(null, mapDispatchToProps)(Navbar);
