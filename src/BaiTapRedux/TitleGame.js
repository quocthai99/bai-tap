import React, { Component } from 'react'
import { connect } from 'react-redux'

class TitleGame extends Component {
    render() {
        const { taiXiu, tongSoBanChoi, soBanThang } = this.props
        return (
            <div>
                <div className='display-4'>
                    Ban Chon: <span className='text-danger' >{taiXiu ? 'Tai' : 'Xiu'}</span>
                </div>

                <div className='display-4'>
                    Ban Thang: <span className='text-success' >{soBanThang}</span>
                </div>

                <div className='display-4'>
                    Tong So Ban Choi: <span className='text-primary' >{tongSoBanChoi}</span>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
        tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi,
        taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
    }
}

export default connect(mapStateToProps)(TitleGame)

