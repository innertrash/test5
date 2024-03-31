import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ArrowDownCircleFill1Icon } from './ArrowDownCircleFill1Icon.js';
import classes from './Group1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:76 */
export const Group1: FC<Props> = memo(function Group1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle6}></div>
      <div className={classes.seeMore}>See more</div>
      <div className={classes.arrowDownCircleFill1}>
        <ArrowDownCircleFill1Icon className={classes.icon} />
      </div>
    </div>
  );
});
