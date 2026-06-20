<header>
    <nav id="navbar">
        <ul id="nav-links">
            <li><a href="#bio">bio</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#connect">connect</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        position: fixed;
        z-index: 66;
        width: min(100%, 1024px);
        top: 0;
        height: 3rem;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(
            to right, 
            transparent, 
            var(--secondary-color) 10%, 
            var(--secondary-color) 90%, 
            transparent
        ) 1;
        display: flex;
        align-items: center;
    }
    #navbar ul{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;
    }
    #navbar ul li {
        list-style: none;
    }
</style>