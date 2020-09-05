import { LitElement, css, html, customElement } from 'lit-element';

@customElement('card-web')
export class Card extends LitElement {

    static get styles() {
        return css`
        .card {
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
            padding: 5%;
            box-shadow: 2px 2px 7px #888888;
        }
        `;
    }

    render() {
        return html`
        <div class="card">
            <slot></slot>
        <div>
        `;
    }
}