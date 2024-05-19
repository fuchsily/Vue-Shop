import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    userId: null,
    token: null,
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.setUser;
      state.token = payload.token;
    },
  },
  actions: {
    signup(context, payload) {
      const signupDO = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      const apiKey = process.env.VUE_APP_API_KEY_FIREBASE;
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
          signupDO
        )
        .then((response) => {
          context.commit("setUser", {
            userId: response.data.localId,
            token: response.data.idToken,
          });
        })
        .catch((error) => {
          //console.log({ error });
          const errorMessage = new Error(
            error.response.data.error.message || "UNKNOWN_ERROR"
          );
          throw errorMessage;
        });
    },
  },
  getters: {},
});

export default store;
