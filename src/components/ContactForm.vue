<template>
    <div class="container mx-auto flex justify-center items-center">
        <div
            class="min-w-[320px] w-[640px] border border-black border-opacity-20 rounded-2xl px-6 py-12 mb-12"
        >
            <ValidationObserver v-if="!sended" v-slot="{ handleSubmit }">
                <form ref="form" @submit.prevent="handleSubmit(sendForm)">
                    <v-input
                        v-model="formData.name"
                        :errorMessage="errors[0]"
                        label="Имя"
                        type="text"
                        rules="required"
                    />
                    <v-input
                        v-model="formData.phone"
                        :errorMessage="errors.phone"
                        label="Телефон"
                        type="tel"
                        :maxlength="18"
                        rules="required"
                    />
                    <v-input
                        v-model="formData.email"
                        :errorMessage="errors.email"
                        label="Email"
                        type="email"
                        rules="email"
                    />
                    <v-textarea
                        v-model="formData.message"
                        :errorMessage="errors.message"
                        label="Комментарий"
                    />

                    <button
                        :disabled="sended"
                        type="submit"
                        class="font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition ease-in-out duration-200 bg-[color:var(--button-default-color)] text-[color:var(--basic-color)] hover:bg-[color:var(--button-hover-color)] focus:bg-[color:var(--button-focus-color)]"
                    >
                        Отправить
                    </button>
                </form>
            </ValidationObserver>
            <span v-else class="font-medium text-center">
                Спасибо за обращение. Мы свяжемся с вами в ближайшее время
            </span>
        </div>
    </div>
</template>

<script>
import VInput from "@/components/common/VInput";
import VTextarea from "@/components/common/VTextarea";

export default {
    name: "ContactForm",

    components: {
        VInput,
        VTextarea,
    },

    data: () => ({
        sended: false,
        errors: {},
        formData: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },

        defaultFormData: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    }),

    methods: {
        sendForm() {
            this.$toast.success("Данные успешно отправлены");
            this.formData = { ...this.defaultFormData };
            this.sended = true;
        },
    },
};
</script>
