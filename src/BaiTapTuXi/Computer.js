import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        const { computer } = this.props
        return (
            <div className='playerGame'>
                <div className='think'>
                    <img className='mt-2' width={70} height={70} src={computer.hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./GameTuXi/video_23_game_oan_tu_ti/playercomputer.png' />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapTuXiReducer.computer
    }
}


export default connect(mapStateToProps)(Computer)
