import React, { useState } from 'react';
import { Layout } from 'antd';
import LayoutHeader from '../Header';
import LayoutContent from '../Content';
import LayoutFooter from '../Footer';
import FullscreenMenu from '../FullscreenMenu';

import './styles.less';

const LayoutIndex: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const toggleHandler = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Layout className={`${!menuOpen ? 'wrapperBgImage' : 'wrapperBgColor'} wrapper`}>
			<LayoutHeader menuOpen={menuOpen} alerts={3} />
			{menuOpen ? <FullscreenMenu /> : <LayoutContent />}
			<LayoutFooter toggleHandler={toggleHandler} menuOpen={menuOpen} />
		</Layout>
	);
};

export default LayoutIndex;
