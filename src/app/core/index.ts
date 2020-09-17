import {ActionReducerMap} from '@ngrx/store';

import * as fromHome from '../admin/student/store/home.reducer';

export const reducers: ActionReducerMap<any> = {
  home: fromHome.reducer
};
