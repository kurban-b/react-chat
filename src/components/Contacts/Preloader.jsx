import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from './contacts.module.css';
function Preloader(props) {
  return (
    <div className={styles.preloader}>
      <SkeletonTheme color="lightgray">
        <div className={styles.preloader_div}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            className={styles.preloader_circle}
            circle={true}
            count={1}
          />
          <Skeleton
            count={2}
            duration={2}
            height={10}
            style={{ display: 'block' }}
            className={styles.preloader_name}
          />
        </div>
      </SkeletonTheme>
      <SkeletonTheme color="lightgray">
        <div className={styles.preloader_div}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            className={styles.preloader_circle}
            circle={true}
            count={1}
          />
          <Skeleton
            count={2}
            duration={2}
            height={10}
            style={{ display: 'block' }}
            className={styles.preloader_name}
          />
        </div>
      </SkeletonTheme>
      <SkeletonTheme color="lightgray">
        <div className={styles.preloader_div}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            className={styles.preloader_circle}
            circle={true}
            count={1}
          />
          <Skeleton
            count={2}
            duration={2}
            height={10}
            style={{ display: 'block' }}
            className={styles.preloader_name}
          />
        </div>
      </SkeletonTheme>
      <SkeletonTheme color="lightgray">
        <div className={styles.preloader_div}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            className={styles.preloader_circle}
            circle={true}
            count={1}
          />
          <Skeleton
            count={2}
            duration={2}
            height={10}
            style={{ display: 'block' }}
            className={styles.preloader_name}
          />
        </div>
      </SkeletonTheme>
      <SkeletonTheme color="lightgray">
        <div className={styles.preloader_div}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            className={styles.preloader_circle}
            circle={true}
            count={1}
          />
          <Skeleton
            count={2}
            duration={2}
            height={10}
            style={{ display: 'block' }}
            className={styles.preloader_name}
          />
        </div>
      </SkeletonTheme>
      <SkeletonTheme color="lightgray">
        <div className={styles.preloader_div}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            className={styles.preloader_circle}
            circle={true}
            count={1}
          />
          <Skeleton
            count={2}
            duration={2}
            height={10}
            style={{ display: 'block' }}
            className={styles.preloader_name}
          />
        </div>
      </SkeletonTheme>
      <SkeletonTheme color="lightgray">
        <div className={styles.preloader_div}>
          <Skeleton
            duration={2}
            width={50}
            height={50}
            style={{ display: 'block' }}
            className={styles.preloader_circle}
            circle={true}
            count={1}
          />
          <Skeleton
            count={2}
            duration={2}
            height={10}
            style={{ display: 'block' }}
            className={styles.preloader_name}
          />
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default Preloader;