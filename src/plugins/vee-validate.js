import Vue from "vue";
import {
    ValidationProvider,
    ValidationObserver,
    extend,
    localize,
} from "vee-validate";
import ru from "vee-validate/dist/locale/ru.json";
import { required, email } from "vee-validate/dist/rules";

localize("ru", ru);

extend("email", email);
extend("required", {
    ...required,
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
