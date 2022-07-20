import { combineReducers } from "redux";
import BaiTapGameXucXacReducer from "../../BaiTapRedux/reducer/BaiTapXucXacReducer";
import BaiTapTuXiReducer from "../../BaiTapTuXi/reducer/BaiTapTuXiReducer";

const rootReducer = combineReducers({
    BaiTapGameXucXacReducer,
    BaiTapTuXiReducer,
})

export default rootReducer