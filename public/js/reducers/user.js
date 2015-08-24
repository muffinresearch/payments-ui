import * as actionTypes from 'constants/action-types';


export const initialUserState = {
  signedIn: false,
  email: null,
  payMethods: [],
  braintreeToken: null,
  subscriptions: null,
  transactions: null,
  tmp: {},
};


export default function user(state, action) {

  if (action.type === actionTypes.USER_SIGNED_OUT) {
    return Object.assign({}, initialUserState, {
      signedIn: false,
    });
  }

  if (action.type === actionTypes.LOADING_USER_TRANSACTIONS) {
    return Object.assign({}, initialUserState, state, {
      transactions: initialUserState.transactions,
    });
  }

  if (action.type === actionTypes.GOT_USER_TRANSACTIONS) {
    return Object.assign({}, initialUserState, state, {
      transactions: action.transactions,
    });
  }

  if (action.type === actionTypes.USER_SIGNED_IN) {
    return Object.assign({}, initialUserState, {
      signedIn: true,
      email: action.user.email,
      payMethods: action.user.payMethods,
    });
  }

  if (action.type === actionTypes.GOT_BRAINTREE_TOKEN) {
    return Object.assign({}, initialUserState, state, {
      braintreeToken: action.braintreeToken,
    });
  }

  if (action.type === actionTypes.LOADING_USER_SUBS) {
    return Object.assign({}, initialUserState, state, {
      subscriptions: initialUserState.subscriptions,
    });
  }

  if (action.type === actionTypes.GOT_USER_SUBS) {
    return Object.assign({}, initialUserState, state, {
      subscriptions: action.subscriptions,
    });
  }

  if (action.type === actionTypes.GOT_SUBS_BY_PAY_METHOD) {
    return Object.assign({}, initialUserState, state, {
      // This is short-lived data only relevant to the current
      // operation.
      tmp: {
        operation: actionTypes.SHOW_CONFIRM_DEL_PAY_METHOD,
        affectedSubscriptions: action.subscriptions,
        payMethodUri: action.payMethodUri,
      },
    });
  }

  if (action.type === actionTypes.GOT_PAY_METHODS) {
    return Object.assign({}, initialUserState, state, {
      payMethods: action.payMethods,
    });
  }

  if (action.type === actionTypes.ADD_PAY_METHOD) {
    return Object.assign({}, initialUserState, state, {
      payMethods: action.payMethods,
    });
  }

  if (action.type === actionTypes.DEL_PAY_METHOD) {
    return Object.assign({}, initialUserState, state, {
      payMethods: action.payMethods,
    });
  }

  if (action.type === actionTypes.SHOW_CONFIRM_DEL_PAY_METHOD) {
    return Object.assign({}, initialUserState, state, {
      // Ephemeral data for this operation only.
      tmp: {
        operation: actionTypes.SHOW_CONFIRM_DEL_PAY_METHOD,
        payMethodUri: action.payMethodUri,
      },
    });
  }

  return state || initialUserState;
}
