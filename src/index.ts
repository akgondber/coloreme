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
		color: '#FF0000',
		bgColor: '#0000ff',
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
		name: 'TealTangerine',
		color: '#80C4B7',
		bgColor: '#E3856B',
	},
	{
		name: 'PrussianBlueMustard',
		color: '#3B5BA5',
		bgColor: '#E87A5D',
	},
	{
		name: 'PeriwinkleLime',
		color: '#678CEC',
		bgColor: '#BBCB50',
	},
	{
		name: 'BlondeYellowCandyPink',
		color: '#F9EC7E',
		bgColor: '#E26274',
	},
	{
		name: 'RaspberryPinkDarkChocolate',
		color: '#B2456E',
		bgColor: '#552619',
	},
	{
		name: 'SagePineGreen',
		color: '#EDF4F2',
		bgColor: '#31473A',
	},
	{
		name: 'LightBlueCobalt',
		color: '#CADCFC',
		bgColor: '#00246B',
	},
	{
		name: 'CanaryYellowOffBlack',
		color: '#D3CAE2',
		bgColor: '#404041',
	},
	{
		name: 'LilacOrange',
		color: '#D5CAE4',
		bgColor: '#E59462',
	},
	{
		name: 'SunshineYellowSapphireBlue',
		color: '#F2EC9B',
		bgColor: '#1803A5',
	},
	{
		name: 'GraystoneEmerald',
		color: '#D9DAD9',
		bgColor: '#4C8055',
	},
	{
		name: 'ElectricPinkPowderBlue',
		color: '#DF3C5F',
		bgColor: '#6F9BD1',
	},
	{
		name: 'BlushRoseBrown',
		color: '#E17888',
		bgColor: '#341514',
	},
	{
		name: 'CobaltBrown',
		color: '#1C5789',
		bgColor: '#341514',
	},
	{
		name: 'MustardMauve',
		color: '#EDC400',
		bgColor: '#B25690',
	},
	{
		name: 'MustardGreen',
		color: '#EDC400',
		bgColor: '#71B379',
	},
	{
		name: 'BlueMustard',
		color: '#1D71BA',
		bgColor: '#EDC400',
	},
	{
		name: 'SandUmber',
		color: '#D4B8B1',
		bgColor: '#866C69',
	},
	{
		name: 'SandEspresso',
		color: '#D4B8B1',
		bgColor: '#53331F',
	},
	{
		name: 'RaspberryPinkClay',
		color: '#D8D0CD',
		bgColor: '#C83F5F',
	},
	{
		name: 'WalnutPersimmonOrange',
		color: '#4D181C',
		bgColor: '#DD671E',
	},
	{
		name: 'WalnutHoney',
		color: '#4D181C',
		bgColor: '#E58D2E',
	},
	{
		name: 'SandBlack',
		color: '#D1B5A3',
		bgColor: '#0C0D0D',
	},
	{
		name: 'SandOrange',
		color: '#D1B5A3',
		bgColor: '#E36858',
	},
	{
		name: 'BabyBlueRubyRed',
		color: '#CEE6F2',
		bgColor: '#962E2A',
	},
	{
		name: 'PeachRubyRed',
		color: '#E3867D',
		bgColor: '#962E2A',
	},
	{
		name: 'PastelPinkButterYellow',
		color: '#EECCD3',
		bgColor: '#EEC95C',
	},
	{
		name: 'TealPapayaOrange',
		color: '#80C4B7',
		bgColor: '#E3856B',
	},
	{
		name: 'NeonBlueBrandy',
		color: '#B6818B',
		bgColor: '#802621',
	},
	{
		name: 'PowderPinkBrandy',
		color: '#B8912E',
		bgColor: '#802621',
	},
	{
		name: 'AegeanBluePersimmonOrange',
		color: '#144058',
		bgColor: '#DD671E',
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
		name: 'RusticOrangeDirtBrown',
		color: '#CF9032',
		bgColor: '#6C3622',
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
