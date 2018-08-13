import styles from '../styles/components/_navbar.scss';

const highlightCurrentAnchor: (string) => any = (href: string) => {
    const nav: HTMLElement = document.querySelector('nav');
    const currentAnchor: HTMLElement = nav.querySelector(`[href="#${href}"]`)
    currentAnchor.classList.toggle(styles.navbar__nav_active);
}

export { highlightCurrentAnchor };