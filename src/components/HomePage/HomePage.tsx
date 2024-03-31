import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CardLatest } from './CardLatest/CardLatest';
import { CardPanelCentre } from './CardPanelCentre/CardPanelCentre';
import { CardPanelLeft } from './CardPanelLeft/CardPanelLeft';
import { CardPanelRight } from './CardPanelRight/CardPanelRight';
import { Footer } from './Footer/Footer';
import { Group1 } from './Group1/Group1';
import { HeadSection } from './HeadSection/HeadSection';
import { HighlightSection } from './HighlightSection/HighlightSection';
import classes from './HomePage.module.css';
import { Navigation } from './Navigation/Navigation';

interface Props {
  className?: string;
}
/* @figmaId 1:7 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Navigation />
      <CardLatest />
      <CardPanelLeft />
      <CardPanelCentre />
      <CardPanelRight />
      <HeadSection />
      <HighlightSection />
      <Footer />
      <Group1 />
    </div>
  );
});
