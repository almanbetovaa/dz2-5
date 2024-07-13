import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction} from "../../redux/action";

const MainPage = () => {

    const mainTitle = useSelector(state => state.mainPageReducer.title)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>{mainTitle}</h1>
            <button onClick={() => dispatch(changeTitleAction())}>change title</button>
        </div>
    )
}

export default MainPage;