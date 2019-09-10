import React, { Component } from 'react';
import InitialScreen from '../InitialScreen/InitialScreen';
import SettingUpScreen from '../SettingUpScreen/SettingUpScreen';

import './Game.css';
import '../screens/screens.css';

class Game extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='gameboard'>
            {/* <InitialScreen /> */}
            <SettingUpScreen />
            </div>
        );
    }
}

export default Game;