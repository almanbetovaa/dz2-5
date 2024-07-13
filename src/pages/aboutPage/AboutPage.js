
import React from "react";
import {useDispatch} from "react-redux";
import {asyncFunction} from "../../redux/action";

const AboutPage = () => {

    const dispatch = useDispatch ()

    return(
        <button onClick={asyncFunction}>after 2 sec</button>
    )
}

export default AboutPage