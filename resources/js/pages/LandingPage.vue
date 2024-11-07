<script>
import LoginCard from "../components/LoginCard.vue";

export default {
    components: {
        LoginCard,
    },
    data: () => ({
        isMobile: false,
        breakpointName: "",
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
        <div class="left">
            <div class="logo-bg mb-5">
                <img
                    src="/public/assets/granny_logo.png"
                    alt="Granny App Logo"
                    class="logo"
                />
            </div>
            <div class="text-h3 text-center">Welcome to Granny</div>
            <div class="mb-5" v-if="!this.mobile"></div>
            <div class="text-p text-center" v-if="!this.isMobile">
                Quality assessment of pome fruits (i.e. apples and pears) is
                crucial for determining the optimal harvest time, and the
                progression of fruit-quality attributes during storage. This
                evaluation often includes careful visual assessments of fruit
                for apparent defects and physiological symptoms. A general best
                practice for quality assessment is to rate fruit using the same
                individual rater or group of individuals raters to reduce bias.
                However, such consistency across labs, facilities, and
                experiments is often not feasible or attainable. Visual human
                assessments are coarse-grained and lack consistent objective
                criteria.
                <br />
                Granny, is a designed for rating fruit using machine-learning
                and image-processing to address rater bias and improve
                resolution. Granny also provides ratings compatible with
                long-established standards and references, promoting continuity.
            </div>
            <div
                class="d-flex flex-column justify-center align-center"
                v-if="isMobile"
            >
                <LoginCard class="mt-10" />
            </div>
        </div>
        <div class="right" v-if="!this.isMobile">
            <LoginCard />
        </div>
    </div>
</template>

<style scoped>
.main {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    background-image: url("/public/assets/orchard.png");
    background-size: cover;
    background-position: center;
}
.left {
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(50, 99, 0, 0.8);
    color: white;
    padding: 2rem;
}
.right {
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(210, 244, 198, 0.8);
    color: black;
    padding: 2rem;
}
.text-field {
    width: 400px;
}
.logo {
    height: 200px;
    width: 200px;
}
.logo-bg {
    border-radius: 50%;
    background-color: white;
}
@media only screen and (max-width: 1000px) {
    .main {
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
    .left {
        min-height: 50vh;
        width: 100vw;
    }
}
</style>
