import createStore from "redux-zero";

const initialState = {
  successLogin: false,
  selectIdBoard: 0,
  user: {
    id: null,
    firstname: null,
    lastname: null,
    email: null
  },
  active: false
};

const store = createStore(initialState);
export default store;