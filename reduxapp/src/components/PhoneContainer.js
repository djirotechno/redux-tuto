import React from 'react';
import phone from '../image/phone1.jpeg'
import { connect } from 'react-redux';
import {byphone} from '../redux/phone/ActionPhone'
import { useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux'

function PhoneContainer(props) {
  const [totalPhone,setTotalPhone] = useState(1)

// const phones = useSelector(state =>state.phone)
// const dispatch = useDispatch()
  return (
  <div>
     <div className="container">
            <img src={phone} alt=""/>
            <p>Disponibilite
                <span id="count">
                    { props.phone.phone}
                </span>
            </p>
            <div className="btnClass">
            <button id="by-phone" onClick={() => props.byphone(totalPhone)}>Acheter</button>
            <input type="text" value={totalPhone} onChange={e => setTotalPhone(e.target.value)}/>
            </div>
        </div>
  </div>
  )}

//un map du state initiale
  const  mapStateToProps = (state) => {
      return {
          phone: state.phone
      }
  }

  const  mapDispatchToProps = (dispatch) => {
      return {
        byphone: totalPhone => dispatch(byphone(totalPhone))
        
      }
  }
//HOC 
  export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);