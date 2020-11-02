import { Training } from './training.interface';
import { User } from './user.interface';

export interface IAction {
    type: string;
    payload?: any;
}

export interface InitialState {
    user: User;
    training: Array<Training>;
    selectedTraining: Training;
}
