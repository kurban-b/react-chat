import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from '../contacts.module.css';
function Preloader() {
  return (
    <div className={styles.preloader}>
      <SkeletonTheme color="lightgray">
        <div className={styles['preloader-div']}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            circle={true}
            count={1}
          />
          <div>
            <Skeleton
              count={1}
              duration={2}
              height={20}
              style={{ display: 'block' }}
              className={styles['preloader-name']}
            />
            <Skeleton
              count={1}
              duration={2}
              height={10}
              style={{ display: 'block' }}
              className={styles['preloader-name']}
            />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default Preloader;
