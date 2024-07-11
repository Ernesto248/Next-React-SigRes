import React from "react";
import Image from "next/image";
import styles from "./AnimatedImage.module.css";

const AnimatedImage = ({ src, alt, title }) => {
  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        width={300}
        height={300}
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default AnimatedImage;
