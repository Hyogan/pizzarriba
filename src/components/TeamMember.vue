<template>
    <div class="employee-infos">
        <img :src=teamMember.name alt="">
        <div class="teamMemberInfos">
            <h2 class="name">{{teamMember.name }}</h2>
            <p class="post">{{ teamMember.post }}</p>
            <h2 class="description">{{teamMember.description }}</h2>
        </div>
    </div>
</template>


<script>
    export default {
        props : ["teamMember"]
    }
</script>