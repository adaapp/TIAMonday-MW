const main = require('../src/main.js');

describe('This is my first attempt at testing the sum function', () => {
	test('this is my sum test', () => {
		expect(main.sum(2,3)).toBe(5);
		expect(main.sum(1,1)).toBe(2);
		expect(main.sum(10,20)).toBe(30);
		expect(main.sum(1,1)).not.toBe(3);
	});

	test('this is my subtract test', () => {
		expect(main.subtract(2,3)).toBe(-1);
	});

});	

