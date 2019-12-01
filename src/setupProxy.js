const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // app.use(
    //     proxy(['/api', '/auth/google', '/api/images'], {
    //         target: 'http://localhost:8081'
    //     })
    // );
    app.use(
        proxy(['/api', '/auth/google', '/api/images'], {
            target: 'http://clouddrop.us-west-1.elasticbeanstalk.com'
        })
    );
};
