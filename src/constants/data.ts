import iconEgypt from 'static/images/sun_of_egypt.png';
import { IWinnerItem, ISelectValue } from './types';

export const winnersData: IWinnerItem[] = [
	{
		id: 1,
		name: 'Robert',
		place: 'Sun of Egypt',
		amount: 19.7,
		image: iconEgypt
	},
	{
		id: 2,
		name: 'David',
		place: 'Moon Walk',
		amount: 119.74,
		image: iconEgypt
	},
	{
		id: 3,
		name: 'Ben',
		place: 'Sun of Egypt',
		amount: 19.72,
		image: iconEgypt
	},
	{
		id: 4,
		name: 'Olivia',
		place: 'Moon Walk',
		amount: 9.7,
		image: iconEgypt
	},
	{
		id: 5,
		name: 'Robert',
		place: 'Sun of Egypt',
		amount: 199.7,
		image: iconEgypt
	},
	{
		id: 6,
		name: 'Ben',
		place: 'Moon Walk',
		amount: 139.7,
		image: iconEgypt
	},
	{
		id: 7,
		name: 'Olivia',
		place: 'Sun of Egypt',
		amount: 219.7,
		image: iconEgypt
	}
];

export const countriesData: ISelectValue[] = [
	{ value: 'USA', label: 'USA' },
	{ value: 'Ukraine', label: 'Ukraine' },
	{ value: 'German', label: 'German' },
	{ value: 'France', label: 'France' }
];

export const currencyData: ISelectValue[] = [
	{ value: 'USD', label: 'US Dollar' },
	{ value: 'GRN', label: 'Ukrainian hryvnia' },
	{ value: 'EUR', label: 'Euro' },
	{ value: 'GBP', label: ' Pound Sterling' }
];
