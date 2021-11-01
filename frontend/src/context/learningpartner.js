import React, { useContext, useReducer } from 'react'
import LearningReducer from '../reducers/learningReducer'

const LearningContext = React.createContext()
const intialState = {
    isSideBarOpen : false,
}

function LearningProvider({children}){
    const [state,dispatch] = useReducer(LearningReducer,intialState)
    
    function openSideBar() {
        dispatch({ type: "SIDEBAR_OPEN" })
    }

    function closeSideBar() {
        dispatch({ type: "SIDEBAR_CLOSE" })
    }

    return (
        <LearningContext.Provider value={{...state,openSideBar,closeSideBar}}>
            {children}
        </LearningContext.Provider>
    )
}

export default LearningProvider

export function useLearningContext(){
    return useContext(LearningContext)
}
