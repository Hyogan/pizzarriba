<template>
    <section class="team">
        <h1>Here is our team</h1>
        <div class="employee-list">
            <div
                v-for="(teamMember,index) in teamMembers" :key="index"
            >
                <TeamMember :teamMember="teamMember"></TeamMember>
            </div>
        </div>
    </section>
</template>


<script>
import TeamMember from '@/components/TeamMember.vue';

    export default{
    data() {
        return {
            teamMembers: [
                {
                    name: "Bugs Bunny",
                    description: "the best waiter",
                    post: "waiter"
                },
                {
                    name: "Daffy Duck",
                    description: "the best deliver",
                    post: "deliver"
                },
            ]
        };
    },
    components: { TeamMember }
}
</script>