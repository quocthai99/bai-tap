import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        const { mangDatCuoc, datCuoc } = this.props
        return (
            <div className='playerGame'>
                <div className='think'>
                    <img className='mt-2' width={70} height={70} src={mangDatCuoc.find(item => item.datCuoc).hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./GameTuXi/video_23_game_oan_tu_ti/player.png' />

                <div className='row'>
                    {mangDatCuoc.map((item, index) => {

                        let border = {}
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' }
                        }


                        return <div key={index} className='col-md-4'>
                            <button style={border} onClick={() => {
                                datCuoc(item.ma)
                            }} >
                                <img width={30} height={30} src={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapTuXiReducer.mangDatCuoc
    }
}

const mapDispathToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                payload: maCuoc
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Player)