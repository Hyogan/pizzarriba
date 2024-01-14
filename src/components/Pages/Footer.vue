<template>
    <footer>
        <div class="footer">
            <img src="../../assets/images/pages/pizzariba-logo.jpg" />
            <div class="socials">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
            </div>

            <ul class="usefull-links">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About us</router-link></li>
                <li><router-link to="/products">Products</router-link></li>
                <li><router-link to="/team">Team</router-link></li>
                <li><router-link to="/card">Card</router-link></li>
                <li><router-link to="/advices">Advices</router-link></li>
            </ul>

            <div class="copyright">
                Hyogan Copyright © 2023 - All rights reserved || Designed By: Herold
            </div>
    </div>
    </footer>
</template>




<script>
    export default{
        
    }
</script>

<style scoped>
    footer {
        width: 100%;
        min-height: 200px;
        background: linear-gradient(orange,orangered);
        /* border-radius: 45% 45% 0 0 ; */
        /* position: absolute; */
        flex-wrap: wrap;
    }
    footer img {
        width: 200px;
    }

    .footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:30px 0px;
        font-weight: bold;
        font-size: 22px;
        text-align:center;
        font-family: 'Play', sans-serif;
        flex-wrap: wrap;
    }

    .footer .usefull-links,
    .footer .socials {   
        display: flex;
        justify-content: center;
        align-items: center;
        width : 100%;
        padding:0.6% 0%;
        color:white;
        font-size:0.8em;
    }

    .usefull-links {
        display: flex;
        justify-content: center;
        align-items: center;
        width : 100%;
        flex-wrap: wrap;
    }

    .footer .socials a {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: rgb(55, 62, 70);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        text-decoration: none;
        transition: .7s;
    }
    .footer .socials a:hover {
        background: black;
    }
    .footer  ul li, .footer .socials a{
        margin: 0 20px;
        color:white;
        padding: 10px 15px;
    }
    .footer .socials a {
        margin: 1%;
    }
 
    .footer ul li:hover {
        background: blue;
    }
    .footer ul li a {
        display: flex;
        color : white;
        text-decoration: none;
    }

    .footer .copyright {
        text-align: center;
    }


    @media (max-width:720px){
    .footer{
        text-align:left;
        padding:5%;
    }

    .footer .usefull-links ul li{
        
    }
    .footer .socials a i{
        margin:0% 1px;
    }
}
</style>