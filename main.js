<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.18.0/cdn/shoelace-autoloader.js"></script>
gsap.registerPlugin(ScrollTrigger) 
gsap.to('.box', {
    scrollTrigger: '.about',
    x: 500
});
