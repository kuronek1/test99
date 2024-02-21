import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Flex, Select, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import NavBarButton from './NavBarButton';
import RecentItem from './RecentItem';
import BonusBar from './BonusBar';

import { ReactComponent as IconFire } from '../../../static/svg/fire1.svg';
import { ReactComponent as IconSkull } from '../../../static/svg/skull.svg';
import { ReactComponent as IconGirl } from '../../../static/svg/girl_casino.svg';
import { ReactComponent as IconSubtract } from '../../../static/svg/subtract.svg';
import { ReactComponent as IconShield } from '../../../static/svg/shield.svg';
import { ReactComponent as IconFlag } from '../../../static/svg/flag.svg';
import { ReactComponent as IconWave1 } from '../../../static/svg/wave1.svg';
import iconEgypt from '../../../static/images/sun_of_egypt.png';

import './content.less';

const winners = [
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

const LayoutContent: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Content className='contentWrapper'>
			<Flex className='depositContent'>
				<Flex className='contentFireWrapper'>
					<IconFire className='contentFire' />
				</Flex>
				<Flex className='contentBox'>
					<Typography className='text contentText'>Deposit and play</Typography>
					<Flex className='contentBoxWrapper'>
						<BonusBar isOpen={isOpen} handleToggle={handleToggle} />
						{!isOpen && (
							<>
								<Flex className='contentSelectWrapper'>
									<Select
										defaultValue='Country'
										className='contentSelect'
										options={[
											{ value: 'USA', label: 'USA' },
											{ value: 'Ukraine', label: 'Ukraine' },
											{ value: 'German', label: 'German' },
											{ value: 'France', label: 'France' }
										]}
									/>
									<Select
										defaultValue='Currency'
										className='contentSelect'
										options={[
											{ value: 'USD', label: 'US Dollar' },
											{ value: 'GRN', label: 'Ukrainian hryvnia' },
											{ value: 'EUR', label: 'Euro' },
											{ value: 'GBP', label: ' Pound Sterling' }
										]}
									/>
								</Flex>
								<div className='contentButtonSubmitWrapper' onClick={() => console.log('start')}>
									<Typography className='contentButtonSubmit'>
										Start with your 100% bonus
									</Typography>
								</div>
							</>
						)}
					</Flex>
				</Flex>
			</Flex>
			<Flex className='navBarContent'>
				<NavBarButton name='Game slots' color='#4D583B' icon={<IconSkull />} />
				<NavBarButton name='Live casino' color='#783D3D' icon={<IconGirl />} />
				<NavBarButton name='Promotions' color='#36474C' icon={<IconSubtract />} alerts={3} />
				<NavBarButton name='Tournaments' color='#5B3D69' icon={<IconShield />} />
			</Flex>
			<Flex className='contentTickerWrapper'>
				<IconWave1 className='contentTickerWave' preserveAspectRatio='none' />
				<Flex>
					<Flex className='contentTickerContentWrapper'>
						<IconFlag />
						<div className='contentTickerFlagTextWrapper'>
							<Typography className='contentTickerFlagText text'>Recent</Typography>
							<Typography
								style={{ color: 'rgba(233, 193, 11, 1)', letterSpacing: '1.5px' }}
								className='text'
							>
								Winners
							</Typography>
						</div>
						<Marquee>
							{winners.map(item => (
								<RecentItem
									key={item.id}
									name={item.name}
									place={item.place}
									amount={item.amount}
									image={item.image}
								/>
							))}
						</Marquee>
					</Flex>
				</Flex>
				<IconWave1
					className='contentTickerWave contentTickerWaveRevert'
					preserveAspectRatio='none'
				/>
			</Flex>
		</Content>
	);
};

export default LayoutContent;
