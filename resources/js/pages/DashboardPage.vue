<script>
import TopBar from "../components/TopBar.vue";
export default {
    components: {
        TopBar,
    },
    data: () => ({
        drawer: false,
        group: null,
        analyses: [
            {
                title: "Starch for Pears",
                to: "/starch-pears",
            },
            {
                title: "Blush for Pears",
                to: "/blush-pears",
            },
            {
                title: "Starch for Apples",
                to: "/starch-apples",
            },
            {
                title: "Superficial Scald for Apples",
                to: "/superficial-scald-apples",
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
        <v-card class="card pa-2" color="primary">
            <div class="text-h5 mb-2">New Analysis</div>
            <div class="new-buttons">
                <v-btn
                    class="btn bg-secondary text-h6 mb-2"
                    v-for="analysis in analyses"
                    :to="analysis.to"
                >
                    {{ analysis.title }}
                </v-btn>
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
    width: 500px;
    margin-top: 1rem;
}
.logo {
    height: auto;
    width: 150px;
}
.placeholder {
    height: 90%;
    width: 150px;
}
.new-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.new-buttons .btn {
    height: 60px;
    width: 100%;
}
.analysis-history {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.analysis-card {
    height: 100px;
    width: 90%;
    padding: 0;
    margin: 0;
}
@media only screen and (max-width: 1000px) {
    .card {
        width: 98%;
    }
}
</style>
