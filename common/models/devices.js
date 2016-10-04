'use strict';

module.exports = function(Devices) {

    Devices.remoteMethod (
        'image',
        {
            description : 'Returns the image stored in Object Storage.',
            http: {path: '/image/:container/:file', verb: 'get'},
            accepts: [{arg: 'container', type: 'string'}, {arg: 'file', type: 'string'}],
            returns: [{arg: 'image', type: 'string'}],
        }
    );


};
