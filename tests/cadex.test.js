const { cadex } = require('../app/services/cadex');
const data = require('../data/data.json');

describe('Data', () => {
    it('should be an object', () => {
        expect(data).toBeInstanceOf(Object);
    });
    it('should contain 10 properties (label, names, description, visual_name, movement_url, title, mobility, warm_up, skills, workout)', () => {
        expect(data).toHaveProperty('label');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('description');
        expect(data).toHaveProperty('visual_name');
        expect(data).toHaveProperty('movement_url');
        expect(data).toHaveProperty('title');
        expect(data).toHaveProperty('mobility');
        expect(data).toHaveProperty('warm_up');
        expect(data).toHaveProperty('skills');
        expect(data).toHaveProperty('workout');
    });
});

describe('Cadex service', () => {
    it('should allow acces to the properties', () => {
        expect(cadex).toHaveProperty('label');
        expect(cadex).toHaveProperty('name');
        expect(cadex).toHaveProperty('description');
        expect(cadex).toHaveProperty('visual_name');
        expect(cadex).toHaveProperty('movement_url');
        expect(cadex).toHaveProperty('title');
        expect(cadex).toHaveProperty('mobility');
        expect(cadex).toHaveProperty('warm_up');
        expect(cadex).toHaveProperty('skills');
        expect(cadex).toHaveProperty('workout');
    });
    describe('Label', () => {
        const label = cadex.getOne();
        it('should return a string', () => {
            expect(typeof label).toBe('string');
        });
        it('should return a random string from data.label', () => {
            expect(data.label).toContain(label);
        });
    });
    describe('name', () => {
        const name = cadex.getOne();
        it('should return a string', () => {
            expect(typeof name).toBe('string');
        });
        it('should return a random string from data.name', () => {
            expect(data.name).toContain(name);
        });
    });
    describe('description', () => {
        const description = cadex.getOne();
        it('should return a string', () => {
            expect(typeof description).toBe('string');
        });
        it('should return a random string from data.description', () => {
            expect(data.description).toContain(description);
        });
    });
    describe('visual_name', () => {
        const visual_name = cadex.getOne();
        it('should return a string', () => {
            expect(typeof visual_name).toBe('string');
        });
        it('should return a random string from data.visual_name', () => {
            expect(data.visual_name).toContain(visual_name);
        });
    });
    describe('movement_url', () => {
        const movement_url = cadex.getOne();
        it('should return a string', () => {
            expect(typeof movement_url).toBe('string');
        });
        it('should return a random string from data.movement_url', () => {
            expect(data.movement_url).toContain(movement_url);
        });
    });
});
