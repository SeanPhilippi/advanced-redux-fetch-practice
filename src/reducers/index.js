import { combineReducers } from "redux";

function products(state = [], action) {
  return (
    action.type === "PRODUCTS_LOADED" ?
      action.value :
      state
  );
}

function comments(state = [], action) {
  return (
    action.type === "COMMENTS_LOADED" ?
      action.value :
      state
  );
}

function contacts(state = [], action) {
  return (
    action.type === "CONTACTS_LOADED" ?
      action.value :
      state
  );
}

function vehicles(state = [], action) {
  return (
    action.type === "VEHICLES_LOADED" ?
      action.value :
      state
  );
}

export default combineReducers({
  comments, products, vehicles, contacts
});
