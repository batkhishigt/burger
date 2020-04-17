import axios from "axios";

export const loginUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQ1HtMK90egh3_YmFecMP5Z6S-nmD0UlQ",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        const expiresIn = result.data.expiresIn;

        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refreshToken;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expireDate", expireDate);
        localStorage.setItem("refreshToken", refreshToken);

        dispatch(loginUserSuccess(token, userId));
        dispatch(autoLogoutAfterMillisec(expiresIn * 1000));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginUserError(err));
      });
  };
};

export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START",
  };
};

export const loginUserSuccess = (token, userId) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    token: token,
    userId: userId,
  };
};

export const loginUserError = (error) => {
  return {
    type: "LOGIN_USER_ERROR",
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  localStorage.removeItem("refreshToken");
  return {
    type: "LOGOUT_USER",
  };
};
export const autoLogoutAfterMillisec = (ms) => {
  return function (dispatch) {
    setTimeout(() => {
      const refreshToken = localStorage.getItem("refreshToken");
      const data = {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      };
      axios
        .post(
          "https://securetoken.googleapis.com/v1/token?key=AIzaSyAQ1HtMK90egh3_YmFecMP5Z6S-nmD0UlQ",
          data
        )
        .then((result) => {
          const token = result.data.id_token;
          const userId = result.data.user_id;
          const expiresIn = result.data.expires_in;

          const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
          const refreshToken = result.data.refresh_token;

          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          localStorage.setItem("expireDate", expireDate);
          localStorage.setItem("refreshToken", refreshToken);

          dispatch(loginUserSuccess(token, userId));
          dispatch(autoLogoutAfterMillisec(expiresIn * 1000));
        })
        .catch((err) => {
          dispatch(logout());
        });
    }, ms);
  };
};
