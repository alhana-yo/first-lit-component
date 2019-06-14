import { LitElement, html, css } from "lit-element";
import "fa-icons";

class MyAlert extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      message: { type: String },
      icon: { type: String }
    };
  }

  constructor() {
    super();
    // this.icon = "fas fa-smile-beam";
    //Forma 1 de añadir el event listener
    this.addEventListener("click", this.handleClick);
  }

  updated() {
    console.log("updated icon", this.icon);
    console.log("updated message", this.message);
  }

  render() {
    console.log("render icon", this.icon);
    console.log("render message", this.message);
    return html`
      <div class="wrapper">
        <fa-icon class="${this.icon}" color="#ff7900" size="5.5rem"></fa-icon>
        <p class="message">${this.message}</p>
        <!-- Forma 2 de añadir el event listener -->
        <!-- <p class="message" @click=${this.handleClick}>${this
          .message}</p> -->
      </div>
    `;
  }
}

customElements.define("my-alert", MyAlert);
