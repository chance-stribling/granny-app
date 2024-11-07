<script>
import TopBar from "../components/TopBar.vue";
import BackButton from "../components/BackButton.vue";

export default {
    components: {
        TopBar,
        BackButton
    },
    data: () => ({
        drawer: false,
        group: null,
        label: "",
        starchScale: "",
        items: [
            {
                title: "Honey Crisp",
                value: "honey_crisp",
            },
            {
                title: "WA38-1",
                value: "wa38_1",
            },
            {
                title: "WA38-2",
                value: "wa38_2",
            },
            {
                title: "Allan Brothers",
                value: "allan_bros",
            },
            {
                title: "Granny Smith",
                value: "granny_smith",
            },
            {
                title: "Golden Delicious",
                value: "golden_delicious",
            },
            {
                title: "Jonagold",
                value: "jonagold",
            },
            {
                title: "Cornell",
                value: "cornell",
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>

<template>
    <TopBar />
    <div class="main">
        <v-card
            class="card pa-2 d-flex flex-column justify-center"
            color="primary"
        >
            <div class="text-h5 mb-2">Segmentation</div>

            <v-label>Starch Scale</v-label>
            <v-select
                v-model="this.starchScale"
                :items="items"
                bg-color="white"
            ></v-select>
            <v-label>Label</v-label>
            <v-text-field
                bg-color="white"
                class="text-field"
                v-model="this.label"
            ></v-text-field>
            <div class="text-h6 mb-5">Please approve all images.</div>
            <v-btn @click="this.$router.push('/fruit-rating')">Submit</v-btn>
        </v-card>
        <v-card class="card pa-2" color="primary">
            <div class="text-h5 mb-2">Review Images</div>
            <v-card class="segments-card" color="secondary">
                <v-card v-for="i in 9" class="ma-2 pa-2">
                    <img
                        class="result-img mb-2"
                        src="/public/assets/placeholder.svg"
                        alt=""
                    />
                    <div class="d-flex justify-between align-center">
                        <div class="text-h6">Image {{ i }}</div>
                        <v-btn
                            size="small"
                            color="success"
                            icon="mdi-check"
                        ></v-btn>
                        <v-btn
                            size="small"
                            color="error"
                            icon="mdi-window-close"
                        ></v-btn>
                    </div>
                </v-card>
            </v-card>
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
    max-height: 500px;
}
.segments-card {
    height: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: scroll;
}
.result-img {
    height: 200px;
    width: 200px;
    border-style: solid;
    border-width: 1px;
}
@media only screen and (max-width: 1000px) {
    .card {
        width: 98%;
    }
}
</style>
