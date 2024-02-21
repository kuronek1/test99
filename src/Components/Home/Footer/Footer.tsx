import React from 'react';
import { Button, Flex, Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { ReactComponent as IconMenuCenter } from '../../../static/svg/main_menu_button.svg';
import './styles.less';

interface IProps {
	toggleHandler: () => void;
	menuOpen: boolean;
}

const LayoutFooter: React.FC<IProps> = ({ toggleHandler, menuOpen }) => {
	return (
		<Footer className='footerWrapper'>
			<Flex className='footerTextWrapper'>
				<Typography className='text footerText'>Whats new in hell?</Typography>
			</Flex>
			<Flex className='footerMenuWrapper'>
				<div className={`${menuOpen && 'footerMenuOpacityOpen'} footerMenuOpacity`} />
				<Flex className='footerMenu'>
					<Flex onClick={() => console.log('Sing in')}>
						<Typography className='footerMenuSingUp'>Sing in</Typography>
					</Flex>
					<Button
						style={{
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: '15px'
						}}
						onClick={toggleHandler}
						icon={<IconMenuCenter />}
					/>
					<Flex onClick={() => console.log('Sign up')}>
						<Typography className='footerMenuSingIn'>Sign up</Typography>
					</Flex>
				</Flex>
			</Flex>
		</Footer>
	);
};

export default LayoutFooter;
