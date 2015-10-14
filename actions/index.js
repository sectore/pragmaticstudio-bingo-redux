import {createAction} from 'redux-actions';

export const SORT = '@@bingo/sort';
export const sort = createAction(SORT);

export const DELETE = '@@bingo/delete';
// Note: Using action name `del` instead of `delete`,
// because delete is a reserved keyword by JavaScript
export const del = createAction(DELETE);

export const MARK = '@@bingo/mark';
export const mark = createAction(MARK);

export const ADD = '@@bingo/add';
export const add = createAction(ADD);

export const UPDATE_PHRASE_INPUT = '@@bingo/updatePhraseInput';
export const updatePhraseInput = createAction(UPDATE_PHRASE_INPUT);

export const UPDATE_POINTS_INPUT = '@@bingo/updatePointsInput';
export const updatePointsInput = createAction(UPDATE_POINTS_INPUT);
