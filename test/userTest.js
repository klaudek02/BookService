'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /user', function() {
    this.timeout(5000); // How long to wait for a response (ms)

    before(function() {

    });

    after(function() {

    });

    // GET - List all books
    it('should return all user', function() {
        return chai.request(app)
            .get('/user/readAll')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('Array');
            });
    });

    // GET - Invalid path
    it('should return Not Found', function() {
        return chai.request(app)
            .get('/INVALID_PATH')
            .catch(function(err) {
                expect(err).to.have.status(404);
            });
    });
    // POST - Bad Request
    it('should return Bad Request', function() {
        return chai.request(app)
            .post('/user/create')
            .type('form')
            .send({
            })
            .then(function(err) {
                expect(err).to.have.status(500);
            });
    });
});