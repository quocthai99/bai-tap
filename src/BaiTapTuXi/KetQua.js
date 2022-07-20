import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
  render() {
    const { ketQua, soBanChoi, soBanThang } = this.props
    return (
      <div>
        <div className='display-4 text-warning'>
          {ketQua}
        </div>

        <div className='display-4 text-success'>
          Ban Thang: <span className='text-primary' >{soBanThang}</span>
        </div>

        <div className='display-5 text-success mt-3'>
          Tong So Ban Choi: <span className='text-primary' >{soBanChoi}</span>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    ketQua: state.BaiTapTuXiReducer.ketQua,
    soBanThang: state.BaiTapTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapTuXiReducer.soBanChoi,
  }
}

export default connect(mapStateToProps)(KetQua)