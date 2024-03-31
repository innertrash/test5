import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HighlightSection.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:59 */
export const HighlightSection: FC<Props> = memo(function HighlightSection(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle5}></div>
      <div className={classes.image7}></div>
      <div className={classes.itIsALongEstablishedFactThatAR}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...
      </div>
      <div className={classes.readMore}>Read more</div>
      <div className={classes.may20}>May 20</div>
      <div className={classes.whatIsLoremIpsum}>What is Lorem Ipsum?</div>
    </div>
  );
});
