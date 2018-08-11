import styles from "../../../styles/components/_project.scss";

interface Props {
  imgPath: string;
  url: string;
}

const project = (props: Props) => (
  <a href={props.url} className={styles.project}>
    <div className={styles.project__card}>
      <div>
        <img
          src={require("../../../assets/images/projects/" + props.imgPath + ".png")}
          alt=""
          className={styles.project__card__frontImg}
        />
      </div>
      <div>
        <img
          src={require("../../../assets/images/projects/" +
            props.imgPath +
            "-blurred.png")}
          alt=""
          className={styles.project__card__backImg}
        />
      </div>
    </div>
  </a>
);

export default project;
