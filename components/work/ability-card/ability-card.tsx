import styles from "../../../styles/components/_ability-card.scss";

interface Props {
  imgPath: string;
  title: string;
  content: string;
}

const abilityCard = (props: Props) => {
  return (
    <div className={styles.abilityCard}>
      <img src={require("../../../assets/icons/" + props.imgPath)} alt={props.imgPath} className={styles.abilityCard__img}/>
      <h2 className={styles.abilityCard__title}>{props.title}</h2>
      <h4 className={styles.abilityCard__content}>{props.content}</h4>
    </div>
  );
};

export default abilityCard;
