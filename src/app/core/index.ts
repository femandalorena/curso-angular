import {ActionReducerMap} from '@ngrx/store';

import * as fromHome from '../admin/students/store/students.reducer';

export const reducers: ActionReducerMap<any> = {
  home: fromHome.reducer
};