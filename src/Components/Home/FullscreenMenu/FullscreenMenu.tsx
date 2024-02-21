import React, { useCallback } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Flex, Input, Typography } from 'antd';
import MenuItem from './MenuItem';

import { ReactComponent as IconSkull } from 'static/svg/skull.svg';
import { ReactComponent as IconGirl } from 'static/svg/girl_casino.svg';
import { ReactComponent as IconSubtract } from 'static/svg/subtract.svg';
import { ReactComponent as IconShield } from 'static/svg/shield.svg';
import { ReactComponent as IconLottery } from 'static/svg/lottery.svg';
import { ReactComponent as IconHallOfFame } from 'static/svg/hall_of_fame.svg';
import { ReactComponent as IconVIP } from 'static/svg/vip.svg';
import { ReactComponent as IconPayment } from 'static/svg/payment.svg';
import { ReactComponent as IconSupport } from 'static/svg/support.svg';
import { ReactComponent as MenuBackground } from 'static/svg/menu_backgroud.svg';

import './styles.less';

const FullscreenMenu: React.FC = () => {
	const onSearch = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
		[]
	);

	return (
		<Flex className='menuContainerWrapper'>
			<MenuBackground className='menuItemsBackgroudSvg' />
			<Flex className='menuContainer'>
				<Flex className='menuRegistrationWrapper'>
					<div onClick={() => console.log('Register')}>
						<Typography className='menuRegistrationSingIn'>Register</Typography>
					</div>
					<div onClick={() => console.log('Log in')}>
						<Typography className='menuRegistrationSingUp'>Log in</Typography>
					</div>
				</Flex>
				<Input
					className='menuSearchInput'
					placeholder='Game name or provider'
					prefix={<SearchOutlined />}
					size='large'
					onChange={onSearch}
				/>
				<Flex className='menuItemsWrapper'>
					<MenuItem label='Games' icon={<IconSkull />} />
					<MenuItem label='Promotions' icon={<IconSubtract />} alerts={3} />
					<MenuItem label='Tournaments' icon={<IconShield />} />
					<MenuItem label='Live dealers' icon={<IconGirl />} />
					<MenuItem label='Lottery' icon={<IconLottery />} />
					<MenuItem label='Hall of fame' icon={<IconHallOfFame />} />
					<MenuItem label='VIP' icon={<IconVIP />} />
					<MenuItem label='Payment' icon={<IconPayment />} />
					<MenuItem label='Support' icon={<IconSupport />} />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default FullscreenMenu;
