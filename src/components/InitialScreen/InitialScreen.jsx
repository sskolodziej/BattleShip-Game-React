import React, { Component } from 'react';

import './InitialScreen.css';

class InitialScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="initial-screen">
                <div className="title">Battleship Game</div>
                <div className="chooseGameMode">
                    <div className="play-against">Play Against</div>
                    <div className="mode-buttons">
                        <div id="computer" className="button computer">Computer</div>
                        <div id="friend" className="button friend disabled">
                            Friend
                            {/* <span className="soon"></span> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InitialScreen;