import { isAuthenticated, getUserTokenInfo } from "../utils/auth";

const initialState = [{ id: 1, firstName: "John", lastName: "Doe", userName: "johndoe", hourlyWages: 100 }];

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USERS":
      return action.users;
    default:
      return state;
  }
}
