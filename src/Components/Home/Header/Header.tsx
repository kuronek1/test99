import React from 'react';
import { Badge, Button, Flex, Select } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { ReactComponent as IconLogo } from '../../../static/svg/logo.svg';
import { ReactComponent as IconSearch } from '../../../static/svg/search.svg';
import { ReactComponent as IconSubtract } from '../../../static/svg/subtract.svg';
import { ReactComponent as IconUK } from '../../../static/svg/uk_flag.svg';
import { ReactComponent as IconSpain } from '../../../static/svg/spain_flag.svg';

import './styles.less';

interface IProps {
	menuOpen: boolean;
	alerts?: number;
}

const LayoutHeader: React.FC<IProps> = props => {
	const { menuOpen, alerts } = props;

	return (
		<Header className='headerWrapper'>
			<Flex className='headerLeftSide'>
				<IconLogo />
				<Button icon={<IconSearch />} type='primary' danger rootClassName='headerSearchButton' />
			</Flex>
			{menuOpen && (
				<Flex className='headerRightSide'>
					<Badge count={alerts} size='small'>
						<IconSubtract />
					</Badge>
					<Select
						className='headerFlagSelect'
						dropdownStyle={{
							minWidth: '50px',
							textAlign: 'center',
							backgroundColor: 'transparent'
						}}
						defaultValue='UK'
						suffixIcon={null}
						options={[
							{ value: 'UK', label: <IconUK /> },
							{ value: 'Spain', label: <IconSpain /> }
						]}
					/>
				</Flex>
			)}
		</Header>
	);
};

export default LayoutHeader;
