customElements.define('vf-spin-in', (function () {
    const template = document.createElement('template');
    template.innerHTML = `
<style>
    :host{ display: inline-block; }
    
</style>
<slot/>
`;

    return class VfSpinIn extends HTMLElement {
        constructor(){
            super();
            console.log('logo');
            this.attachShadow({mode: 'open', delegatesFocus: true});
        }
        connectedCallback() {
            this.classList.add('fix');
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.animate([
                {transform: 'scale(0) rotate(0deg)'},
                {transform: 'scale(2) rotate(1080deg)'},
                {transform: 'scale(1) rotate(2160deg)'},
            ], {
                duration: 1000,
                easing: 'cubic-bezier(.88,0.2,0.6, 1)',
                fill: 'forwards'
            });
        }
    }
})());
