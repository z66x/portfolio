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
        width: min(100%, 1024px);
        top: 0;
        height: 3rem;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--secondary-color);
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