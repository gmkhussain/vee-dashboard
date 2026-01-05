import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./JobSearchForm.module.css";
import Filter from "./Filter"

const { Option } = Select;

const JobSearchForm: React.FC = () => {
  return (
    <div className={styles.wrapper}>

      {/* Heading */}
      <div className={styles.header}>
        <h1>
          Find your Dream Job, <span>Albert</span>!
        </h1>
        <p>
          Explore the latest job openings and apply for the best opportunities available today!
        </p>
      </div>


      <div className={styles.searchBox}>
        <Input
          placeholder="Job Title, Company, or Keywords"
          className={styles.input}
          bordered={false}
        />

        <Select
          placeholder="Select Location"
          suffixIcon={<DownOutlined />}
          bordered={false}
          className={styles.select}
        >
          <Option value="us">United States</Option>
          <Option value="uk">United Kingdom</Option>
        </Select>

        <Select
          placeholder="Job Type"
          suffixIcon={<DownOutlined />}
          bordered={false}
          className={styles.select}
        >
          <Option value="fulltime">Full Time</Option>
          <Option value="parttime">Part Time</Option>
        </Select>

        <Button type="primary" className={styles.searchBtn}>
          <SearchOutlined />
          Search
        </Button>
      </div>

    <Filter />

    </div>
  );
};

export default JobSearchForm;
