import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class StartPolymer3 extends PolymerElement {
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <style >
        input {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2C3E50;
  font-size: 13px;
}
      </style>
      <fieldset>
    <h2 class="fs-title">Create your account</h2>
    <h3 class="fs-subtitle">This is step 1</h3>
    <input type="text" name="email" placeholder="Email" /><br>
    <input type="password" name="pass" placeholder="Password" /><br>
    <input type="password" name="cpass" placeholder="Confirm Password" /><br>
    <input type="button" id="btn" name="next" class="next action-button" value="Next" onclick="bar()" />
    </fieldset>
    <template></template>
    <script>

    </script>
   `;
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
