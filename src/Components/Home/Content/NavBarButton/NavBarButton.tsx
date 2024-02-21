import { ReactNode } from 'react';
import { Badge, Button, Flex, Typography } from 'antd';
import { ReactComponent as IconNavBarFire } from '../../../../static/svg/navbar_fire.svg';
import { ReactComponent as IconNavBarFire1 } from '../../../../static/svg/navbar_fire1.svg';
import './styles.less';

interface IProps {
	name: string;
	icon?: ReactNode;
	color: string;
	alerts?: number;
}

const NavBarButton: React.FC<IProps> = props => {
	const { name, icon, color, alerts } = props;
	return (
		<Button icon={icon} className='navBarContentButton'>
			<Flex className='navBarContentButtonChildren'>
				<div className='iconsFireWrapper'>
					<IconNavBarFire1 />
					<IconNavBarFire className='iconFire' />
				</div>
				<div style={{ backgroundColor: color }} className='navBarButtonOpacity' />
				<Flex className='navBarContentWrapper'>
					<Badge count={alerts} size='small'>
						{icon}
					</Badge>
					<Typography className='navBarButtonName'>{name}</Typography>
				</Flex>
			</Flex>
		</Button>
	);
};

export default NavBarButton;
