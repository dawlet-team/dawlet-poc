import { createAction } from 'redux-actions';

export const FETCH_DAWLETS = 'dawlets/FETCH_DAWLETS';
const FETCH_DAWLETS_SUCCESS = 'dawlets/FETCH_DAWLETS_SUCCESS';
const FETCH_DAWLETS_FAILED = 'dawlets/FETCH_DAWLETS_FAILED';

export const fetchDawlets = createAction(FETCH_DAWLETS);
export const fetchDawletsSuccess = createAction(FETCH_DAWLETS_SUCCESS);
export const fetchDawletsFailed = createAction(FETCH_DAWLETS_FAILED);

export const ACTIVATE_DAWLET = 'dawlets/ACTIVATE_DAWLET';
export const activateDawlet = createAction(ACTIVATE_DAWLET);

const InitialState = {
  availableDawlets: [],
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_DAWLETS_SUCCESS:
      return { ...state, availableDawlets: action.payload };
    default:
      return state;
  }
};

export default reducer;
