import React, { Component } from 'react';
import Battlefield from '../Battlefield/Battlefield';

import './SettingUpScreen.css';

class SettingUpScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="screen-divide">
                <Battlefield />
                <div className="information">
                    <div className="instruction">
                        Start a new game
                        instantly, shuffle
                        current ships, or move
                        them to the desired
                        places by dragging <br/>
                        & dropping. Click a ship to change its direction.
                    </div>
                    <div className="legend">
                        Total number of ships: 25
                        <div className="ships-legend">
                            <div className="ship1-div">
                                <div className="ship1 legend-ship"></div>
                                <div className="field">x4</div>
                            </div>
                            <div className="ship2-div">
                                <div className="ship2 ship2-border legend-ship"></div>
                                <div className="ship2 legend-ship"></div>
                                <div className="field">x3</div>
                            </div>
                            <div className="ship3-div">
                                <div className="ship3 ship3-border legend-ship"></div>
                                <div className="ship3 ship3-border legend-ship"></div>
                                <div className="ship3 legend-ship"></div>
                                <div className="field">x2</div>
                            </div>
                            <div className="ship4-div">
                                <div className="ship4 ship4-border legend-ship"></div>
                                <div className="ship4 ship4-border legend-ship"></div>
                                <div className="ship4 ship4-border legend-ship"></div>
                                <div className="ship4 legend-ship"></div>
                                <div className="field">x1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingUpScreen;