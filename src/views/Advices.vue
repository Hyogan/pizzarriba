<template>
    <section class="advices">
        <h1 class="section-title">🍕What people think of us</h1>
        <div class="advice-list">
            <div class="team-block"
                v-for="(advice,index) in advices_list" :key="index"
            >
                <Advice :advice="advice"></Advice>
            </div>
        </div>
    </section>
</template>



<script>
    import Advice from "@/components/Advice.vue";
    import lolaPic from "@/assets/images/team_ad/lolaPic.png";
    import porkyPic from "@/assets/images/team_ad/porkyPic.png";
    import elmerPic from "@/assets/images/team_ad/elmerPic.png";
    // import porkyPic from ""
    export default{

        data() {
            return {
                advices_list : [
                        {
                        name : "Lola Bunny",
                        job : "Hobbies and Dumb",
                        message : "i like to go there and eat a slice of pizza and to see bugs",
                        pic : lolaPic
                    },
                    {
                        name : "Porky pig",
                        job : "Vagabond",
                        message : "i like to go there and eat; in french : j'aime bien ",
                        pic : porkyPic
                    },
                    {
                        name : "Elmer doe",
                        job : "Hunter",
                        message : "i like to go there, hoping i will finally kill bugs bunny, i like rabbit's meat ",
                        pic : elmerPic
                    }
                ]
            }
        },
        components : {
            Advice : Advice
        }
        
    }
</script>


<style>
    /* .team {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .employee-list {
        width : 100%;
        padding: 50px;
    }
    .team-block{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
    } */
h1.section-title {
    color: white;
    font-size: 45px;
}
.advices {
    display: flex;
    flex-direction: column;
    /* background: white; */
    justify-content: center;
    align-items: center;
}

.advice-list{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 2px;
    width: 100%;
}
@media screen and (max-width : 806px){
    .advice-list {
        flex-wrap : wrap;
    }
    .advice-infos{
        min-width: 225px;
    }
} 


</style>