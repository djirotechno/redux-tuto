
import { connect } from 'react-redux';
import React from 'react';
import phone from '../image/phone1.jpeg'
import byjuice from '../redux/juice/Actionjuice'
import { useState } from 'react';

function Juicecomponent(props) {
   const [totalJuice,setTotalJuice] = useState(1)
  return (  
    <div>
    <div className="container">
           <img src={phone} alt=""/>
           <p>Disponibilite
               <span id="count">
                   {props.juice.juice}
                </span>
           </p>
           <div className="btnClass">
            <button id="by-phone" onClick={()=>props.byjuice(totalJuice)}>Acheter</button>
            <input type="text" value={props.totalJuice} onChange={e => setTotalJuice(e.target.value)}/>
           </div>
       </div>
  </div>

  )

}

 const mapStateToProps = (state) => {
    return {
        juice: state.juice
    }
}

const  mapDispatchToProps = (dispatch) => {
  return {
    byjuice: totalJuice => dispatch(byjuice(totalJuice))
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Juicecomponent);