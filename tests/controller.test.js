const { cadex } = require('../app/services/cadex');

jest.mock('../app/services/cadex', () => {
    const originalModule = jest.requireActual('../app/services/cadex');

    return {
        ...originalModule,
        cadex: {
            ...originalModule.cadex,
            generate: jest.fn(() => ({
                glue: () => 'test',
            })),
        },
    };
});

const mockResponse = {
    json: jest.fn((data) => data),
};

let result;

describe('Get Cadex', () => {
    beforeAll(() => {
        result = controller.getCadex('Doit retourner tout', mockResponse);
    });

    it('should call cadex.generate', () => {
        expect(cadex.generate).toHaveBeenCalled();
        expect(mockResponse.json).toHaveBeenCalledTimes(1);
    });

    it('should call response.json', () => {
        expect(mockResponse.json).toHaveBeenCalled();
        expect(mockResponse.json).toHaveBeenCalledTimes(1);
        expect(mockResponse.json).toHaveBeenCalledWith(result);
    });

    it('should send a non empty string', () => {
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
        expect(result).toBe('test');
    });

    afterAll(() => {

    });
});