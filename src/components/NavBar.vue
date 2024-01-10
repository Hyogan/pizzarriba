<template>
    <header class="div">
            <p>
                <img src="../assets/images/pages/speedy_gonzales3.png" />
                <nav>
                    <a href="/">Home</a> 
                    <a href="#/about">About</a> 
                    <a href="#/non-existent-path">Broken Link</a>
                </nav>
                
            </p>
            <component :is="currentView" />
    </header>
</template>
<script>
    import Home from './Pages/Home.vue';
    import About from './Pages/About.vue';
    import NotFound from './Pages/NotFound.vue';

    const routes = {
        '/': Home,
        '/about': About
    };

    export default {
        props : ["products"],
        data() {
            return {
            currentPath: window.location.hash
            }
        },
        computed: {
            currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            });
        }
    }

</script>



<style scoped>
    header {
        background: blue;
        justify-content: center;
        align-items: center;
        position: sticky;
    }
    header a {
        font-size: 22px;
        color: white;
        text-decoration: none;
        padding: 2px 5px;
        margin: 10px 5px;
        
    }
</style>