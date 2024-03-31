import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { InstagramFill1Icon } from './InstagramFill1Icon.js';
import { LinkedinBoxFill1Icon } from './LinkedinBoxFill1Icon.js';
import classes from './Navigation.module.css';
import { SearchLine1Icon } from './SearchLine1Icon.js';
import { TwitterFill1Icon } from './TwitterFill1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:8 */
export const Navigation: FC<Props> = memo(function Navigation(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.home}>Home</div>
      <div className={classes.articles}>Articles</div>
      <div className={classes.searchLine1}>
        <SearchLine1Icon className={classes.icon} />
      </div>
      <div className={classes.instagramFill1}>
        <InstagramFill1Icon className={classes.icon2} />
      </div>
      <div className={classes.twitterFill1}>
        <TwitterFill1Icon className={classes.icon3} />
      </div>
      <div className={classes.linkedinBoxFill1}>
        <LinkedinBoxFill1Icon className={classes.icon4} />
      </div>
      <div className={classes.hotCoffee}>HotCoffee</div>
    </div>
  );
});
