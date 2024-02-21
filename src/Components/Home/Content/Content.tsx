import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Flex, Select, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import NavBarButton from './NavBarButton';
import RecentItem from './RecentItem';
import BonusBar from './BonusBar';
import { winnersData, countriesData, currencyData } from 'constants/data';
import { IWinnerItem } from 'constants/types';

import { ReactComponent as IconFire } from 'static/svg/fire1.svg';
import { ReactComponent as IconSkull } from 'static/svg/skull.svg';
import { ReactComponent as IconGirl } from 'static/svg/girl_casino.svg';
import { ReactComponent as IconSubtract } from 'static/svg/subtract.svg';
import { ReactComponent as IconShield } from 'static/svg/shield.svg';
import { ReactComponent as IconFlag } from 'static/svg/flag.svg';
import { ReactComponent as IconWave1 } from 'static/svg/wave1.svg';
import './content.less';

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
										options={countriesData}
									/>
									<Select
										defaultValue='Currency'
										className='contentSelect'
										options={currencyData}
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
							{winnersData.map((item: IWinnerItem) => (
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
