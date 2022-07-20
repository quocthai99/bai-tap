const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './GameTuXi/video_23_game_oan_tu_ti/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './GameTuXi/video_23_game_oan_tu_ti/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './GameTuXi/video_23_game_oan_tu_ti/bao.png', datCuoc: false },
    ],
    ketQua: 'You Win',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './GameTuXi/video_23_game_oan_tu_ti/keo.png' }
}

const BaiTapTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc]
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {

                if (item.ma === action.payload) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate
            return { ...state }

            // let index = mangCuocUpdate.findIndex(qc => qc.ma === action.payload)
            // if (index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true
            // }

            // state.mangDatCuoc = mangCuocUpdate
            // return { ...state }
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3)
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]

            state.computer = quanCuocNgauNhien

            return { ...state }
        }
        case 'END_GAME': {
            state.soBanChoi += 1
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)
            let computer = state.computer

            switch (player.ma) {
                case 'keo': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hoa'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua SML!'
                    } else {
                        state.soBanThang += 1
                        state.ketQua = 'ohye babi'
                    }
                    break
                }
                case 'bua': {
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1
                        state.ketQua = 'ohye babi'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hoa'
                    } else {
                        state.ketQua = 'Thua SML!'
                    }
                    break
                }
                case 'bao': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua SML!'
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1
                        state.ketQua = 'ohye babi'
                    } else {
                        state.ketQua = 'Hoa'
                    }
                    break
                }
                default:
                    state.soBanThang += 1
                    state.ketQua = 'ohye babi'
                    return { ...state }
            }
        }

        default:
            return { ...state }
    }
}

export default BaiTapTuXiReducer