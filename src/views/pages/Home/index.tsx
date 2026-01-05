import React from "react";
import { Row, Col } from "antd";
import ProfileSidebar from "../../../components/ProfileCard";
import JobSearchForm from "../../../components/JobSearchForm";
import JobList from "../../../components/JobList";
import Container from "../../../components/UI/Container";
import { iconTeam } from "../../../assets/images";


const HomePage: React.FC = () => {
  const featuredJobsData = [
    {
      title: 'UI/UX Designer',
      logoUrl: iconTeam,
      company: 'Teams',
      location: 'Seattle, USA (Remote)',
      timeAgo: '1 day ago',
      applicants: 22,
    },
    {
      title: 'UI/UX Designer',
      logoUrl: iconTeam,
      company: 'Teams',
      location: 'Seattle, USA (Remote)',
      timeAgo: '1 day ago',
      applicants: 22,
    },
    {
      title: 'Frontend Developer',
      logoUrl: iconTeam,
      company: 'Teams',
      location: 'San Francisco, USA (Remote)',
      timeAgo: '2 days ago',
      applicants: 18,
    },
    {
      title: 'Backend Developer',
      logoUrl: iconTeam,
      company: 'Teams',
      location: 'London, UK (Remote)',
      timeAgo: '3 days ago',
      applicants: 30,
    },
    {
      title: 'Backend Developer',
      logoUrl: iconTeam,
      company: 'Teams',
      location: 'London, UK (Remote)',
      timeAgo: '3 days ago',
      applicants: 30,
    },
  ];


  return (
    <Container fullWidth className="px-30">
      <Row gutter={24} className="py-30 py-30">

        <Col
          xs={24}
          md={6}
          lg={5}
          className="px-10"
        >
          <ProfileSidebar />
        </Col>

        <Col
          xs={24}
          md={18}
          lg={19}
          className="px-10"
        >
          <JobSearchForm />

          <JobList jobs={featuredJobsData} title="Featured Jobs" promoted={true} />
          <JobList jobs={featuredJobsData} title="Recommended Jobs" />
          <JobList jobs={featuredJobsData} title="Latest Jobs" />
        </Col>

      </Row>
      </Container>
  );
};

export default HomePage;
