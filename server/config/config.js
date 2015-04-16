/*jslint node:true*/
module.exports = {
    deployment: {
        port: 3333,
        repoUrl: "https://github.com/theotheu/cria-seed",
        email: "theo.theunissen+cria@gmail.com"
    },
    development: {
        db: 'mongodb://localhost/books-dev',    // change books with your database
        port: 3000,                             // change with your port number
        debug: true                             // set debug to true|false
    },
    test: {
        db: 'mongodb://localhost/books-tst',    // change books with your database
        port: 3001,                             // change with your port number
        debug: true                             // set debug to true|false
    },
    acceptance: {
        db: 'mongodb://localhost/books-acc',    // change books with your database
        port: 3002,                             // change with your port number
        debug: true                             // set debug to true|false
    },
    production: {}
};
