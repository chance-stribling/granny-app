<script>
export default {
    data: () => ({
        tab: null,
        isMobile: false,
    }),
};
</script>
<template>
    <v-card class="card" color="primary">
        <v-tabs v-model="tab" color="white">
            <v-tab value="login">Login</v-tab>
            <v-tab value="register">Register</v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="login">
                    <v-label>Email</v-label>
                    <v-text-field
                        bg-color="white"
                        class="text-field"
                    ></v-text-field>
                    <v-label>Password</v-label>
                    <v-text-field
                        bg-color="white"
                        class="text-field"
                    ></v-text-field>
                    <div class="w-100 d-flex justify-between">
                        <v-btn
                            color="white"
                            @click="this.$router.push('/dashboard')"
                            >Login</v-btn
                        >
                        <v-btn color="white">Forgot Password?</v-btn>
                    </div>
                </v-tabs-window-item>

                <v-tabs-window-item value="register">
                    <v-label>Name</v-label>
                    <v-text-field
                        bg-color="white"
                        class="text-field"
                    ></v-text-field>
                    <v-label>Email</v-label>
                    <v-text-field
                        bg-color="white"
                        class="text-field"
                    ></v-text-field>
                    <v-label>Password</v-label>
                    <v-text-field
                        bg-color="white"
                        class="text-field"
                    ></v-text-field>
                    <v-label>Confirm Password</v-label>
                    <v-text-field
                        bg-color="white"
                        class="text-field"
                    ></v-text-field>
                    <div>
                        <v-btn
                            color="white"
                            @click="this.$router.push('/dashboard')"
                            >Register</v-btn
                        >
                    </div>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.text-field {
    width: 400px;
}
.card {
    height: fit-content;
}

@media only screen and (max-width: 1000px) {
    .card {
        width: 90%;
    }
}
</style>
