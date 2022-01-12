<template>
    <main class="flex flex-col items-center text-[color:#758185]">
        <section
            class="font-marvin gradient-text text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-12"
            :data-title="title"
        >
            <h2>{{ title }}</h2>
        </section>

        <section
            class="w-full max-w-6xl mx-auto flex justify-center flex-wrap my-12 px-8"
        >
            <div
                v-for="(category, index) in categories"
                :key="index"
                :class="
                    category.active
                        ? 'bg-[color:#758185] text-white'
                        : 'bg-[color:#E1E8EB]'
                "
                class="group min-w-[100px] sm:min-w-[200px] w-[calc(20%-2px)] mx-0.5 my-1 flex-1 flex flex-col sm:flex-row justify-center items-center py-4 px-6 cursor-pointer hover:bg-[color:#758185] hover:text-white transition ease-in-out duration-200"
            >
                <component
                    :is="category.svg"
                    :key="category.svg.name"
                    :class="
                        category.active
                            ? 'text-[color:#fcc302]'
                            : 'text-[color:#758185]'
                    "
                    class="w-8 my-2 sm:m-0 sm:mr-4 fill-current group-hover:text-[color:#fcc302]"
                ></component>
                <span class="text-xs sm:text-lg">{{ category.name }}</span>
            </div>
        </section>

        <section class="w-full">
            <div
                class="text-center sm:text-2xl font-bold line tracking-widest mb-2 py-8"
            >
                <h3>ЦЕНЫ НА ВХОД И ПОЛЬЗОВАНИЕ</h3>
                <h3>ВСЕМИ АТТРАКЦИОНАМИ</h3>
            </div>

            <div class="bg-[color:#FAFBFC] relative pb-12">
                <div class="w-full max-w-6xl mx-auto pt-16">
                    <div
                        class="w-full md:w-2/3 flex flex-col items-center z-20"
                    >
                        <div class="flex px-4">
                            <div class="w-1/2 text-center">
                                <div
                                    class="h-16 border-b-2 border-r-2 border-[color:#fcc302]"
                                >
                                    <h4
                                        class="text-xl sm:text-xl xl:text-3xl font-bold"
                                    >
                                        БУДНИ
                                    </h4>
                                </div>

                                <div
                                    class="h-full py-8 px-4 border-r border-[color:#fcc302]"
                                >
                                    <span
                                        v-for="(data, index) in priceData"
                                        :key="index"
                                    >
                                        <PriceItem
                                            v-if="!data.holidays"
                                            :data="data"
                                        ></PriceItem>
                                    </span>
                                </div>
                            </div>

                            <div class="w-1/2 text-center">
                                <div
                                    class="h-16 text-center font-bold border-b-2 border-[color:#fcc302]"
                                >
                                    <h4
                                        class="text-xl sm:text-xl xl:text-3xl font-bold"
                                    >
                                        ВЫХОДНЫЕ
                                    </h4>
                                    <h4 class="text-xs">И ПРАЗДНИЧНЫЕ ДНИ</h4>
                                </div>

                                <div
                                    class="h-full py-8 px-4 border-l border-[color:#fcc302]"
                                >
                                    <span
                                        v-for="(data, index) in priceData"
                                        :key="index"
                                    >
                                        <PriceItem
                                            v-if="data.holidays"
                                            :data="data"
                                        ></PriceItem>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            class="w-[250px] bg-[color:#FCC302] text-white font-bold py-4 px-12 mt-24 hover:bg-opacity-75"
                            @click="buyTicket"
                        >
                            КУПИТЬ БИЛЕТ
                        </button>
                    </div>

                    <div
                        class="hidden md:block md:min-w-[40%] h-3/4 pt-12 absolute bottom-0 right-0"
                    >
                        <img
                            class="h-full z-10"
                            src="/images/asset-1.png"
                            alt="Asset"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import TicketsSvg from "@/components/common/svg/tickets";
import RoomsSvg from "@/components/common/svg/rooms";
import RestaurantSvg from "@/components/common/svg/restaurant";
import HolidaysSvg from "@/components/common/svg/holidays";
import DinnerTableSvg from "@/components/common/svg/dinner-table";
import InfinitySvg from "@/components/common/svg/infinity";
import HourSvg from "@/components/common/svg/hour";
import NextSvg from "@/components/common/svg/next";

import PriceItem from "@/components/PriceItem";

export default {
    name: "Price",

    components: {
        PriceItem,
    },

    async created() {
        this.$store.dispatch("getPrice");
    },

    data: () => ({
        title: "ЦЕНЫ JOKI JOYA В САНКТ-ПЕТЕРБУРГЕ",
        categories: [
            { name: "Билеты", svg: TicketsSvg, active: true },
            { name: "Комнаты", svg: RoomsSvg, active: false },
            { name: "Столы", svg: DinnerTableSvg, active: false },
            { name: "Ресторан", svg: RestaurantSvg, active: false },
            { name: "Праздники", svg: HolidaysSvg, active: false },
        ],

        priceData: [
            {
                name: "Входной билет (на весь день)",
                holidays: false,
                price: 450,
                svg: InfinitySvg,
            },
            {
                name: "Билет на 1 час",
                holidays: false,
                price: 350,
                svg: NextSvg,
            },
            {
                name: "Продление (до полного дня)",
                holidays: false,
                price: 100,
                svg: HourSvg,
            },
            {
                name: "Входной билет (на весь день)",
                holidays: true,
                price: 950,
                svg: InfinitySvg,
            },
        ],
    }),

    methods: {
        buyTicket() {
            this.$toast.error("Временно не доступно");
        },
    },
};
</script>

<style lang="scss" scoped>
.gradient-text {
    position: relative;
    background: linear-gradient(
        2deg,
        #cca06a,
        #d3ab78 30%,
        #b17c3b 70%,
        #e4c6a8
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
        content: attr(data-title);
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        color: #cca06a;
        -webkit-text-stroke-width: 5px;
        -webkit-text-stroke-color: #f5f5f5;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        z-index: -1;
    }
}
</style>
