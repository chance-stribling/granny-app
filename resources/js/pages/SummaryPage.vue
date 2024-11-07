<script>
import TopBar from "../components/TopBar.vue";
import BackButton from "../components/BackButton.vue";
import Chart from "../components/Chart.vue";

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
    <BackButton/>
    <TopBar />
    <div class="main">
        <v-card
            class="card pa-2 "
            color="primary"
        >
            <div class="text-h5 mb-5">Analysis #000001</div>
            <div class="d-flex flex-row justify-center">
                <div class="d-flex flex-column w-50 ">
                    <v-label>Label</v-label>
                    <div class="text-h6 mb-2">Label</div>

                    <v-label>Time Started</v-label>
                    <div class="text-h6 mb-2">10/02/23, 9:14 p.m.</div>

                    <v-label>Time Finished</v-label>
                    <div class="text-h6 mb-2">10/02/23, 10:15 p.m.</div>
                    <v-label>Selected Starch Scale</v-label>
                    <div class="text-h6 mb-2">Jonagold</div>

                    <v-label>Rating</v-label>
                    <div class="text-h6 mb-2">0.897896</div>

                    <v-label>Mean Rating</v-label>
                    <div class="text-h6 mb-2">0.8</div>

                    <div class="pa-2 my-2 bg-white">
                        <Chart />
                    </div>
                </div>
                <div class="d-flex flex-column w-50">
                    <v-label>Original Image</v-label>
                    <img
                        class="mb-2"
                        src="/public/assets/placeholder.svg"
                        alt=""
                    />
                </div>
            </div>
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
    margin-top: 1rem;
}
@media only screen and (max-width: 1000px) {
    .card {
        width: 98%;
    }
}
</style>
