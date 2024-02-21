import { ReactNode } from 'react';

export interface ISelectValue {
	value: string | number;
	label: string | ReactNode;
}

export interface IBonusItem {
	id: number;
	image: string;
	backgroundImage: ReactNode;
	label: string;
	description: string;
}

export interface IWinnerItem {
	id: number;
	name: string;
	place: string;
	amount: number;
	image: string;
}
