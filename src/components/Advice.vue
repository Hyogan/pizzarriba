<template>
    <div 
        class="advice-infos">
        <img :src=advice.pic alt="">
        <div class="advices">
            <h2 class="name">🍕{{advice.name }}</h2>
            <p class="job">🍕{{ advice.job }}</p>
            <p class="message">"{{advice.message }}"</p>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['advice']
    }
</script>

<style>
    .advice-infos{
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
    .advice-infos:hover {
        transition: 1s;
        box-shadow: rgb(151, 115, 68) 0px 4px 12px;
        box-shadow: rgb(151, 115, 68) 0px 50px 120px -20px, rgba(204, 145, 69, 0.7) 0px 30px 70px -30px;
        transform: translate(40px,-40px);
        /* transform: tra; */
        /* transform: translateX(-40px); */
    }


    .advice-infos .name {
        font-size: 30px;
        font-weight: 900;
        color: rgb(151, 115, 68);
        color: orange;
        font-weight: bolder;
        font-family: 'Courier New', Courier, monospace;
    }
    .advice-infos .job {
        font-size: 20px;
        font-weight: bold;
        color: rgb(43, 34, 22);
        font-family: 'Courier New', Courier, monospace;
    }
    .advice-infos .message {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        text-align: center;
    }
    .advice-infos img {
        width: 200px;
        height: 200px;
        filter : drop-shadow(10px,10px,50px rgb(0, 67, 143));
        border-radius: 50%;
        border: 2px solid orange;
    }
    @media screen and (max-width : 580px){
    .advice-infos{
        width: 250px;
    }
    }     



/* 
.section-content{
    width: calc(100% - 45px);
    background: url("../../public/images/app/phone_logo.png");
} */





</style>



/* 

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const sidebarbtn = document.querySelector("#menu-btn-side");
const sidebar = document.querySelector(".sidebar1");




function toggleMenu(){
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
}

function toggleSidebar(){
    sidebar.classList.toggle("-translate-x-full");
    sidebar.classList.toggle("translate-x-0");
    document.querySelector("#dark_overlay").classList.toggle('hidden');
    document.querySelector("#dark_overlay").classList.toggle('block');
}



sidebarbtn.addEventListener("click",()=>{
    toggleSidebar();
})

btn.addEventListener("click", ()=>{
    toggleMenu();
}); */