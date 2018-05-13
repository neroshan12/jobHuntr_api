const chai = require('chai')
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../server')

describe('GET api/v1/jobs', () => {
    it('should return 200 OK', (done) => {
        chai.request(server)
        .get(`/api/v1/jobs`)
        .end((err, res) => {
            should.not.exist(err)
            console.log(err)
            res.status.should.equal(200)
            done();
        })
    });
});
