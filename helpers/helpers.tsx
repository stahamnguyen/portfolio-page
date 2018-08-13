import stylesNavbar from "../styles/components/_navbar.scss";
import stylesDropdown from "../styles/components/_dropdown.scss";

const highlightCurrentAnchor: (string) => any = (href: string) => {
  const nav: HTMLElement = document.querySelector("nav");
  const currentAnchor: HTMLElement = nav.querySelector(`[href="#${href}"]`);
  currentAnchor.classList.toggle(stylesNavbar.navbar__nav_active);
};

const toggleDropdown: () => any = () => {
    const dropdown: HTMLElement = document.querySelector("." + stylesDropdown.dropdown);
    dropdown.classList.toggle(stylesDropdown.dropdown_invisible);
};

const hideDropdown: () => any = () => {
    const dropdown: HTMLElement = document.querySelector("." + stylesDropdown.dropdown);
    dropdown.classList.add(stylesDropdown.dropdown_invisible);
};

export { highlightCurrentAnchor, toggleDropdown, hideDropdown };
