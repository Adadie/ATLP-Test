import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import { encode, decode } from '../../src/utils/jwtFunctions';
import {
  User,
  Trip,
  Accomodation,
  Type,
  Request,
  Location,
  UserRole
} from '../../src/database/models';

chai.use(chaiHttp);
chai.should();

let user = {
  firstName: 'Test',
  lastName: 'Test',
  email: 'test2@test.com',
  phoneNumber: '789078834',
  password: 'Password2020'
};
let token;
let id;
const verifyToken = encode({ email: 'test2@test.com' });

describe('Host Accomodation', () => {
  before(async () => {
    await chai.request(app).post('/api/auth/signup').send(user);
    await chai.request(app).get(`/api/auth/verify/${verifyToken}`);

    const response = await chai
      .request(app)
      .post('/api/auth/login')
      .send({ email: 'test2@test.com', password: 'Password2020' });

    token = response.body.token;
  });
  it('Should get all accomodations', (done) => {
    chai
      .request(app)
      .get('/api/host/accomodations')
      .set({ 'x-auth-token': token })
      .end((err, res) => {
        if (err) done(err);
        console.log(res.body);
        res.should.have.status(200);
        done();
      });
  });
});
