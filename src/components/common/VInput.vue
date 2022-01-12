<template>
    <ValidationProvider :name="label" :rules="rules">
        <div class="mb-6" slot-scope="{ errors }">
            <label class="text-sm text-gray-900 font-medium" :for="id">
                {{ label }}
            </label>
            <input
                class="w-full border-2 text-gray-900 rounded-lg focus:border-blue-500 py-2 px-4 mt-2 transition ease-in-out duration-200"
                :class="errors[0] ? 'border-red-500' : 'border-gray-300'"
                :id="id"
                :type="type"
                :data-tel-input="type === 'tel'"
                :placeholder="placeholder"
                :value="value"
                :maxlength="maxlength"
                @input="$emit('input', $event.target.value)"
            />
            <transition name="fade">
                <span
                    v-show="errors[0]"
                    class="error-message text-red-500 text-sm"
                >
                    {{ errors[0] }}
                </span>
            </transition>
        </div>
    </ValidationProvider>
</template>

<script>
export default {
    name: "VInput",
    props: {
        value: {
            type: String,
            required: true,
        },

        label: {
            type: String,
            required: true,
        },

        rules: {
            type: String,
            default: "",
        },

        required: {
            type: Boolean,
            default: false,
        },

        type: {
            type: String,
            default: "text",
        },

        placeholder: {
            type: String,
            default: "",
        },

        errorMessage: {
            type: String,
            default: "",
        },

        maxlength: {
            type: Number,
            default: 255,
        },
    },

    data: () => ({
        id: "",
    }),

    created() {
        this.id = this.getRandomString();
    },

    methods: {
        getRandomString() {
            return (Math.random() + 1).toString(36).substring(7);
        },
    },
};
</script>
