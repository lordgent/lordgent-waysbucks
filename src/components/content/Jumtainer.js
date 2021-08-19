import React from 'react'
import Jum from './Jum.module.css' 


const Jumtainer = (props) => {


    return (
        <>
          <div className={Jum.jumcontent}>
                <h1 className={Jum.jumtitle}>{props.title}</h1>

                <p className={Jum.prom}>{props.promo}</p>
                <p className={Jum.spn}>
                    {props.spn}
                </p>
          </div>      
        </>
    )
}

export default Jumtainer
