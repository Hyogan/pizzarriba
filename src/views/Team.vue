<template>
    <section class="team">
        <h1 class="section-title">🍕Meet our team</h1>
        <div class="employee-list">
            <div class="team-block"
                v-for="(teamMember,index) in teamMembers" :key="index"
            >
                <TeamMember :teamMember="teamMember"></TeamMember>
            </div>
        </div>
    </section>
</template>


<script>
import TeamMember from '@/components/TeamMember.vue';

import bugsPic from "@/assets/images/team_ad/bugsPic.png";
import daffyPic from "@/assets/images/team_ad/daffyPic.png";
import speedyPic from "@/assets/images/team_ad/speedyPic.png";

    export default{
    data() {
        return {
            teamMembers: [
                {
                    id: 1,
                    name: "Bugs Bunny",
                    description: "the best waiter",
                    post: "waiter",
                    pic : bugsPic
                },
                {
                    id : 2,
                    name: "Daffy Duck",
                    description: "the best deliver",
                    post: "deliver",
                    pic : daffyPic
                },
                {
                    id  : 3,
                    name: "Speedy Gonzales",
                    description: "the best leader",
                    post: "chef and leader",
                    pic : speedyPic
                },
            ]
        };
    },
    components: { TeamMember }
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
.team {
    display: flex;
    flex-direction: column;
    /* background: white; */
    justify-content: center;
    align-items: center;
}

.employee-list{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 2px;
    width: 100%;
}
@media screen and (max-width : 806px){
    .employee-list {
        flex-wrap : wrap;
    }
    .employee-infos{
        min-width: 225px;
    }
} 


</style>