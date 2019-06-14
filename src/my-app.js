import { LitElement, html, css } from "lit-element";
import "./my-card";
import "./my-alert";

class MyApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      clicked: { type: String },
      iconFace: { type: String }
    };
  }

  constructor() {
    super();
    this.clicked = "No he sido pulsado";
    this.iconFace = "fas fa-sad-cry";
  }

  handleClick(ev) {
    this.clicked = "He sido pulsado";
    this.iconFace = "fas fa-smile-beam";
    console.log(this.iconFace);
  }

  handleGato(ev) {
    alert(ev.detail + " Miau");
  }

  render() {
    return html`
      <my-card
        title="Título1"
        description="Descripción 1"
        icon="fab fa-slack"
        url="https://www.kairosds.com/"
        @click=${this.handleClick}
        @gato-fired=${this.handleGato}
      ></my-card>
      <my-alert .message=${this.clicked} .icon=${this.iconFace}></my-alert>
    `;
  }
}

customElements.define("my-app", MyApp);
