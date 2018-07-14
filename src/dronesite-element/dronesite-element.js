import { PolymerElement, html } from '@polymer/polymer';
import '/node_modules/@polymer/app-layout/app-drawer/app-drawer.js';
import '/node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '/src/video-element/video-element.js';
/**
 * @customElement
 * @polymer
 */
class DroneSiteElement extends PolymerElement {
  static get template() {
    return html`
    <style>
      app-toolbar {
        /* Toolbar is the main header, so give it some color */
        background-color: #1E88E5;
        font-family: 'Roboto', Helvetica, sans-serif;
        color: white;
        --app-toolbar-font-size: 24px;
      }
    </style>
    <app-drawer-layout drawer-width="288px" responsive-width="1280px" narrow="{{narrow}}">

      <!-- nav panel -->
      <app-drawer id="drawer" slot="drawer">
        <app-header-layout has-scrolling-region="">
          <app-header fixed="" slot="header">
            <!-- top toolbar -->
            <app-toolbar></app-toolbar>

            <!-- bottom toolbar -->
            <app-toolbar class="title-toolbar nav-title-toolbar">
              <div class="title">Drone Site</div>
            </app-toolbar>

          </app-header>
        </app-header-layout>
      </app-drawer>

      <!-- main panel -->
      <app-header-layout>

        <app-header fixed="" effects="waterfall" class="main-header" slot="header">

          <!-- top toolbar -->
          <app-toolbar>
            <!-- menu button -->
            <paper-icon-button drawer-toggle="" icon="app:menu" hidden\$="[[_shouldHideMenuButton(pageData.page, narrow)]]">
            </paper-icon-button>

          </app-toolbar>

          <!-- bottom toolbar -->
          <app-toolbar class="title-toolbar main-title-toolbar">
            <div class="title">DroneSite</div>
          </app-toolbar>

        </app-header>

      </app-header-layout>

    </app-drawer-layout>

    <video-element source="GrandHaven.mov" overlay-text="Grand Haven"></video-element>
    <video-element source="GrandRapids.mov" overlay-text="Grand Rapids"></video-element>
`;
  }

  static get is() { return 'dronesite-element'; }
  static get properties() {
      return {
      };
  }
}

window.customElements.define(DroneSiteElement.is, DroneSiteElement);
