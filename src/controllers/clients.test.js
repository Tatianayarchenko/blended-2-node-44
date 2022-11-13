const services = require("../services/clients");
const { getById } = require("../controllers/clients");

describe("getById", () => {
  let mockGetByIdService;

  beforeAll(() => {
    mockGetByIdService = jest.spyOn(services, "getByIdService");
  });

  afterEach(() => {
    mockGetByIdService.mockReset();
  });

  it("It should call res.json() with needed document, if it gets existed id", async () => {
    const req = {
      params: {
        id: "635e4ec9b2348c6bf7fd1068",
      },
    };

    const res = {
      json: jest.fn(),
    };

    const neededDocument = {
      name: "Yuriy",
      surname: "Pokgyl",
      email: "mail2@mail.com",
      status: true,
    };

    mockGetByIdService.mockResolvedValue(neededDocument);

    await getById(req, res);

    expect(res.json).toHaveBeenCalled();
    expect(res.json.mock.calls[0][0].client).toEqual(neededDocument);
  });

  it('it should call res with status 404 and json "Not found", if it gets not existed id', async () => {
    const req = {
      params: {
        id: "635e4ec9b2348c6bf7fd1065",
      },
    };

    const json = jest.fn();

    const res = {
      status: jest.fn(() => ({ json })),
    };

    mockGetByIdService.mockResolvedValue(null);

    await getById(req, res);

    expect(res.status).toHaveBeenCalled();
    expect(res.status.mock.calls[0][0]).toEqual(404);
    expect(json).toHaveBeenCalled();
    expect(json.mock.calls[0][0]).toEqual({ message: "Not found" });
  });
});
