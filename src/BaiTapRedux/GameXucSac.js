import React, { Component } from 'react'
import './GameXucSac.css'
import TitleGame from './TitleGame'
import XucXac from './XucXac'
import { connect } from 'react-redux'

class GameXucSac extends Component {
    render() {
        return (
            <div className='game'>
                <div className='title-game text-center mt-5 display-4'>
                    Bai tap game xuc sac
                </div>

                <div className='row text-center mt-5'>
                    <div className='col-md-4'>
                        <button className='btnGame' onClick={() => {
                            this.props.datCuoc(true)
                        }}>Tai</button>
                    </div>
                    <div className='col-md-4'>
                        <XucXac />
                    </div>
                    <div className='col-md-4'>
                        <button className='btnGame' onClick={() => {
                            this.props.datCuoc(false)
                        }}>Xiu</button>
                    </div>
                </div>
                <div className='text-center'>
                    <TitleGame />
                    <button className='btn btn-success p-2' onClick={() => {
                        this.props.playGame()
                    }}>Play Game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action)
        },
        playGame: () => {
            let action = {
                type: 'PLAY_GAME',

            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(GameXucSac)