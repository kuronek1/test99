import React, { useState } from 'react';
import { Layout } from 'antd';
import LayoutHeader from '../Header';
import LayoutContent from '../Content';
import LayoutFooter from '../Footer';
import FullscreenMenu from '../FullscreenMenu';

import backgroundImage from '../../../static/images/home_bg.png';
import './styles.less';

const LayoutIndex: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const backgroundStyles = !menuOpen
		? {
				backgroundImage: `url(${backgroundImage})`
			}
		: {
				backgroundColor: '#32333F'
			};

	const toggleHandler = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Layout style={backgroundStyles} className='wrapper'>
			<LayoutHeader menuOpen={menuOpen} alerts={3} />
			{menuOpen ? <FullscreenMenu /> : <LayoutContent />}
			<LayoutFooter toggleHandler={toggleHandler} menuOpen={menuOpen} />
		</Layout>
	);
};

export default LayoutIndex;
