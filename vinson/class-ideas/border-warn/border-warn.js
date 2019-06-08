


customElements.define('vf-border-warn', (function () {
    const template = document.createElement('template');
    template.innerHTML = `
<style>
    :host{ display: inline-block; }
</style>
<input type="text">
<input type="text">
<slot/>
`;
   return class VfBorderWarn extends HTMLElement {
        constructor(){
            super();
            console.log('logo');
            this.attachShadow({mode: 'open', delegatesFocus: true});
        }
        connectedCallback() {
            console.log('call back')
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.animate([
                {border: '10px solid red'},
                {border: '10px solid blue'},
            ], {
                duration: 1000,
                easing: 'cubic-bezier(.88,0.2,0.6, 1)',
                fill: 'forwards'
            });
            const self = this;
          setTimeout(function () {
              var checkEvent = new CustomEvent("check", {bubbles:true,cancelable:true, composed: true});
              if (self.dispatchEvent(checkEvent)) {
                  // Do default operation here
                  console.log('Performing default operation');
              }
          }, 3000);
        }
    }
})());
