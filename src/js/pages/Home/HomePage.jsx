import React from 'react';

import SingleColumnBody from 'layout/Body/SingleColumnBody';
import BodyHeader from 'layout/Body/BodyHeader';
import BodyBody from 'layout/Body/BodyBody';
import BodyFooter from 'layout/Body/BodyFooter';

import HomePageBanner from './HomePageBanner';

import OurMissionSection from './OurMissionSection';

import BottomSection from './BottomSection';

export default class HomePage extends React.Component {
            
	render() {
		return (
			<SingleColumnBody className='home'>
				<BodyHeader>
					<HomePageBanner />		
				</BodyHeader>
				<BodyBody>
					<OurMissionSection />
				</BodyBody>
				<BodyFooter>
					<BottomSection />
				</BodyFooter>
			</SingleColumnBody>
		);
	};                       

}