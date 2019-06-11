import { LitElement, html, css } from "lit-element";

class MyCard extends LitElement {
  static get styles() {
    return css`
      :host {
        --card-background-color: #ffffff;
        --card-border: #ff7900 solid 5px;
        display: block;
      }
      .directory__wrapper--card {
        width: 210px;
        height: 16rem;
        //border: #ff7900 solid 5px;
        border: --card-border;
        //background-color: #ffffff;
        background-color: var(--card-background-color);
        margin: 1.5rem 0.7rem;
        padding: 1.5rem 0;
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
        padding-bottom: 0.75rem;
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
      description: { type: String }
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
              <i class="fab fa-slack"></i>
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
