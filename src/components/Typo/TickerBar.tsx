import React from "react";
import styles from "./TickerBar.module.css";

interface TickerBarProps {
  data?: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

const TickerBar: React.FC<TickerBarProps> = ({ data = [], speed = 20, direction = 'left' }) => {
  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerContent}  
        style={{ 
            animationDuration: `${speed}s`, 
            animationDirection: direction === 'left' ? 'normal' : 'reverse'
          }}>
        {[...data, ...data].map((item, index) => (
          <div key={index} className={styles.tickerItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
