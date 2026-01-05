import React, { useState } from "react";
import { Tag } from "antd";
import styles from "./Filter.module.css";

const { CheckableTag } = Tag;

const options = ["Frontend", "Backend", "Graphic Designer"];

const SimilarFilter: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    setSelected(prev =>
      checked ? [...prev, tag] : prev.filter(t => t !== tag)
    );
  };

  return (
    <div className={styles.similar}>
      <span>Similar:</span>

      {options.map(tag => (
        <CheckableTag
          key={tag}
          checked={selected.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
};

export default SimilarFilter;
