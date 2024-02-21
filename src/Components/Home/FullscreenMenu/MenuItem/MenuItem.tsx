import { ReactNode } from 'react';
import { Badge, Button, Typography } from 'antd';
import './styles.less';

interface IProps {
	label: string;
	icon?: ReactNode;
	alerts?: number;
}

const MenuItem: React.FC<IProps> = props => {
	const { label, icon, alerts } = props;

	return (
		<Button className='menuItemWrapper'>
			<Badge count={alerts} size='small'>
				{icon}
			</Badge>
			<Typography className='menuItemLabel'>{label}</Typography>
		</Button>
	);
};

export default MenuItem;
