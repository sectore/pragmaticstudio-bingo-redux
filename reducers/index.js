import {handleActions} from 'redux-actions';
import sortBy from 'lodash.sortby';
import {
  SORT
  , MARK
  , DELETE
  , ADD
  , UPDATE_PHRASE_INPUT
  , UPDATE_POINTS_INPUT
} from '../actions';

const newEntry = (phrase, points, wasSpoken, id) => {
  return {phrase, points, wasSpoken, id}
};

const initialState = {
  entries:
    [
      newEntry("Doing Agile", 200, false, 2),
      newEntry("In The Cloud", 300, false, 3),
      newEntry("Future-Proof", 100, false, 1),
      newEntry("Rock-Star Ninja", 400, false, 4)
    ],
    phraseInput: "",
    pointsInput: "",
    nextID: 5
}

export default reducer = handleActions({
  [SORT]: (state, action) => ({
    ...state,
    entries: sortBy(state.entries, 'points')
  }),
  [DELETE]: (state, action) => ({
    ...state,
    entries: state.entries.filter(
      (e) => e.id !== action.payload
    )
  }),
  [MARK]: (state, action) => ({
    ...state,
    entries: state.entries.map(
      (e) => e.id == action.payload
      ? {...e, wasSpoken: !e.wasSpoken}
      : e
    )}
  ),
  [UPDATE_POINTS_INPUT]: (state, action) => ({
    ...state,
    pointsInput: action.payload
  }),
  [UPDATE_PHRASE_INPUT]: (state, action) => ({
    ...state,
    phraseInput: action.payload
  }),
  [ADD]: (state, action) => {
    if(state.phraseInput !== '' && state.pointsInput !== ''){
      return ({
        ...state,
        phraseInput: '',
        pointsInput: '',
        entries: [...state.entries, newEntry(
          state.phraseInput,
          parseInt(state.pointsInput),
          false,
          state.nextID
        )],
        nextID: state.nextID + 1
        })
    } else {
      return state
    }
  }
}, initialState);
