import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('custom-input')
class CustomInput extends LitElement {
    @property() type: string = "text";
    @property() placeholder: string = "default";

    static get styles() {
        return css`
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
        }
        `;
    }
    render() {
        return html`
            <input type="${this.type}" placeholder="${this.placeholder}"/>
    `;
    }
}