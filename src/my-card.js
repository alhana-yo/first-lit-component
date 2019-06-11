import { LitElement, html, css } from "lit-element";

class MyCard extends LitElement {
  static get styles() {
    return css`
      @font-face {
        font-family: "Open Sans", sans-serif;
        src: (https://fonts.googleapis.com/css?family=Open+Sans&display=swap);
      }

      :host {
        --card-width: 210px;
        --card-height: 16rem;
        --card-background-color: #ffffff;
        --card-border: #ff7900 solid 5px;
        --card-margin: 1.5rem 0.7rem;
        --card-padding: 1.5rem 0;
        --card-title-padding-bottom: 0.75rem;
        display: block;
      }
      .directory__wrapper--card {
        width: var(--card-width);
        height: var(--card-height);
        border: var(--card-border);
        background-color: var(--card-background-color);
        margin: var(--card-margin);
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
        color: #212121;
        padding-bottom: var(--card-title-padding-bottom);
        font-size: 24px;
      }

      .card__description {
        color: #575756;
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

  render() {
    return html`
      <article class="directory__wrapper--card">
        <a
          class="main__directory--link"
          target="blank"
          href=" slack.html
        "
        >
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
