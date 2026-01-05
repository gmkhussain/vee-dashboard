import React from "react";
import { Button } from "antd";
import JobCard from "./JobCard";
import styles from "./JobList.module.css";
import { FeaturedJob } from "./types";

interface JobListProps {
  jobs: FeaturedJob[];
  title: string;
  promoted?: boolean;
}

const JobList: React.FC<JobListProps> = ({
  jobs,
  title,
  promoted = false,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <Button type="link" className={styles.seeMoreButton}>
          See {title}
        </Button>
      </div>

      <div className={styles.grid}>
        {jobs.map((job) => (
          <JobCard
            key={job.title ?? `${job.title}-${job.location}`}
            job={job}
            promoted={promoted}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
