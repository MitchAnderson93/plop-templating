import { LitElement } from "lit";
import styles from "./qld_element.scss";

export default class QldElement extends LitElement {
    static get styles() {
        return styles;
    }
    emit(name, options) {
        const event = new CustomEvent(name, {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: {},
            ...options
        });
        this.dispatchEvent(event);
        return event;
    }
}
