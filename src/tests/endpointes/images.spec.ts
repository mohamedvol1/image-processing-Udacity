import supertest from 'supertest';
import { app } from '../../server';

const request = supertest(app);

describe('test images route endpoints', () => {
  it('Get images endpoint', async () => {
    const res = await request.get('/images?filename=test&width=200&length=200');
    expect(res.status).toBe(200);
  });
});
