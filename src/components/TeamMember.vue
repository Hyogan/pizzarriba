<template>
    <div 
        class="employee-infos" 
        :class="{'reverse' : teamMember.id == 2}"
        >
        <img :src=teamMember.pic alt="">
        <div class="teamMemberInfos">
            <h2 class="name">🍕{{teamMember.name }}</h2>
            <p class="post">🍕{{ teamMember.post }}</p>
            <p class="description">{{teamMember.description }}</p>
        </div>
    </div>
</template>


<script>
    export default {
        props : ["teamMember"]
    }
</script>

<style>
    .employee-infos{
        display: flex;
        min-width: 240px;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 96, 185, 0.3) 0px 4px 12px;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        padding: 15px 15px;
        transition: all .7s;
        background: white;
        flex-direction: column;
    }
    .employee-infos:hover {
        transition: 1s;
        box-shadow: rgb(151, 115, 68) 0px 4px 12px;
        box-shadow: rgb(151, 115, 68) 0px 50px 120px -20px, rgba(204, 145, 69, 0.7) 0px 30px 70px -30px;
        transform: translate(40px,-40px);
        /* transform: tra; */
        /* transform: translateX(-40px); */
    }


    .employee-infos .name {
        font-size: 30px;
        font-weight: 900;
        color: rgb(151, 115, 68);
        color: orange;
        font-weight: bolder;
        font-family: 'Courier New', Courier, monospace;
    }
    .employee-infos .post {
        font-size: 20px;
        font-weight: bold;
        color: rgb(43, 34, 22);
        font-family: 'Courier New', Courier, monospace;
    }
    .employee-infos .description {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
    .employee-infos img {
        width: 200px;
        filter : drop-shadow(10px,10px,50px rgb(0, 67, 143));
    }
    @media screen and (max-width : 580px){
    .employee-infos{
        width: 250px;
    }
    }     


</style>