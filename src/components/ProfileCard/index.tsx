import React from "react";
import { Card, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./ProfileSidebar.module.css";

const ProfileSidebar: React.FC = () => {
  return (
    <div className={styles.wrapper}>

      <Card bordered={false} className={styles.profileCard}>
        <div className={styles.cover}>
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="cover"
          />
          <Avatar
            size={88}
            src="https://i.pravatar.cc/150?img=12"
            className={styles.avatar}
          />
        </div>

        <div className={styles.profileInfo}>
          <h3>Albert Flores</h3>
          <p>
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <span>Clinton, Maryland</span>
        </div>
      </Card>

      <Card bordered={false} className={styles.statsCard}>
        <div className={styles.statRow}>
          <span>Profile Visitors</span>
          <strong>140</strong>
        </div>
        <div className={styles.statRow}>
          <span>Resume Viewers</span>
          <strong>20</strong>
        </div>
        <div className={styles.statRow}>
          <span>My Jobs</span>
          <strong>88</strong>
        </div>
      </Card>

      <Card bordered={false} className={styles.statsCard}>
        <div className={styles.calendarHeader}>
          <div>
            <h4>My calendar</h4>
            <span>Upcoming Interviews</span>
          </div>
          <DownOutlined />
        </div>
      </Card>

    </div>
  );
};

export default ProfileSidebar;
