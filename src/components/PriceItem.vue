<template>
    <div class="flex flex-col items-center mb-8">
        <component
            :is="data.svg"
            :key="data.svg.name"
            class="w-14 h-14 sm:w-20 text-[color:#FCC302] fill-current mb-2"
        ></component>
        <div class="text-xs sm:text-base">
            <p class="">
                {{ data.name }}
            </p>
            <p class="text-lg sm:text-2xl font-bold">{{ data.price }} руб</p>
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
