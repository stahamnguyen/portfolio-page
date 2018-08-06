import avatar from '../../../assets/images/avatar.jpeg';

import styles from '../../../styles/components/_hero.scss';

const hero = () => (
    <div className={`${styles.hero}`}>
        <img src={avatar} alt="avatar" className={`${styles.hero__avatar}`}/>
        <h1 className={`${styles.hero__text_blue}`}>i'm staham nguyen</h1>
        <h2 className={`${styles.hero__text_blue}`}>A web and mobile developer born in Vietnam, based in Helsinki, Finland.</h2>
        <h2 className={`${styles.hero__text_blue}`}>Also, a professional photographer.</h2>
        <img src={require('../../../assets/images/double-chevron.svg')} className={`${styles.hero__downChevron}`} />
    </div>
);

export default hero;