<template>
    <div class="mb-6">
        <component
            :is="data.svg"
            :key="data.svg.name"
            class="w-14 h-14 sm:w-20 text-[color:#FCC302] fill-current mb-2"
        ></component>

        <div
            class="text-left text-xs sm:text-base xl:text-lg whitespace-pre-wrap px-2 mb-2"
        >
            <p>
                {{ data.name }}
            </p>

            <p class="text-lg sm:text-2xl xl:text-2xl font-bold">
                {{ data.price }} руб
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PriceItem",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>
