<template>
    <div class="mb-6">
        <label class="text-sm text-gray-900 font-medium" :for="id">
            {{ label }}
        </label>
        <textarea
            class="w-full min-h-[100px] border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 py-2 px-4 mt-2"
            :id="id"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <span
            v-if="errorMessage"
            class="error-message text-red-500 text-xs italic"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>

<script>
export default {
    name: "VTextarea",
    props: {
        value: {
            type: String,
            required: true,
        },

        label: {
            type: String,
            required: true,
        },

        required: {
            type: Boolean,
            default: false,
        },

        placeholder: {
            type: String,
            default: "",
        },

        errorMessage: {
            type: String,
            default: "",
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
