import React from "react"
import { Row, Col, Space } from "antd"
import Container from "../../../components/UI/Container";
import { Link } from "react-router-dom";
import useScreenSize from "../../../hooks/useScreenSize";


const SiteFooter : React.FC = () => {

    const { isMobile } = useScreenSize()

    return (<div className="Footer py-10">
        <Container fullWidth className="px-20">
            <Row gutter={15}>
                <Col span={ isMobile ? 24 : 12} className={isMobile ? "text-center" : ' '} >
                    <Space size="large" className="p0">
                        <Link to="#privacy-policy" className="text-black">Privacy Policy</Link>
                        <Link to="#Terms" className="text-black">Terms of Service</Link>
                    </Space>
                </Col>
                <Col span={ isMobile ? 24 : 12} className={ isMobile ? "text-center" : "text-right"} >
                    © 2026, All right reserved.
                </Col>
            </Row>
        </Container>
    </div>)
}

export default SiteFooter