import { SAVE_REPORT } from '../actions/ActionTypes';
import { USER_LOGIN } from '../actions/ActionTypes';
import { USER_REGISTER } from '../actions/ActionTypes';
import problemInterface from '../../interfaces/problemInterface';

// MOES EXAMPLE
// import { fetchUserData } from "../apiService";
// export function fetchUser (email: string, password: string) {
//   return function (dispatch) {
//     fetchUserData(email, password)
//       .then((user) => {
//         dispatch(userLogin(user));
//       })
//       .finally(() => {
//         dispatch(setLoading(false));
//       });
//   };
// }


export const userLogin = (user: string) => ({
  type: USER_LOGIN,
  payload: {
    user
  },
});

export const userRegister = (firstName: string, lastName: string, email: string, password: string) => ({
  type: USER_REGISTER,
  payload: {
    firstName,
    lastName,
    email,
    password
  },
});

export const addNewReport = (savedReport: problemInterface[]) => ({
  type: SAVE_REPORT,
  payload: {
    savedReport,
  },
});
