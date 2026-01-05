import React from "react";
import { Button, Avatar, Image } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styles from "./JobCard.module.css";
import { iconSave } from "../../assets/images";
import { FeaturedJob } from "./types";

interface Props {
  job: FeaturedJob;
  promoted?: boolean;
}

const JobCard: React.FC<Props> = ({ job, promoted = false }) => {
  return (
    <div className={styles.card}>
      {promoted && <div className={styles.promoted}>Promoted</div>}

      <div className={styles.header}>
        <Avatar
          size={40}
          className={`${styles.avatar} ${
            job.logoUrl ? styles.withBg : ""
          }`}
          src={job.logoUrl}
        />

        <div>
          <h3 className={styles.title}>{job.title}</h3>
          <p className={styles.company}>{job.company}</p>
        </div>
      </div>

      <div className={styles.meta}>
        <span>
          <EnvironmentOutlined /> {job.location}
        </span>

        <span>
          <ClockCircleOutlined /> {job.timeAgo} |{" "}
          <b>{job.applicants} applicants</b>
        </span>
      </div>

      <div className={styles.actions}>
        <Button type="primary" className={styles.applyBtn}>
          Apply Now
        </Button>

        <Button
          icon={<Image src={iconSave} preview={false} />}
          className={styles.saveBtn}
        />
      </div>
    </div>
  );
};

export default JobCard;
