import React, { Component } from 'react';

import './Battlefield.css';

class Battlefield extends Component {
    constructor(props) {
        super(props);
    }

    fieldTypes = [
        {
            name: 'empty',
            missed: false,
        },
        {
            name: 'block1',
            sunk: false,
        },
        {
            name: 'block2',
            sunk: false,
        },
        {
            name: 'block3',
            sunk: false,
        },
        {
            name: 'block4',
            sunk: false,
        }
    ]

    render() {
        let navNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let navAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

        // Create Navigation Numbers
        function createNavNumbers(navNumbers) {
            return navNumbers.map(number => {
                return (
                    <div key={number} id={number} className='field borderless'>
                        {number}
                    </div>
                )
            });
        }
        // for (let i = 1; i <= 10; i++) {
        //     navNumbers[i] = {
        //         key: i,
        //     };
        // }
        // let navNumbers2 = navNumbers.map(number => {
        //     debugger;
        //     return (
        //         <div key={number.key} id={number.key} className='field borderless'>
        //             {number.key}
        //         </div>
        //     )
        // });

        // Create Navigation Letters
        function createNavLetters(navAlphabet) {
            return navAlphabet.map(letter => {
                return (
                    <div key={letter} id={letter} className='field borderless'>
                        {letter}
                    </div>
                )
            });
        }
        // for (let i = 0; i < 100; i++) {
        //     shipIdArray[i] = {
        //         id: i,
        //     };
        // }

        // Create ids for ships A1, A2, B1, etc. 
        function createIdForShips(navNumbers) {
            debugger;
            let navNumbersString = navNumbers.map(String);
            let shipIdArray = [];
            let i = 0;
            // let x = 0;
            // let idDictionary = {};
            while (i < navNumbersString.length && i < navAlphabet.length) {
                for (let j = 0; j < 10; j++) {
                    shipIdArray.push(navNumbersString[i] + navAlphabet[j]);
                    // idDictionary[navNumbersString[i] + navAlphabet[j]] = {};
                }
                i++;
            }
            // if (i === navNumbersString.length) {
            //     for (x = i; x < navAlphabet.length; x++) {
            //         shipIdArray.push(navAlphabet[x]);
            //     }
            // } else {
            //     for (x = i; x < navNumbersString.length; x++) {
            //         shipIdArray.push(navNumbersString[x]);
            //     }
            // }
            return shipIdArray;
        }

        // Create BattleField
        function createBattleField(shipIdArray) {
            // let battlefieldArray = new Array(100);
            let battlefieldArray = shipIdArray;
            for (let i = 0; i < battlefieldArray.length; i++) {
                battlefieldArray[i] = {
                    key: i,
                    id: shipIdArray[i],
                    name: 'empty',
                    missed: 'false',
                }
            }
            return generateShips(battlefieldArray);
            // return battlefieldArray.map(item => {
            //     return (
            //         <div key={item.key} id={item.id} className='field'>
            //             {item.key}
            //         </div>
            //     )
            // });
        }

        // Generate ships 
        function generateShips(battlefieldArray) {
            return battlefieldArray.map(item => {
                return (
                    <div key={item.key} id={item.id} className='field'>
                        {/* {item.id} */}
                        {item.key}
                    </div>
                )
            });
        }

        return (
            <div>
                <div className='board'>
                    <div className='nav-numbers'>
                        {createNavNumbers(navNumbers)}
                    </div>
                    <div className='alph-battlefield'>
                        <div className='nav-alphabet'>
                            {createNavLetters(navAlphabet)}
                        </div>
                        <div className='battlefield'>
                            {createBattleField(createIdForShips(navNumbers))}
                        </div>

                    </div>
                </div>
                <div className='buttons'>
                    <div className='button'>Shuffle</div>
                    <div className='button'>Start</div>
                </div>
            </div>
        );
    }
}

export default Battlefield;