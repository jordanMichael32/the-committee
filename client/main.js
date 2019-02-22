import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from './../imports/ui/App';

Meteor.startup(() => {
    ReactDom.render(<App/>, document.getElementById('app'));
});
