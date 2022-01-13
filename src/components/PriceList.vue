<template>
    <div class="w-1/2">
        <div class="h-16 text-center font-bold" :class="border.title">
            <slot />
        </div>

        <div class="h-5/6 py-6 px-4 text-center" :class="border.body">
            <span v-for="(data, index) in priceData" :key="index">
                <PriceItem
                    v-if="data.holidays === holidays"
                    :data="data"
                    class="flex items-center px-4"
                    :class="priceItemClass"
                ></PriceItem>
            </span>
        </div>
    </div>
</template>

<script>
import PriceItem from "@/components/PriceItem";

export default {
    name: "PriceList",

    props: {
        priceData: {
            type: Array,
            required: true,
        },

        border: {
            type: Object,
            default: () => {},
        },

        priceItemClass: {
            type: String,
            default: "",
        },

        holidays: {
            type: Boolean,
            default: false,
        },
    },

    components: {
        PriceItem,
    },
};
</script>
