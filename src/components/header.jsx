import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    return (
        <>
            <header className={styles.header}>
                <a href="/" className={styles.logo}>
                    <img src="/parametr-logo.png" alt="" />
                </a>
                <div className={styles.nav}>
                    <a className={`${styles.headerItemLink} ${styles.headerItemMobileNone}`} href="">
                        <div className={styles.headerItemWrapper}>
                            <div className={styles.headerItem2}>
                                <img src="/telegram.svg" alt="" />
                                <p className={styles.headerNavigationText}>Бот для инвесторов</p>
                            </div>
                            <div className={`${styles.headerItem2} ${styles.headerItemClone}`}>
                                <img src="/telegram.svg" alt="" />
                                <p className={styles.headerNavigationText}>Бот для инвесторов</p>
                            </div>
                        </div>
                    </a>
                    <div
                        id="header-dropdown-trigger"
                        className={`${styles.headerItemLink} ${isDropdownOpen ? styles.active : ''} ${styles.headerItemMobileNone}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className={styles.headerItemWrapper}>
                            <div className={styles.headerItem2}>
                                <p className={styles.headerNavigationText} >Позвонить нам</p>
                                <img src="/chevron-up.svg" alt="" />
                            </div>
                            <div className={`${styles.headerItem2} ${styles.headerItemClone}`}>
                                <p className={styles.headerNavigationText} >Позвонить нам</p>
                                <img src="/chevron-up.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <a className={`${styles.headerItemLink} ${styles.headerItemMobileNone}`} href="">
                        <div className={styles.headerItemWrapper}>
                            <div className={styles.headerItem2}>
                                <p className={styles.headerNavigationText}>Оставить заявку</p>
                                <div className={styles.headerItemUnderline}></div>
                            </div>
                            <div className={`${styles.headerItem2} ${styles.headerItemClone}`}>
                                <p className={styles.headerNavigationText}>Оставить заявку</p>
                                <div className={styles.headerItemUnderline}></div>
                            </div>
                        </div>
                    </a>
                    <div className={`${styles.mobileHeaderItem} ${styles.hoverScroll} ${isDropdownOpen ? styles.active : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <svg className={styles.hoverItem} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5 12L12 23.5L6 22V17.5L9 16L12.5 18L18 12.5L16 9L17.5 6H22L23.5 12Z" stroke="#181818" strokeWidth="1.2" />
                        </svg>
                        <svg className={styles.hoverItem} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5 12L12 23.5L6 22V17.5L9 16L12.5 18L18 12.5L16 9L17.5 6H22L23.5 12Z" stroke="#181818" strokeWidth="1.2" />
                        </svg>
                    </div>
                    <div id="header-menu-trigger" className={styles.headerItemLink} onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
                        <div className={styles.headerItemWrapper}>
                            <div className={styles.headerItem2}>
                                <img src="/menu.svg" alt="" />
                            </div>
                            <div className={`${styles.headerItem2} ${styles.headerItemClone}`}>
                                <img src="/menu.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="header-burger-menu" className={`${styles.headerBurgerMenu} ${isBurgerMenuOpen ? styles.active : ''}`}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <div className={styles.headerBurgerMenuHeader}>
                        <a className={styles.headerBurgerMenuHeaderText} href="#">Оставить заявку</a>
                        <div id="header-menu-trigger" className={`${styles.headerBurgerMenuClose} ${styles.hoverScroll}`} onClick={() => setIsBurgerMenuOpen(false)}>
                            <img className={styles.hoverItem} src="/close.png" alt="" />
                            <img className={styles.hoverItem} src="/close.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.headerBurgerMenuList}>
                        <a className={`${styles.headerBurgerMenuListLink} ${styles.hoverScroll}`} href="#">
                            <p className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Расположение</p>
                            <p className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Расположение</p>
                        </a>
                        <a className={`${styles.headerBurgerMenuListLink} ${styles.hoverScroll}`} href="#">
                            <p className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Характеристики</p>
                            <p className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Характеристики</p>
                        </a>
                        <a className={`${styles.headerBurgerMenuListLink} ${styles.hoverScroll}`} href="#">
                            <p className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Доступные площади</p>
                            <p className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Доступные площади</p>
                        </a>
                    </div>
                </div>
                <div className={styles.headerBurgerMenuFooter}>
                    <div className={styles.headerBurgerMenuFooterRow}>
                        <p className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.secondaryText}`}></p>
                        <a className={`${styles.headerBurgerMenuFooterSmallImage} ${styles.hoverScroll}`} href="">
                            <img className={`${styles.hoverItem}`} src="/whatsapp.svg" alt="" />
                            <img className={`${styles.hoverItem}`} src="/whatsapp.svg" alt="" />
                        </a>
                    </div>
                    <div className={styles.headerBurgerMenuFooterRow}>
                        <p className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.secondaryText}`}></p>
                        <a className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.hoverScroll}`} href="mailto:prom@pik.ru">
                            <p style={{ textDecoration: 'underline' }} className={`${styles.hoverItem}`}>prom@pik.ru</p>
                            <p style={{ textDecoration: 'underline' }} className={`${styles.hoverItem}`}>prom@pik.ru</p>
                        </a>
                    </div>
                    <div className={styles.headerBurgerMenuFooterRow}>
                        <p className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.secondaryText}`}>Для поставщиков</p>
                        <a className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.hoverScroll}`} href="mailto:parametr.mto@pik.ru">
                            <p style={{ textDecoration: 'underline' }} className={`${styles.hoverItem}`}>parametr.mto@pik.ru</p>
                            <p style={{ textDecoration: 'underline' }} className={`${styles.hoverItem}`}>parametr.mto@pik.ru</p>
                        </a>
                    </div>
                </div>
            </div>
            <div id="header-dropdown" className={`${styles.headerDropdown} ${isDropdownOpen ? styles.active : ''}`}>
                <a className={`${styles.headerDropdownItem} ${styles.hoverScroll}`} href="callto:+79032346578">
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src="/shopping-cart.svg" alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел закупок</p>
                            <p className={styles.headerDropdownPhone}>+7 (903) 234-65-78</p>
                        </div>
                    </div>
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src="/shopping-cart.svg" alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел закупок</p>
                            <p className={styles.headerDropdownPhone}>+7 (903) 234-65-78</p>
                        </div>
                    </div>
                </a>
                <a className={`${styles.headerDropdownItem} ${styles.hoverScroll}`} href="callto:+74951536046">
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src="/headphones.svg" alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел продаж</p>
                            <p className={styles.headerDropdownPhone}>+7 (495) 153-60-46</p>
                        </div>
                    </div>
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src="/headphones.svg" alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел продаж</p>
                            <p className={styles.headerDropdownPhone}>+7 (495) 153-60-46</p>
                        </div>
                    </div>
                </a>
            </div>
            <div
                id="header-dropdown-overlay"
                className={`${styles.headerDropdownOverlay} ${isDropdownOpen ? styles.active : ''}`}
                onClick={() => {
                    setIsDropdownOpen(false);
                }}
            >
            </div>
            <div
                id="header-burger-menu-overlay"
                className={`${styles.headerBurgerMenuOverlay} ${isBurgerMenuOpen ? styles.active : ''}`}
                onClick={() => {
                    setIsBurgerMenuOpen(false);
                }}
            >
            </div>
        </>
    );
}