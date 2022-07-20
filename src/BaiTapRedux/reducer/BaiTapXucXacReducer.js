const stateDefault = {
    taiXiu: true,
    mangXucXac: [
        { ma: 1, hinhAnh: './GameTaiXiu/video_19_game_xuc_xac/1.png' },
        { ma: 1, hinhAnh: './GameTaiXiu/video_19_game_xuc_xac/1.png' },
        { ma: 1, hinhAnh: './GameTaiXiu/video_19_game_xuc_xac/1.png' },
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
}

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.taiXiu = action.taiXiu
            return { ...state }
        }
        case 'PLAY_GAME': {
            let mangXucXacNgauNhien = []
            for (let i = 0; i < state.mangXucXac.length; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1

                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./GameTaiXiu/video_19_game_xuc_xac/${soNgauNhien}.png` }

                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            state.mangXucXac = mangXucXacNgauNhien;

            state.tongSoBanChoi += 1;

            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
                return tongDiem += xucXac.ma
            }, 0)

            if ((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem < 11 && state.taiXiu === false )) {
                state.soBanThang += 1
            }

            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default BaiTapGameXucXacReducer;