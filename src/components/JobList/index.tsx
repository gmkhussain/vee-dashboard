import React from 'react';
import JobCard from './JobCard';
import { Button, Row, Col } from 'antd';
import styles from './JobList.module.css';

interface Job {
  title: string;
  location: string;
  timeAgo: string;
  applicants: number;
}

interface FeaturedJobsProps {
  jobs: Job[];
  title: string;
  promoted: Boolean
}

const JobList: React.FC<FeaturedJobsProps> = ({ jobs, title, promoted }) => {
  return (
    <div className={styles.wrapper}>
     
      <div className={styles.header}>
        <h2>{title}</h2>
        <Button type="link" className={styles.seeMoreButton}>
          See {title}
        </Button>
      </div>

  <div className={styles.grid}>
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} promoted={promoted} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
