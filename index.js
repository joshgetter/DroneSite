import '/src/dronesite-element/dronesite-element.js';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<title>DroneSite</title><style>
      body{
        margin:0px;
      }
    </style><dronesite-element></dronesite-element>`;

document.head.appendChild($_documentContainer.content);

/* See https://goo.gl/OOhYW5 */
/*Custom Components*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
