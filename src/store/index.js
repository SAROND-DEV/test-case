import Vue from "vue";
import Vuex from "vuex";
import instance from "@/api/router.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        price: {},
    },

    mutations: {
        setPrice(responseData) {
            this.price = responseData;
        },
    },
    actions: {
        // CORS blocked request
        async getPrice({ context }) {
            await instance.get("/site/city/2/prices").then((response) => {
                context.commit("setPrice", response.data);
            });
        },
    },
});
