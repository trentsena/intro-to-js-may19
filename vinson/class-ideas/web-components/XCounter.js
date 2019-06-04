const template = document.createElement('template');
template.innerHTML = `
  <style>
    button, p {
      display: inline-block;
      user-select: none;
    }
  </style>
  <button aria-label="decrement">-</button>
    <p>0</p>
  <button aria-label="increment">+</button>
`;

class XCounter extends HTMLElement {
    // Attributes we care about getting values from.
    static get observedAttributes() {
        return ['value'];
    }

    set value(value) {
        this._value = value;
        this.valueElement.innerText = this._value;
        this.dispatchEvent(new CustomEvent('valueChange', { detail: this._value }));
    }

    get value() {
        return this._value;
    }

    constructor() {
        super();
        this._value = 0;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.valueElement = this.shadowRoot.querySelector('p');
        this.incrementButton = this.shadowRoot.querySelectorAll('button')[1];
        this.decrementButton = this.shadowRoot.querySelectorAll('button')[0];

        this.incrementButton
            .addEventListener('click', (e) => this.value++);

        this.decrementButton
            .addEventListener('click', (e) => this.value--);
    }

    // Lifecycle hook called when a observed attribute changes
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(typeof newValue);
        // if (attrName === 'value') {
        //     this.value = parseInt(newValue, 10);
        // }
    }
    connectedCallback() {
        console.log('connected')
    }
    disconnectedCallback() {
        console.log('removed');
    }
    adoptedCallback() {
        console.log('adopted callback')
    }
}

customElements.define('x-counter', XCounter);
