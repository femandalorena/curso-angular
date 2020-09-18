import {ActionReducerMap} from '@ngrx/store';

import * as fromHome from '../admin/store/student.reducer';

export const reducers: ActionReducerMap<any> = {
  home: fromHome.reducer
};
