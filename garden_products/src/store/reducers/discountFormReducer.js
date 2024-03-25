const defaultState = {
    name: '',
    phone: '',
    email: '',
    errorMessage: '',
  };
  
  const SET_NAME = 'SET_NAME';
  const SET_PHONE = 'SET_PHONE';
  const SET_EMAIL = 'SET_EMAIL';
  const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
  const SUBMIT_FORM = 'SUBMIT_FORM';
  
  export const discountFormReducer = (state = defaultState, action) => {

    if (action.type === SET_NAME) {
        
      return { ...state, name: action.payload };
    } 
        else if (action.type === SET_PHONE) {
            return { ...state, phone: action.payload };
    } 
        else if (action.type === SET_EMAIL) {
            return { ...state, email: action.payload };
    } 
        else if (action.type === SET_ERROR_MESSAGE) {
            return { ...state, errorMessage: action.payload };
    } 
        else if (action.type === SUBMIT_FORM) {
            return defaultState;
    }   else {
            return state;
    }
  };