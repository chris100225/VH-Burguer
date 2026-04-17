import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./home.module.css";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                {/* <section id={styles.banner}>
                    <h1 className={styles.titulo}>BEM-VINDO AO VH BURGUER</h1>
                    <img src="../imgs/foto_de_hamburgueres.png" alt="Imagem de três hamburgueres"
                        id={styles.img_banner} />
                    <div id={styles.botoes_banner}>
                        <button id={styles.botao_atendente}>Chamar atendente</button>
                        <button id={styles.botao_cardapio}>Ver cardápio</button>
                    </div>
                </section> */}

                <section id={styles.destaque}>

                    <div id={styles.container_destaque}>

                        <div id={styles.mais_pedidos}>

                            <p className={styles.txt_menor}>Os queridinhos da galera</p>
                            <p className={styles.txt_maior}>MAIS PEDIDOS</p>

                        </div>

                        <div id={styles.container_dois}>

                            <div className={styles.lanches}>

                                <p className={styles.txt_menor}>Lanches com</p>
                                <p className={styles.txt_maior}>MUITO BACON</p>

                            </div>

                            <div className={styles.combos}>

                                <p className={styles.txt_menor}>Se tiver muita fome</p>
                                <p className={styles.txt_maior}>SUPER COMBOS</p>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
            <Footer />
        </>
    );
}
export default Home;
