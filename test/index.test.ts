import { expect, test } from 'vitest';
import { coloreme, coloremeList } from '../src';

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

test('should have uniq names', () => {
	const allNames = coloremeList.map((item) => item.name);
	const uniqNames = allNames.filter((v, i, self) => i === self.indexOf(v));
	expect(uniqNames).toHaveLength(allNames.length);
});
