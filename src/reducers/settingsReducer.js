import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION } from '../actions/types';
import { actionTypes } from '../../node_modules/react-redux-firebase';

const initialState = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: false,
  allowRegistration: false
}

export default function(state = initialState) {
  switch(actionTypes.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: !state.disableBalanceOnAdd
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: !state.disableBalanceOnEdit
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: !state.allowRegistration
      };
    default:
      return state;
  }
}