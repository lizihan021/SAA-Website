import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowFontOrigin("data:");
BrowserPolicy.content.allowOriginForAll( 'docs.google.com' );
BrowserPolicy.content.allowOriginForAll( 'ajax.googleapis.com' );
BrowserPolicy.content.allowOriginForAll( 'gallery.mailchimp.com' );
BrowserPolicy.content.allowOriginForAll( 'cdn-images.mailchimp.com' );
BrowserPolicy.content.allowOriginForAll( 'fonts.googleapis.com' );