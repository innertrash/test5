import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HeadSection.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:53 */
export const HeadSection: FC<Props> = memo(function HeadSection(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.croods1}></div>
      <div className={classes.makeBetterCoffee}>
        <div className={classes.textBlock}>Make better</div>
        <div className={classes.textBlock2}>coffee</div>
      </div>
      <div className={classes.whyLearnHowToBlog}>why learn how to blog?</div>
      <div className={classes.image6}></div>
    </div>
  );
});
