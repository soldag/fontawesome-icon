import fontawesome from '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-brands';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `fontawesome-icon`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FontawesomeIcon extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div id="container"></div>
    `;
  }
  static get properties() {
    return {
      /** FontAwesome icon prefix */
      prefix: String,
      /** FontAwesome icon name */
      name: String,
      /** FontAwesome fixed width parameter (fa-fw) */
      fixedWidth: Boolean,
    };
  }

  static get observers() {
    return [
      '_iconChanged(prefix, name, fixedWidth)'
    ]
  }

  ready() {
    super.ready();
    this.root.querySelector('style').innerHTML += fontawesome.dom.css();
  }

  _iconChanged(prefix, iconName, fixedWidth) {
    let iconDef = fontawesome.findIconDefinition({prefix, iconName});
    if(!iconDef) {
      iconDef = fontawesome.findIconDefinition({prefix: 'far', iconName: 'question-circle'})
    }

    let options = {};
    if(fixedWidth) {
      options.classes = ['fa-fw'];
    }
    this.$.container.innerHTML = fontawesome.icon(iconDef, options).html;
  }
}

window.customElements.define('fontawesome-icon', FontawesomeIcon);
