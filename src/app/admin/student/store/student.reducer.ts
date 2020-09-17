import {Action, createReducer, on} from '@ngrx/store';
import {AddStudent} from './student.actions';

export interface StudentState {
  items: any;
  totalAmount: number;
}

export const initialState: StudentState = {
  items: [],
  totalAmount: 0
};

const featureReducer = createReducer(
  initialState,
  on(AddStudent, (state, {product}) => ({...state, items: state.items.concat([product])}))
);


export function reducer(state: StudentState, action: Action): any {
  return featureReducer(state, action);
}
