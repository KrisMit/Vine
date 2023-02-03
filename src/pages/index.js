import React from 'react';
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';

import AboutLanding from '../components/aboutLanding';
import CounterLanding from '../components/counterLanding';
import JoinCommunityLanding from '../components/joinCommunityLanding';
//import SimpleAccordion from '../components/simpleAccordion';
import QuestionsAnswersLanding from '../components/questionsAnswersLanding';
import RoadmapLanding from '../components/roadmapLanding';
import Seo from '../components/seo';
import TeaserLanding from '../components/teaserLanding';
import VineLayout from '../components/vineLayout';

export default function VineVerifiedPage() {
  const [expPanel, setExpPanel] = useState('');

  useEffect(() => {
    setExpPanel(expPanel);
  }, [expPanel]);

  return (
    <>
      <VineLayout>
        <Seo title="DVLPNFT Powered by Vine Digital" />
        <Box style={{ backgroundColor: 'rgb(0, 24, 48)' }}>
          <CounterLanding ExpPanelChange={expPanel => setExpPanel(expPanel)} />
          <AboutLanding />
          <TeaserLanding />
          <RoadmapLanding />
          {/* <SignUpForm /> */}
          {/* <SimpleAccordion expandedPanel={'panel2'}/> */}
          <QuestionsAnswersLanding expandedPanel={expPanel} />
          <JoinCommunityLanding />
        </Box>
      </VineLayout>
    </>
  );
}

/* const VineVerifiedPage = () => (
  <>
    <VineLayout>
      <Seo title="DVLPNFT Powered by Vine Digital" />
      <Box style={{ backgroundColor: 'rgb(0, 24, 48)' }}>
        <CounterLanding />
        <AboutLanding />
        <RoadmapLanding />
        <QuestionsAnswersLanding expandedPanel={''} />
        <JoinCommunityLanding />
      </Box>
    </VineLayout>
  </>
);

export default VineVerifiedPage; */
