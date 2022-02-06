
import React from 'react';
import {combineReducers} from 'redux'
import {createStore }from 'redux';
import PhoneReducer from './phone/PhoneReducer'
import juiceReducer from './juice/JuiceReducer';

const Reducers = combineReducers({

    phone:PhoneReducer,
    juice:juiceReducer
})

export const store = createStore(Reducers);