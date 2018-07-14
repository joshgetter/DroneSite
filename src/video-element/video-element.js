import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
/**
 * @customElement
 * @polymer
 */
class MovieElement extends PolymerElement {
  static get template() {
    return html`
        <custom-style>
            <style is="custom-style" include="iron-flex iron-flex-factors iron-flex-alignment"></style>
        </custom-style>
        <style>
            :host {
                display: block;
            }
            #video-background{
                height: 100%;
                width: 100%;
                opacity:.6;
            }
            .container{
                height:100%;
                display: flex;
                flex-direction: column;
                position: relative;
            }
            text{
                position: absolute;
                font-size: 15vh;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        </style>
        <div class="container">
            <text>[[overlayText]]</text>
            <video autoplay="" loop="" id="video-background" muted="" plays-inline="">
                <source src="/videos/[[source]]">
            </video>
        </div>
`;
  }

  static get is() { return 'video-element'; }
  static get properties() {
      return {
          overlayText: {
              type: String
          },
          source:{
              type: String,
              observer: "test"
          }
      };
      function test(){
          console.log("test");
      }
  }
}

window.customElements.define(MovieElement.is, MovieElement);
