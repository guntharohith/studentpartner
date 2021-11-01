
export default function LearningReducer(state,action){
    if (action.type === "SIDEBAR_OPEN") {
        return { ...state, isSideBarOpen: true }
    }
    if (action.type === "SIDEBAR_CLOSE") {
        return { ...state, isSideBarOpen: false }
    }
    return state   
}
