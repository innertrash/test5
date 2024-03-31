import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CardPanelCentre.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:39 */
export const CardPanelCentre: FC<Props> = memo(function CardPanelCentre(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.longEstablished}>long established</div>
      <div className={classes.may20th2020}>May 20th 2020</div>
      <div className={classes.readMore}>Read more</div>
      <div className={classes.itIsALongEstablishedFactThatAR}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that....
      </div>
      <div className={classes.image4}></div>
    </div>
  );
});
