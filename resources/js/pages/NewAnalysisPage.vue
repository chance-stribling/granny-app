<script>
import TopBar from "../components/TopBar.vue";
import BackButton from "../components/BackButton.vue";
export default {
    components: {
        TopBar,
        BackButton,
    },
    data: () => ({
        tab: null,
        group: null,
        show: false,
        isMobile: false,
        isSelecting: false,
        selectedFile: null,
        url: null,
        a1_model: "",
        custom_id: "",
        analysis: [],
        models: [
            {
                title: "Pome Fruit - Apple",
                value: "pome_fruit-v1_0",
            },
        ],
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
        handleFileImport() {
            this.isSelecting = true;

            // After obtaining the focus when closing the FilePicker, return the button state to normal
            window.addEventListener(
                "focus",
                () => {
                    this.isSelecting = false;
                },
                { once: true },
            );

            // Trigger click on the FileInput
            this.$refs.uploader.click();
        },
        onFileChanged(e) {
            this.selectedFile = e.target.files[0];
            this.url = URL.createObjectURL(this.selectedFile);
            console.log(this.selectedFile);
            // Do whatever you need with the file, liek reading it with FileReader
        },
        async uploadImage() {
            var formData = new FormData();
            formData.append("image", this.selectedFile);
            formData.append("custom_id", this.custom_id);
            formData.append("a1_model", this.a1_model);
            console.log(formData);
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/v1/newAnalysis",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    },
                );
                this.analysis = response.data;
                console.log("Image uploaded successfully:", this.analysis.id);
                // this.$router.push('/segmentation/'+this.analysis.id);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        },
        getImage() {
            axios
                .get("http://127.0.0.1:8001/api/v1/getAnalysis", {
                    id: "",
                })
                .then((response) => {
                    this.lastMatchCreated = response.data;
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>

<template>
    <div class="main">
        <BackButton />
        <TopBar />
        <v-card color="primary" class="card pa-2">
            <div class="text-h5 mb-5">New Analysis</div>
            <div class="d-flex flex-column align-center justify-center">
                <img v-if="url" :src="url" class="img" />
                <div class="d-flex justify-evenly">
                    <v-btn
                        color="secondary"
                        :loading="isSelecting"
                        @click="this.handleFileImport()"
                    >
                        Upload File
                    </v-btn>
                    <input
                        ref="uploader"
                        class="d-none"
                        type="file"
                        @change="onFileChanged"
                    />
                </div>
            </div>
            <v-label>Segmentation Model</v-label>
            <v-select
                v-model="this.a1_model"
                :items="models"
                bg-color="white"
            ></v-select>
            <v-label>Lot Number or Sample ID</v-label>
            <v-text-field
                bg-color="white"
                class="text-field"
                v-model="this.custom_id"
            ></v-text-field>
            <v-btn color="secondary" @click="this.uploadImage()">
                        Submit for Segmentation
                    </v-btn>
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
.img {
    height: 500px;
    width: auto;
}
@media only screen and (max-width: 1000px) {
    .card {
        width: 98%;
    }
}
</style>
