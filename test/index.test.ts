import { expect, test } from 'vitest';
import { coloreme } from '../src';

test('returns object with color themes', () => {
	expect(coloreme.BluePastelPink).toEqual({
		name: 'BluePastelPink',
		color: '#2F3C7E',
		bgColor: '#FBEAEB',
		c: '#2F3C7E',
		b: '#FBEAEB',
		inverse: {
			color: '#FBEAEB',
			bgColor: '#2F3C7E',
			c: '#FBEAEB',
			b: '#2F3C7E',
		},
	});
});
