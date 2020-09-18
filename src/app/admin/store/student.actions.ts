import {createAction, props} from '@ngrx/store';

export const AddStudent = createAction('[STUDENT]AddStudent', props<{product: any}>());

