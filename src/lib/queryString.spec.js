import { queryString, parse } from './queryString';

describe('Object to query string', () => {
    it('should convert object person to queryString', () => {
        const person = {
           name: 'Douglas',
           profession: 'Developer'
        }

        expect(queryString(person)).toBe(
            'name=Douglas&profession=Developer'
        );
        
    });

    it('should create a valid query string even when an array is passed as value', () => {
        const person = {
            name: 'Douglas',
            abilities: ['JS', 'TDD']
        }

        expect(queryString(person)).toBe(
            'name=Douglas&abilities=JS,TDD'
        );
    });

    it('should throw an error when an object is passed as value', () => {
        const person = {
            name: 'Douglas',
            habilities: {
                web: 'JS',
                test: 'TDD'
            }
        }

        expect(() => queryString(person)).toThrowError();
    });

});

describe('Query string to object', () => {
    it('should convert a query string to object', () => {
        const qs = 'name=Douglas&profession=Developer'

        expect(parse(qs)).toEqual({
            name: 'Douglas',
            profession: 'Developer'
        })
    });

    it('should convert a query string of a single key-value pair to object', () => {
        const qs = 'name=Douglas'

        expect(parse(qs)).toEqual({
            name: 'Douglas',
        })
    });

    it('should convert a query string to an object taking care of comma separated values', () => {
        const qs = 'name=Douglas&abilities=JS,TDD'

        expect(parse(qs)).toEqual({
            name: 'Douglas',
            abilities: ['JS', 'TDD']
        })
    });
});