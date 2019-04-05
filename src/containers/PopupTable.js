import React, { Component }  from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/';
import Thead from '../component/Thead';

class PopupTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {}
        };
    }
    onChangeValue = (event) => {
        const { table } = this.state;
        const { value, name } = event.target;
        if (name === "controll") {
            this.setState({
                table: {...table, controll: value}
            })
        } else if(name === "read") {
            this.setState({
                table: {...table, read: value}
            })
        }
        else if(name === "call") {
            this.setState({
                table: {...table, call: value}
            })
        }
        else if(name === "truck") {
            this.setState({
                table: {...table, truck: value}
            })
        }
        else if(name === "origin") {
            this.setState({
                table: {...table, origin: value}
            })
        }
        else if(name === "destination") {
            this.setState({
                table: {...table, destination: value}
            })
        }
        else if(name === "pickup") {
            this.setState({
                table: {...table, pickup: value}
            })
        }
        else if(name === "dpo") {
            this.setState({
                table: {...table, dpo: value}
            })
        }
        else if(name === "dhd") {
            this.setState({
                table: {...table, dhd: value}
            })
        }
        else if(name === "fp") {
            this.setState({
                table: {...table, fp: value}
            })
        }
        else if(name === "length") {
            this.setState({
                table: {...table, length: value}
            })
        }
        else if(name === "weigth") {
            this.setState({
                table: {...table, weigth: value}
            })
        }
        else if(name === "trip") {
            this.setState({
                table: {...table, trip: value}
            })
        }
        else if(name === "alarm") {
            this.setState({
                table: {...table, alarm: value}
            })
        }
        else if(name === "actions") {
            this.setState({
                table: {...table, actions: value}
            })
        }
    }
    render () {
        const { togglePopup, saveTable } = this.props;
        return(
            <div className='popup'>
                <div className='layer' />
                <table>
                    <tbody>
                        <Thead />
                        <tr className='input__row'>
                            <td>
                                <input type="text"
                                       name="controll"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="read"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="call"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="truck"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="origin"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="destination"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="pickup"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="dho"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="dhd"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="fp"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="length"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="weigth"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="trip"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="alarm"
                                       onChange={this.onChangeValue} />
                            </td>
                            <td>
                                <input type="text"
                                       name="actions"
                                       onChange={this.onChangeValue} />
                            </td>
                        </tr>
                        <tr className='btn'>
                            <td>
                                <button onClick={() => {
                                    if(Object.keys(this.state.table).length > 0) saveTable(this.state.table);
                                    togglePopup(false);
                                }}>
                                    Add
                                </button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    togglePopup(false);
                                }}>
                                    Close
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    saveTable: (val) => dispatch(ACTIONS.saveTable(val)),
    togglePopup: (val) => dispatch(ACTIONS.togglePopup(val))
});

export default connect(null, mapDispatchToProps)(PopupTable)
