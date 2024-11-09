<script>
import TopBar from "../components/TopBar.vue";
import Chart from "../components/Chart.vue";
import BackButton from "../components/BackButton.vue";

export default {
    components: {
        TopBar,
        Chart,
        BackButton,
    },
    data: () => ({
        drawer: false,
        group: null,
        label: "",
    }),
};
</script>

<template>
    <TopBar />
    <BackButton />
    <div class="main">
        <v-card
            class="card pa-2 d-flex flex-column justify-center"
            color="primary"
        >
            <div class="text-h5 mb-2">Review</div>

            <v-label>Original Image</v-label>
            <img class="mb-2" src="/public/assets/placeholder.svg" alt="" />
            <v-label>Label</v-label>
            <div class="text-h6 mb-2">Label</div>
            <v-label>Selected Starch Scale</v-label>
            <div class="text-h6 mb-2">Jonagold</div>

            <v-label>Rating</v-label>
            <div class="text-h6 mb-2">0.897896</div>

            <v-label>Sample ID</v-label>
            <div class="text-h6 mb-2">45637</div>

            <v-label>Mean Rating</v-label>
            <div class="text-h6 mb-2">0.8</div>

            <div class="pa-2 my-2 bg-white">
                <Chart />
            </div>
            <v-btn @click="this.$router.push('/starch-apples')">Done</v-btn>
        </v-card>
    </div>
</template>

<style scoped>
.main {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
    background-color: #d2f4c6;
}
.card {
    min-height: 300px;
    height: fit-content;
    width: 500px;
    margin-top: 1rem;
}
@media only screen and (max-width: 1000px) {
    .card {
        width: 98%;
    }
}
</style>
