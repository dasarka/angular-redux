import { IAction } from '../models/redux.interface';
import { ActionTypes } from './actionType';

export const setUser = payload => {
    return {
        type: ActionTypes.SetUser,
        payload
    };
};


export const loadTraining = payload => {
    return {
        type: ActionTypes.LoadTraining,
        payload
    };
};

export const logout = () => {
    return {
        type: ActionTypes.Logout
    };
};

export const openTraining = payload => {
    return {
        type: ActionTypes.OpenTraining,
        payload
    };
};
