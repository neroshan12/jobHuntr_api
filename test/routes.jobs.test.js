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
                res.status.should.equal(200)
                done();
            })
    });
    it('should return all jobs', () => {
        chai.request(server)
            .get(`/api/v1/jobs`)
            .end((err, res) => {
                should.not.exist(err)
                res.body.data[0].should.include.keys(
                    'business', 'role', 'closing_date', 'location', 'link'
                )
                res.status.should.equal(200)
                done();
            })
    })
});
