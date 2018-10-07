# fontawesome-icon

Polymer 3 component for displaying FontAwesome 5 icons.  

## Installation
The component is available on npm:
```
npm install fontawesome-icon
```

## Usage
The component's ES6 module needs to be imported first. The component can then be used in the template of the component.
```js
import 'fontawesome-icon';
import { PolymerElement, html } from '@polymer/polymer';

class TestComponent extends PolymerElement {
  static get template() {
    return html`
      <fontawesome-icon prefix="fas" name="user" fixed-width></fontawesome-icon>
    `;
  }

  static get is() { return 'test-component'; }
}

window.customElements.define(TestComponent.is, TestComponent);
```

The `fontawesome-icon` component has the following attributes:

| Attribute   | Description                                                                                                                                                                                |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| prefix      | The icon's prefix. Can be `fas`,`far`, or `fab`.                                                                                                                                           |
| name        | The icon's name (without `fa-` prefix).                                                                                                                                                    |
| sizing        | The icon's sizing as defined in the [FontAwesome docs](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons).    |
| fixed-width | If this boolean attribute is specified, the icon is set to the same fixed width independent of the actual icon (see [FontAwesome docs](https://fontawesome.com/how-to-use/svg-with-js)).   |

## Limitations
The component can only be used by other Polymer 3 components and can only display FontAwesome 5 free icons.
