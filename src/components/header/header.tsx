import styles from "./header.module.css";

const Header = () => {
    return (
        <header id={styles.cabecalho}>
            <div className={`${styles.conteudo_cabecalho} layout_guide`}>
                <img src="../imgs/Logo_VH_Burguer.svg" alt="Logo da 
                hamburgueria VH_burguer" id={styles.logo_cabecalho} />
                <nav id={styles.links_cabecalho}>
                    <a href="">Destaques</a>
                    <a href="">Cardápio</a>
                    <a href="">Unidades</a>
                    <a href="">Login</a>
                </nav>
                <button id={styles.botao_menu}>
                    <img src="../imgs/icon_hamburguer.svg"
                        alt="Botão de menu" />
                </button>
            </div>
        </header>
    )
}

export default Header;