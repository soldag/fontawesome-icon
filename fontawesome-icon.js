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
      /** FontAwesom spin option (fa-spin) */
      spin: Boolean,
    };
  }

  static get observers() {
    return [
      '_iconChanged(prefix, name, fixedWidth, spin)'
    ]
  }

  ready() {
    super.ready();

    let faStyles = document.createElement('style');
    faStyles.innerHTML = fontawesome.dom.css();
    this.root.appendChild(faStyles);
  }

  _iconChanged(prefix, iconName, fixedWidth, spin) {
    let iconDef = fontawesome.findIconDefinition({prefix, iconName});
    if(!iconDef) {
      iconDef = fontawesome.findIconDefinition({prefix: 'far', iconName: 'question-circle'})
    }

    let options = {classes: []};
    if(fixedWidth) {
      options.classes.push('fa-fw');
    }
    if(spin) {
      options.classes.push('fa-spin');
    }
    this.$.container.innerHTML = fontawesome.icon(iconDef, options).html;
  }
}

window.customElements.define('fontawesome-icon', FontawesomeIcon);
