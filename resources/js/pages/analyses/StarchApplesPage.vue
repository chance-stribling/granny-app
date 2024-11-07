<script>
import TopBar from "../../components/TopBar.vue";
import BackButton from "../../components/BackButton.vue";
export default {
    components: {
        TopBar,
        BackButton
    },
    data: () => ({
        tab: null,
        group: null,
        show: false,
        isMobile: false,
        analyses: [
            {
                id: "000001",
                user: "Mike Jones",
                timeStamp: "10/02/23, 9:14 p.m.",
                analysis_type: "Starch for Pears",
                source: "require('../../../../public/assets/apples-dyed.png')",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
            {
                id: "000002",
                user: "Mike Jones",
                analysis_type: "Starch for Apples",
                timeStamp: "10/02/23, 9:14 p.m.",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
            {
                id: "000003",
                user: "Mike Jones",
                analysis_type: "Starch for Pears",
                timeStamp: "10/02/23, 9:14 p.m.",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
            {
                id: "000004",
                user: "Mike Jones",
                analysis_type: "Starch for Pears",
                timeStamp: "10/02/23, 9:14 p.m.",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
            {
                id: "000005",
                user: "Mike Jones",
                analysis_type: "Superficial Scald for Apples",
                timeStamp: "10/02/23, 9:14 p.m.",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
            {
                id: "000006",
                user: "Mike Jones",
                analysis_type: "Starch for Apples",
                timeStamp: "10/02/23, 9:14 p.m.",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
            {
                id: "000007",
                user: "Mike Jones",
                analysis_type: "Blush for Pears",
                timeStamp: "10/02/23, 9:14 p.m.",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
            {
                id: "000008",
                user: "Mike Jones",
                analysis_type: "Starch for Apples",
                started_at: "10/02/23, 9:14 p.m.",
                finished_at: "10/02/23, 10:15 p.m.",
            },
        ],
    }),
    created() {
        window.addEventListener("resize", this.mobileCheck);
    },
    destroyed() {
        window.removeEventListener("resize", this.mobileCheck);
    },
    mounted() {
        this.mobileCheck();
    },
    methods: {
        mobileCheck() {
            if (window.innerWidth <= 1000) {
                this.isMobile = true;
            } else if (window.innerWidth > 1000) {
                this.isMobile = false;
            }
        },
    },
};
</script>

<template>
    <div class="main">
        <BackButton/>
        <TopBar />
        <v-card color="primary" class="card pa-2">
            <div class="text-h5 mb-5">Analysis History</div>
            <v-card class="inner-card pa-2">
                <v-card
                    v-for="analysis in analyses"
                    class="history-card mb-2 bg-secondary"
                    @click="this.$router.push('/summary')"
                >
                    <div class="analysis-data">
                        <div class="d-flex flex-column w-75">
                            <div class="text-h6 font-weight-bold">
                                Analysis: {{ analysis.id }}
                            </div>
                            <div class="text-p">
                                Submitted by {{ analysis.user }}
                            </div>
                        </div>
                        <div
                            class="d-flex flex-column justify-center align-center w-25"
                        >
                            <img
                                class="image"
                                src="/public/assets/placeholder.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </v-card>
            </v-card>
        </v-card>
        <v-card color="primary" class="card pa-2">
            <div class="text-h5 mb-5">New Analysis</div>
            <v-btn
                class="btn mb-2"
                prepend-icon="mdi-camera"
                v-if="this.isMobile"
                >Take a Photo</v-btn
            >
            <v-btn
                class="btn mb-2"
                prepend-icon="mdi-upload"
                @click="this.$router.push('/segmentation')"
                >Select Photo from Device</v-btn
            >
        </v-card>
    </div>
</template>

<style scoped>
.main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
    background-color: #d2f4c6;
}
.analysis-data {
    padding: 1rem;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.image {
    border-color: black;
    border-style: solid;
    border-width: 1px;
}
.history-card {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.inner-card {
    height: 400px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
.card {
    min-height: 300px;
    height: fit-content;
    width: 500px;
    margin-top: 1rem;
    max-height: 500px;
}
.logo {
    height: auto;
    width: 150px;
}
.analysis-history {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.analysis {
    min-height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.btn {
    height: 60px;
    width: 100%;
}
@media only screen and (max-width: 1000px) {
    .card {
        width: 98%;
    }
}
</style>
