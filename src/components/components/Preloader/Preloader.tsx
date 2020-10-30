import React from "react";
import s from './Preloader.module.css'

const Preloader = () => {

    return (
        <div className={s.cssload_container}>
            <div className={s.cssload_speeding_wheel}/>
        </div>
    )
}

export default Preloader