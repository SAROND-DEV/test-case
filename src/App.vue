<template>
    <div id="app">
        <img
            class="w-96 mx-auto mt-12 px-8"
            alt="Joki Joya"
            src="https://joki-joya.ru/_nuxt/img/4430b99.png"
        />
        <nav id="nav" class="flex justify-center py-8 font-medium">
            <router-link to="/" class="min-w-[120px] mx-4">
                Обратная связь
            </router-link>
            |
            <router-link to="/price" class="min-w-[120px] mx-4">
                Цены
            </router-link>
        </nav>
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
#nav a {
    font-weight: bold;
    color: #13ace2;
}

#nav a.router-link-exact-active {
    color: #ee3e88;
}
</style>
