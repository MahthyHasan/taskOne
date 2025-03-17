import authService from "../auth/authService";
import { setUser, setLoading, setError, logout } from "./authSlice";

export const registerUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await authService.registerUser(email, password);
    const serializedUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || null,
      accessToken: user.accessToken,
    };
    dispatch(setUser(serializedUser));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await authService.loginUser(email, password);
    const serializedUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || null,
      accessToken: user.accessToken,
    };
    dispatch(setUser(serializedUser));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const logoutUser = () => async (dispatch) => {
  try {
    await authService.logoutUser();
    dispatch(logout());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const loadUser = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await authService.getStoredUser();
    if (user) {
      const serializedUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || null,
        accessToken: user.accessToken,
      };
      dispatch(setUser(serializedUser));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};
