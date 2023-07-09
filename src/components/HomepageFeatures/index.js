import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Support Me",
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Give me a star at here{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/fu1996/fu1996.github.io"
        >
          GitHub
        </a>
      </>
    ),
  },
  {
    title: "About Me",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>一名在大学从动物科学专业转码农的自学者</>,
  },
  {
    title: "Contact Me",
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>Wechat: fjk1586237690</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
