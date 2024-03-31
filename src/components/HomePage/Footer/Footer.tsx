import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Footer.module.css';
import { InstagramFill1Icon } from './InstagramFill1Icon.js';
import { LinkedinBoxFill1Icon } from './LinkedinBoxFill1Icon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:66 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.instagramFill1}>
        <InstagramFill1Icon className={classes.icon} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.linkedinBoxFill1}>
        <LinkedinBoxFill1Icon className={classes.icon3} />
      </div>
      <div className={classes.hotcoffee2020CopyrightAllRight}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>hotcoffee</span>
          <span className={classes.label2}> 2020 copyright all rights reserved</span>
        </p>
      </div>
      <div className={classes.line1}></div>
    </div>
  );
});
