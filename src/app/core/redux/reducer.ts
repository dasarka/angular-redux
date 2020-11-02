import { IAction, InitialState } from './../models/redux.interface';
import { ActionTypes } from './actionType';

export const initialState: InitialState = {
    user: null,
    training: [],
    selectedTraining: null
};

export function CoreReducer(state = initialState, action: IAction): InitialState {
    switch (action.type) {
        case ActionTypes.SetUser:
            return {
                ...state,
                user: { ...action.payload }
            };
        case ActionTypes.LoadTraining: {
            return {
                ...state,
                training: [...action.payload]
            };
        }
        case ActionTypes.Logout: {
            return {
                ...initialState
            };
        }
        case ActionTypes.OpenTraining: {
            return {
                ...state,
                selectedTraining: {
                    ...action.payload
                }
            };
        }
        default:
            return state;
    }
}
