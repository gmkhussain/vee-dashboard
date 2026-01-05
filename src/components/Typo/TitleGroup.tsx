import React from "react";
import styles from "./TitleGroup.module.css"
import useScreenSize from "../../hooks/useScreenSize";

interface TitleGroupProps {
    preTitle?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    textAlign?: React.CSSProperties["textAlign"];
    color?: React.CSSProperties["color"];
    className?: string;
}

const TitleGroup: React.FC<TitleGroupProps> = ({preTitle, title, description, className, textAlign = 'center', color = '#000000' }) => {

    const { isMobile } = useScreenSize()

    return (<div className={className} style={{ textAlign: textAlign, color: color }}>
        
        { preTitle && <div className={`${styles.preTitle} ${isMobile && 'h6'}`}>{preTitle}</div> }
        
        { title && <h2 className={`${styles.title} ${isMobile && 'h3'}`}>{title}</h2> }

        { description && <p className={`${styles.description} ${isMobile && 'text-14'}`}>{description}</p>}
    
    </div>)
}

export default TitleGroup;