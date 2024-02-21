import { ReactNode, useState } from 'react';
import './styles.less';
import { Button, Flex, Radio, Typography } from 'antd';
import { ReactComponent as IconButton1 } from '../../../../static/svg/bonus_button.svg';
import { ReactComponent as IconButton2 } from '../../../../static/svg/bonus_button2.svg';
import { ReactComponent as IconButton3 } from '../../../../static/svg/bonus_button3.svg';
import iconCase1 from '../../../../static/images/case1.png';
import iconCase2 from '../../../../static/images/case2.png';
import iconCase3 from '../../../../static/images/case3.png';

import React from 'react';
import { CaretDownFilled } from '@ant-design/icons';

interface BonusItem {
	id: number;
	image: string;
	backgroundImage: ReactNode;
	label: string;
	description: string;
}

const bonusItems: BonusItem[] = [
	{
		id: 1,
		image: iconCase1,
		backgroundImage: <IconButton1 />,
		label: 'Welcome bonus',
		description: '100% up to €500 +120 FreeSpins'
	},
	{
		id: 2,
		image: iconCase2,
		backgroundImage: <IconButton2 />,
		label: 'First Deposit Bonus',
		description: '100% up to €500 +120 FreeSpins'
	},
	{
		id: 3,
		image: iconCase3,
		backgroundImage: <IconButton3 />,
		label: 'No bonus',
		description: 'I do not want a Welcome bonus'
	}
];

interface IProps {
	isOpen: boolean;
	handleToggle: () => void;
}

const BonusBar: React.FC<IProps> = props => {
	const { isOpen, handleToggle } = props;
	const [selectedBonus, setSelectedBonus] = useState<BonusItem[]>([bonusItems[0]]);

	const handleSelect = (item: BonusItem) => {
		setSelectedBonus([item]);
		handleToggle();
	};

	return (
		<Radio.Group className={`bonusBarWrapper ${isOpen && 'bonusBarWrapperOpen'}`}>
			{(isOpen ? bonusItems : selectedBonus).map((item: BonusItem) => (
				<Flex key={item.id} className='bonusBarItem'>
					{item.backgroundImage}
					<Flex className='bonusBarItemWrapper'>
						<img src={item.image} alt={`Case ${item.id}`} />
						<div className='bonusBarItemText'>
							<Typography className='bonusBarItemLabel'>{item.label}</Typography>
							<Typography className='bonusBarItemDesc'>{item.description}</Typography>
						</div>
						{!isOpen ? (
							<Button onClick={handleToggle} className='bonusBarItemDropdown'>
								<CaretDownFilled style={{ color: 'white' }} />
							</Button>
						) : (
							<Radio.Button
								value={item.id}
								checked={selectedBonus[0].id === item.id}
								onClick={() => handleSelect(item)}
								className='bonusBarRadioButton'
								defaultChecked={selectedBonus[0].id === item.id}
							/>
						)}
					</Flex>
				</Flex>
			))}
		</Radio.Group>
	);
};

export default BonusBar;
