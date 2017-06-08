import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowFontOrigin("data:");
BrowserPolicy.content.allowOriginForAll( 'docs.google.com' );
BrowserPolicy.content.allowOriginForAll( 'ajax.googleapis.com' );