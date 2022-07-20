import React, { Component } from 'react'
import './baiTapTuXi.css'
import Computer from './Computer'
import KetQua from './KetQua'
import Player from './Player'
import { connect } from 'react-redux'

class BaiTapTuXi extends Component {
  render() {
    const { playGame } = this.props
    return (
      <div className='gameTuXi'>
        <div className='row text-center mt-5'>
          <div className='col-md-4'>
            <Player />
          </div>
          <div className='col-md-4'>
            <KetQua />
            <button onClick={() => {
              playGame()
            }} className='btn btn-success p-2 mt-2'>Play Game</button>
          </div>
          <div className='col-md-4'>
            <Computer />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispathToProps = dispatch => {
  return {

    playGame: () => {

      let count = 10
      let randomComputer = setInterval(() => {
        dispatch({
          type: 'RAN_DOM',
        })
        ++count
        if (count > 30) {
          clearInterval(randomComputer)

          dispatch({
            type: 'END_GAME'
          })
        }
      }, 100)

    }
  }
}

export default connect(null, mapDispathToProps)(BaiTapTuXi)
