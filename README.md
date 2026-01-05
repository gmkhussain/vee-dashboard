# vee-dashboard

Visit: https://vee-dashboard.vercel.app/

This document explains how to correctly structure **JobList** and **JobCard** components in React + TypeScript, avoid common typing errors, and keep a **single source of truth** for job types.

---

## Problem Summary

Common TypeScript errors you may encounter:

* `Property 'company' is missing in type ...`
* `Property 'id' is missing in type ...`
* `Type 'X' is not assignable to type 'FeaturedJob'`

These issues usually happen because:

1. The same interface is declared in multiple files
2. Component props expect fields that mock/API data does not provide
3. Required vs optional properties are mismatched

---

## Solution Overview

### Key Rules

* ✅ **Define `FeaturedJob` only once**
* ✅ **Import the same type everywhere**
* ✅ **Make fields optional only if data may not exist**

---

## Folder Structure

```
src/components/JobList/
├── index.tsx        # JobList component
├── JobCard.tsx     # JobCard component
├── types.ts        # Shared job types
```

---

## Shared Job Type

📄 `src/components/JobList/types.ts`

```ts
export interface FeaturedJob {
  id?: number; // optional for mock data, required for API data
  title: string;
  company: string;
  location: string;
  timeAgo: string;
  applicants: number;
  salary?: string;
  isFeatured?: boolean;
  logoUrl?: string;
}
```

---

## JobCard Component

📄 `JobCard.tsx`

```tsx
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
          src={job.logoUrl}
          className={`${styles.avatar} ${
            job.logoUrl ? styles.withBg : ""
          }`}
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
        <Button type="primary">Apply Now</Button>
        <Button icon={<Image src={iconSave} preview={false} />} />
      </div>
    </div>
  );
};

export default JobCard;
```

---

## JobList Component

📄 `index.tsx`

```tsx
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
        <h2>{title}</h2>
        <Button type="link">See {title}</Button>
      </div>

      <div className={styles.grid}>
        {jobs.map((job) => (
          <JobCard
            key={job.id ?? `${job.title}-${job.company}`}
            job={job}
            promoted={promoted}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
```

---

## Example Usage (Home Page)

```tsx
const featuredJobsData = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Google",
    location: "Remote",
    timeAgo: "2 days ago",
    applicants: 23,
    logoUrl: "/logos/google.png",
  },
];

<JobList
  jobs={featuredJobsData}
  title="Featured Jobs"
  promoted
/>
```

---

## Best Practices

* 🔹 Keep **types in one file only**
* 🔹 Prefer `id` for React keys
* 🔹 Use optional fields for mock data
* 🔹 Avoid `any` completely

---

## Result

* ✅ No TypeScript errors
* ✅ `tsc -b` passes
* ✅ `vite build` passes
* ✅ Clean, scalable architecture

---

