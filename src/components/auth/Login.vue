<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/lock.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt anmelden</h2>
      <p>
        oder
        <a class="text-vue2" role="button" @click="changeComponent('register')"
          >erstellen Sie ein Konto.</a
        >
      </p>
    </div>
    <div class="alert alert-danger col-md-8" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>E-Mail-Adresse</strong></label>
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Einloggen</span>
              <span v-else class="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-components": (payload) => {
      if (payload.componentName !== "register") {
        return false;
      }
      return true;
    },
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email("Gültige E-Mail Adresse ist erforderlich")
        .required("E-Mail Adresse wird benötigt")
        .trim()
        .email("Das ist keine gülitige Email Adresse"),
      password: yup
        .string()
        .required("Passwort wird benötigt")
        .min(6, "Das Passwort muss min. 6 Zeichen lang sein"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwörter müssen übereinstimmen")
        .required("Passwort Wiederholung ist erforderlich"),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("INVALID_PASSWORD")) {
          return "Falsches Passwort";
        }
        return "Es ist ein unbekannter Fehler aufgetreten.";
      }
      return "";
    },
  },
  methods: {
    submitData(values) {
        this.isLoading = true;
        this.error = "";
      // console.log(values);
      const signinDO = {
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      };
      const apiKey = process.env.VUE_APP_API_KEY_FIREBASE;
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key==${apiKey}`,
          signinDO
        )
        .then((response) => {
          console.log(response);
          this.isLoading = false;
        })
        .catch((error) => {
          //console.log({ error });
          this.error = error.response.data.error.message;
          this.isLoading = false;
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<style scoped></style>
