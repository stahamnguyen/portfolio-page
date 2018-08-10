import React from "react";

import AbilityCard from "./ability-card/ability-card";
import Project from "./project/project";

import styles from "../../styles/components/_work.scss";

export default class Work extends React.PureComponent {
  abilities = [
    {
      imgPath: "coding.svg",
      title: "software development",
      content:
        "Researching and architecting product's structure and transform elegant designs into the language of machine to deliver the most efficient solution to customers."
    },
    {
      imgPath: "visual.svg",
      title: "visual design",
      content:
        "Illustrating the interface for the products and preserving the character and appeal to successfully convey essential values of the brands to clients."
    },
    {
      imgPath: "camera.svg",
      title: "professional photography",
      content:
        "Capturing crucial bits and scenes and returning them to clients through decent-quality digital and hard-copied images. Enhancing the visual beauty using sophisticated retouching techniques."
    }
  ];

  projects = [
    {
      imgPath: "dostat",
      url: "https://github.com/stahamnguyen/DostAt"
    },
    {
      imgPath: "pretium",
      url: "https://github.com/stahamnguyen/pretium"
    },
    {
      imgPath: "parby-ecommerce",
      url: "https://github.com/AnhVu23/Parby-Ecommerce"
    },
    {
      imgPath: "parby-social-network",
      url: "https://github.com/AnhVu23/ParbySocialNetwork"
    }
  ];

  render() {
    const abilityCards = this.abilities.map(ability => (
      <AbilityCard
        imgPath={ability.imgPath}
        title={ability.title}
        content={ability.content}
      />
    ));

    const projects = this.projects.map(project => (
      <Project imgPath={project.imgPath} url={project.url} />
    ));

    return (
      <section className={`${styles.work}`}>
        <h1>What I do</h1>
        <section className={styles.work__abilityCardsContainer}>
          {abilityCards}
        </section>
        <section className={styles.work__projectsContainer}>{projects}</section>
      </section>
    );
  }
}
