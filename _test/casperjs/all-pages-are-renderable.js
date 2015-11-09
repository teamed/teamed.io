/*globals casper:false */
[
    '/policy.html',
    '/faq.html',
    '/sitemap.xml',
    '/index.html',
    '/css/layout.css',
    '/robots.txt'
].forEach(
    function (page) {
        casper.test.begin(
            page + ' page can be rendered',
            function (test) {
                casper.start(
                    'http://localhost:4000' + page,
                    function () {
                        test.assertHttpStatus(200);
                    }
                );
                casper.run(
                    function () {
                        test.done();
                    }
                );
            }
        );
    }
);
