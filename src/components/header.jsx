import styles from "./header.module.css";

export default function Header() {
    const base = import.meta.env.BASE_URL || '/';
    return (
        <>
            <header className={styles.header}>
                <a href={base} className={styles.logo}>
                    <img src={`https://optim.tildacdn.com/tild6139-3161-4261-b835-373662373139/-/resize/732x/-/format/webp/parametr-logo.png.webp`} alt="" />
                </a>
                <div className={styles.nav}>
                    {/* <a className={`${styles.headerItemLink} ${styles.headerItemMobileNone}`} href="#">
                        <div className={styles.headerItemWrapper}>
                            <div className={styles.headerItem2}>
                                <img src={`${base}telegram.svg`} alt="" />
                                <p className={styles.headerNavigationText}>Бот для инвесторов</p>
                            </div>
                            <div className={`${styles.headerItem2} ${styles.headerItemClone}`}>
                                <img src={`${base}telegram.svg`} alt="" />
                                <p className={styles.headerNavigationText}>Бот для инвесторов</p>
                            </div>
                        </div>
                    </a> */}
                    <div
                        id="header-dropdown-trigger"
                        className={`${styles.headerItemLink} ${styles.headerItemMobileNone}`}
                        data-dropdown-trigger
                        data-active-class={styles.active}
                    >
                        <div className={styles.headerItemWrapper}>
                            <div className={styles.headerItem2}>
                                <p className={styles.headerNavigationText} >Позвонить нам</p>
                                <img src={`https://static.tildacdn.com/tild6632-3139-4433-b739-626461356335/chevron-up.svg`} alt="" />
                            </div>
                            <div className={`${styles.headerItem2} ${styles.headerItemClone}`}>
                                <p className={styles.headerNavigationText} >Позвонить нам</p>
                                <img src={`https://static.tildacdn.com/tild6632-3139-4433-b739-626461356335/chevron-up.svg`} alt="" />
                            </div>
                        </div>
                    </div>
                    <a className={`${styles.headerItemLink} ${styles.headerItemMobileNone}`} href="#LeadForm">
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
                    <div className={`${styles.mobileHeaderItem} ${styles.hoverScroll}`} data-dropdown-trigger data-active-class={styles.active}>
                        <svg className={styles.hoverItem} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5 12L12 23.5L6 22V17.5L9 16L12.5 18L18 12.5L16 9L17.5 6H22L23.5 12Z" stroke="#181818" strokeWidth="1.2" />
                        </svg>
                        <svg className={styles.hoverItem} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5 12L12 23.5L6 22V17.5L9 16L12.5 18L18 12.5L16 9L17.5 6H22L23.5 12Z" stroke="#181818" strokeWidth="1.2" />
                        </svg>
                    </div>
                    <div id="header-menu-trigger" className={styles.headerItemLink} data-menu-trigger data-active-class={styles.active}>
                        <div className={styles.headerItemWrapper}>
                            <div className={styles.headerItem2}>
                                <img src={`https://static.tildacdn.com/tild3034-3932-4162-b565-333434663261/menu.svg`} alt="" />
                            </div>
                            <div className={`${styles.headerItem2} ${styles.headerItemClone}`}>
                                <img src={`https://static.tildacdn.com/tild3034-3932-4162-b565-333434663261/menu.svg`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="header-burger-menu" className={`${styles.headerBurgerMenu}`} data-active-class={styles.active}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className={styles.headerBurgerMenuHeader}>
                        <a className={styles.headerBurgerMenuHeaderText} href="#LeadForm">Оставить заявку</a>
                        <div id="header-menu-trigger" className={`${styles.headerBurgerMenuClose} ${styles.hoverScroll}`} data-menu-trigger data-active-class={styles.active}>
                            <img className={styles.hoverItem} src={`https://static.tildacdn.com/tild6238-3331-4034-a136-656635663139/close.svg`} alt="" />
                            <img className={styles.hoverItem} src={`https://static.tildacdn.com/tild6238-3331-4034-a136-656635663139/close.svg`} alt="" />
                        </div>
                    </div>
                    <div className={styles.headerBurgerMenuList}>
                        <a className={`${styles.headerBurgerMenuListLink} ${styles.hoverScroll}`} href="#Territory" data-burger-link>
                            <div className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Расположение</div>
                            <div className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Расположение</div>
                        </a>
                        <a className={`${styles.headerBurgerMenuListLink} ${styles.hoverScroll}`} href="#Characters" data-burger-link>
                            <div className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Характеристики</div>
                            <div className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Характеристики</div>
                        </a>
                        <a className={`${styles.headerBurgerMenuListLink} ${styles.hoverScroll}`} href="#Sales" data-burger-link>
                            <div className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Доступные площади</div>
                            <div className={`${styles.headerBurgerMenuListLinkText} ${styles.hoverItem}`}>Доступные площади</div>
                        </a>
                    </div>
                </div>
                <div className={styles.headerBurgerMenuFooter}>
                    <div className={styles.headerBurgerMenuFooterRow}>
                        <p className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.secondaryText}`}></p>
                        <a className={`${styles.headerBurgerMenuFooterSmallImage} ${styles.hoverScroll}`} href="" target="_blank">
                            <img className={`${styles.hoverItem}`} src={`https://static.tildacdn.com/tild3634-6430-4936-a161-666261643138/WhatsApp.svg`} alt="" />
                            <img className={`${styles.hoverItem}`} src={`https://static.tildacdn.com/tild3634-6430-4936-a161-666261643138/WhatsApp.svg`} alt="" />
                        </a>
                    </div>
                    {/* <div className={styles.headerBurgerMenuFooterRow}>
                        <p className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.secondaryText}`}></p>
                        <a className={`${styles.headerBurgerMenuFooterSmallLink} ${styles.hoverScroll}`} href="mailto:prom@pik.ru">
                            <p style={{ textDecoration: 'underline' }} className={`${styles.hoverItem}`}>бот для инвесторов</p>
                            <p style={{ textDecoration: 'underline' }} className={`${styles.hoverItem}`}>бот для инвесторов</p>
                        </a>
                    </div> */}
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
            <div id="header-dropdown" className={`${styles.headerDropdown}`} data-active-class={styles.active}>
                <a className={`${styles.headerDropdownItem} ${styles.hoverScroll}`} href="tel:+79032346578">
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src={`https://static.tildacdn.com/tild6465-6631-4762-b635-666562333231/shopping-cart.svg`} alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел закупок</p>
                            <p className={styles.headerDropdownPhone}>+7 (903) 234-65-78</p>
                        </div>
                    </div>
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src={`https://static.tildacdn.com/tild6465-6631-4762-b635-666562333231/shopping-cart.svg`} alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел закупок</p>
                            <p className={styles.headerDropdownPhone}>+7 (903) 234-65-78</p>
                        </div>
                    </div>
                </a>
                <a className={`${styles.headerDropdownItem} ${styles.hoverScroll}`} href="tel:+74951657214">
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src={`https://static.tildacdn.com/tild6234-3565-4032-a566-353732353833/headphones.svg`} alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел продаж</p>
                            <p className={styles.headerDropdownPhone}>+7 (495) 165-72-14</p>
                        </div>
                    </div>
                    <div className={`${styles.hoverItem} ${styles.headerDropdownPhoneContainer}`}>
                        <div className={styles.headerDropdownIconContainer}>
                            <img src={`https://static.tildacdn.com/tild6234-3565-4032-a566-353732353833/headphones.svg`} alt="" />
                        </div>
                        <div>
                            <p className={styles.headerDropdownSubtitle}>Отдел продаж</p>
                            <p className={styles.headerDropdownPhone}>+7 (495) 165-72-14</p>
                        </div>
                    </div>
                </a>
            </div>
            <div
                id="header-dropdown-overlay"
                className={`${styles.headerDropdownOverlay}`}
                data-dropdown-overlay
                data-active-class={styles.active}
            >
            </div>
            <div
                id="header-burger-menu-overlay"
                className={`${styles.headerBurgerMenuOverlay}`}
                data-menu-overlay
                data-active-class={styles.active}
            >
            </div>
        </>
    );
}