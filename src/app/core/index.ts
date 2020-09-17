import {ActionReducerMap} from '@ngrx/store';

import * as fromHome from '../pages/admin/store/admin.reducer';

export const reducers: ActionReducerMap<any> = {
  home: fromHome.reducer
};