


customElements.define('vf-border-warn', (function () {
    const template = document.createElement('template');
    template.innerHTML = `
<style>
    :host{ display: inline-block; }
</style>
<slot/>
`;
   return class VfBorderWarn extends HTMLElement {
        constructor(){
            super();
            console.log('logo');
            this.attachShadow({mode: 'open'});
        }
        connectedCallback() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.animate([
                {border: '10px solid red'},
                {border: '10px solid blue'},
            ], {
                duration: 1000,
                easing: 'cubic-bezier(.88,0.2,0.6, 1)',
                fill: 'forwards'
            });
        }
    }
})());