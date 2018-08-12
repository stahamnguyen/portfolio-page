import React from 'react';

import styles from '../../../styles/components/_contact.scss';

export default class Quote extends React.Component {

render() {
        return (
            <section className={styles.contact__quote}>
                <h1>Let my work<br />solve your problem</h1>
            </section>
        )
    }
}