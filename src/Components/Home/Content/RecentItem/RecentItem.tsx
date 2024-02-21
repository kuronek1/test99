import { Flex, Typography } from 'antd';
import './styles.less';

interface IProps {
	name: string;
	amount: number;
	place: string;
	image: string;
}

const RecentItem: React.FC<IProps> = props => {
	const { name, image, amount, place } = props;
	return (
		<Flex className='recentItemWrapper'>
			<Flex className='recentItemText'>
				<Typography className='recentItemName'>{`${name} - € ${amount}`}</Typography>
				<Typography className='recentItemPlace'>{`in ${place}`}</Typography>
			</Flex>
			{image && <img src={image} alt={name} className='recentItemIcon' />}
		</Flex>
	);
};

export default RecentItem;
