<script>
export default {
    data: () => ({
        navMenu: false,
        userMenu: false,
        group: null,
        group2: null,
        menuItems: [
            {
                title: "Lorem",
                to: "/",
            },
        ],
        userMenuItems: [
            {
                title: "Profile",
                to: "/profile",
            },
            {
                title: "Logout",
                to: "/",
            },
        ],
    }),

    watch: {
        group() {
            this.navMenu = false;
        },
        group2() {
            this.userMenu = false;
        },
    },
};
</script>

<template>
    <v-app-bar class="px-2" color="primary">
        <div class="logo-bg">
            <img
                src="/public/assets/granny_logo.png"
                alt="Granny App Logo"
                class="logo cursor-pointer"
                @click="this.$router.push('/dashboard')"
            />
        </div>
        <div
            class="font-weight-bold text-h4 ml-2 cursor-pointer text-white"
            @click="this.$router.push('/dashboard')"
        >
            Granny
        </div>
        <v-spacer></v-spacer>

        <template v-slot:append>
            <v-btn
                color="white"
                icon="mdi-account"
                @click="userMenu = !userMenu"
            ></v-btn>
        </template>
    </v-app-bar>
    <v-navigation-drawer v-model="navMenu" location="left" temporary>
        <v-list>
            <v-list-item
                v-for="item in menuItems"
                :title="item.title"
                :to="item.to"
                link
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="userMenu" location="right" temporary>
        <v-list>
            <v-list-item
                v-for="item in userMenuItems"
                :title="item.title"
                :to="item.to"
                link
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.logo {
    height: 60px;
    width: 60px;
}
.logo-bg {
    border-radius: 50%;
    background-color: white;
}
</style>
