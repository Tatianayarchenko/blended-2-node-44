const services = require('../services/clients');
const { getById } = require('../controllers/clients');

describe('getById', () => {
  it('It should call res.json() with needed document, if it gets existed id', async () => {
    const req = {
      params: {
        id: '635e4ec9b2348c6bf7fd1068',
      },
    };

    const res = {
      json: jest.fn(),
    };

    const neededDocument = {
      name: 'Yuriy',
      surname: 'Pokgyl',
      email: 'mail2@mail.com',
      status: true,
    };

    jest.spyOn(services, 'getByIdService').mockResolvedValue(neededDocument);

    await getById(req, res);

    expect(res.json).toHaveBeenCalled();
    expect(res.json.mock.calls[0][0].client).toEqual(neededDocument);
  });
});
