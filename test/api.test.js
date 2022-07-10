const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/POST getBalance', () => {
    it('it should POST a getBalance', (done) => {
        const addresses = [
            "0x3ad166A56aed667b1332d16c617d17929Dc7AF93",
            "0x4e4a47cAC6A28A62dcC20990ed2cdA9BC659469F",
            "0xb66487e15e60134f6b39937d3f122e3c472f9e20",
            "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "sefwmfwope",
            "0x930fb1A219CE5AC4A5078826a1be0F8aDfe98c19",
            "0x930fb1A219CE5AC4A5078t26a1be0F8aDfe98c19"
        ];
        chai.request(server)
            .post('/api/getBalance')
            .send(addresses)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.forEach(address => {
                    address.should.be.a('object');
                    address.should.have.property('address');
                });
                done();
            });
    }) ;
});