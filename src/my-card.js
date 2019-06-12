import { LitElement, html, css } from "lit-element";

class MyCard extends LitElement {
  static get styles() {
    return css`
      :host {
        --card-width: 210px;
        --card-height: 16rem;
        --card-background-color: #ffffff;
        --card-border: #ff7900 solid 5px;
        --card-margin: 1.5rem 0.7rem;
        --card-padding: 1.5rem 0;
        --card-title-padding-bottom: 0.75rem;
        --card-title-size: 24px;
        --card-title-color: #212121;
        --card-description-size: 16px;
        --card-description-color: #575756;
        font-family: "Open Sans", sans-serif;
        display: block;
      }
      .directory__wrapper--card {
        width: var(--card-width);
        height: var(--card-height);
        border: var(--card-border);
        background-color: var(--card-background-color);
        margin: var(--card-margin, 1.5rem 0.7rem);
        padding: var(--card-padding);
        text-align: center;
        border-radius: 1rem;
      }

      .main__directory--link {
        text-decoration: none;
      }

      .card__wrapper {
        width: 150px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .card__icon {
        font-size: 5.5rem;
        padding: 0 0 1rem;
        color: #ff7900;
      }

      .card__title {
        color: var(--card-title-color);
        padding-bottom: var(--card-title-padding-bottom);
        font-size: var(--card-title-size);
      }

      .card__description {
        font-size: var(--card-description-size);
        color: var(--card-description-color);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      icon: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "Titulo de la tarjeta";
    this.description = "Descripción de la tarjeta";
    // this.icon = "fas fa-cat";
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <article class="directory__wrapper--card">
        <a class="main__directory--link" target="blank" href=" slack.html">
          <div class="card__wrapper">
            <div class="card__icon">
              <i class="${this.icon}"></i>
            </div>
            <h3 class="card__title">
              ${this.title}
            </h3>
            <p class="card__description">
              ${this.description}
            </p>
          </div>
        </a>
      </article>
    `;
  }
}

customElements.define("my-card", MyCard);
