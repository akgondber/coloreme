import keyBy from 'lodash.keyby';
import random from 'lodash.random';

import type { ColorItem } from './types';

export const coloremeList: ColorItem[] = [
	{
		name: 'redBlack',
		color: '#FF0000',
		bgColor: '#000000',
	},
	{
		name: 'redWhite',
		color: '#FF0000',
		bgColor: '#ffffff',
	},
	{
		name: 'redYellow',
		color: '#FF0000',
		bgColor: '#ffff00',
	},
	{
		name: 'redBlue',
		color: '#0000ff',
		bgColor: '#ffffff',
	},
	{
		name: 'blueBlack',
		color: '#0000ff',
		bgColor: '#000000',
	},
	{
		name: 'blueWhite',
		color: '#0000ff',
		bgColor: '#ffffff',
	},
	{
		name: 'blueYellow',
		color: '#0000ff',
		bgColor: '#ffff00',
	},
	{
		name: 'yellowBlack',
		color: '#ffff00',
		bgColor: '#000000',
	},
	{
		name: 'BluePastelPink',
		color: '#2F3C7E',
		bgColor: '#FBEAEB',
	},
	{
		name: 'DarkCharcoalBrightYellow',
		color: '#101820',
		bgColor: '#FEE715',
	},
	{
		name: 'LightRedYellow',
		color: '#F96167',
		bgColor: '#F9E795',
	},
	{
		name: 'CherryRedOffWhite',
		color: '#990011',
		bgColor: '#FCF6F5',
	},
	{
		name: 'BabyBlueWhite',
		color: '#8AAAE5',
		bgColor: '#FFFFFF',
	},
	{
		name: 'DarkBlueLightBlue',
		color: '#00246B',
		bgColor: '#CADCFC',
	},
	{
		name: 'SkyBlueBubblegumPink',
		color: '#89ABE3',
		bgColor: '#EA738D',
	},
	{
		name: 'CherryRedBubblegumPink',
		color: '#CC313D',
		bgColor: '#F7C5CC',
	},
	{
		name: 'ForestGreenMossGreen',
		color: '#2C5F2D',
		bgColor: '#97BC62',
	},
	{
		name: 'PastelOliveGreenSalmonPink',
		color: '#A1BE95',
		bgColor: '#F98866',
	},
	{
		name: 'DeepPeriwinkleSoftLilac',
		color: '#735DA5',
		bgColor: '#D3C5E5',
	},
	{
		name: 'SalmonPinkSoftPeach',
		color: '#F98866',
		bgColor: '#FFF2D7',
	},
	{
		name: 'SeafoamGreenLighBlue',
		color: '#C4DFE6',
		bgColor: '#66A5AD',
	},
	{
		name: 'TealLightGreen',
		color: '#20948B',
		bgColor: '#6AB187',
	},
	{
		name: 'DarkGreenLighGray',
		color: '#31473A',
		bgColor: '#EDF4F2',
	},
	{
		name: 'CranberryRedBubblegum',
		color: '#F52549',
		bgColor: '#FA6775',
	},
	{
		name: 'DeepBlueOrangeRed',
		color: '#375E97',
		bgColor: '#FB6542',
	},
	{
		name: 'DeepBlueYellowOrange',
		color: '#375E97',
		bgColor: '#FFBB00',
	},
	{
		name: 'MauveDustyRose',
		color: '#962E2A',
		bgColor: '#E3867D',
	},
	{
		name: 'MauveSoftBlueGray',
		color: '#962E2A',
		bgColor: '#CEE6F2',
	},
	{
		name: 'DustyRoseSoftBlueGray',
		color: '#E3867D',
		bgColor: '#CEE6F2',
	},
].map((current) => ({
	...current,
	c: current.color,
	b: current.bgColor,
	inverse: {
		color: current.bgColor,
		bgColor: current.color,
		c: current.bgColor,
		b: current.color,
	},
}));

export const coloreme = keyBy(coloremeList, 'name');

export const colors = {
	list: coloremeList,
	obj: coloreme,
	random(): ColorItem {
		return coloremeList[random(coloremeList.length)];
	},
};
