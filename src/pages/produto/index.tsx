import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./produto.module.css"
import { useEffect, useState } from "react";
import { cadastrarProduto } from '../api/produtoService'
import { listarCategoria } from "../api/categoriaService";
import { erro, notificacao } from "@/utils/toast";
import Toast from "@/components/toast/toast";
import Link from "next/link";

interface Categoria {
  categoriaID: number,
  nome: string
}

const Produto = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [nome, setNomeProduto] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<number[]>([]);




  async function listarCategoriaEmProduto() {
    const lista = await listarCategoria();
    setCategorias(lista.data);
    console.log(lista);

  }

  async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {

      const dados = {
        nome,
        descricao,
        preco,
        imagem,
        categoriaIds: categoriasSelecionadas
      }

      await cadastrarProduto(dados);
      notificacao("Produto cadastrado com sucesso!");

    } catch (error: any) {
      erro(error.message);
    }

  }
  //por ele estar dentro da const produto, quando a página rodar, a função de listar é acionada
  useEffect(() => {
    listarCategoriaEmProduto();

  }, [])

  return (
    <>
      <SubHeader />
      <Toast />
      <main className={styles.main_produto}>
        <section className={`${styles.section_flex} layout_guide`}>
          <h1>Criar produto</h1>
          <form className={styles.formulario_produto} onSubmit={Cadastrar}>
            <div className={styles.campo_form}>
              <label htmlFor="">Nome do produto</label>
              <input type="text"
                value={nome} onChange={(e) => setNomeProduto(e.target.value)} />
            </div>
            <div className={styles.campo_form}>
              <label htmlFor="">Descrição</label>
              <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
            </div>
            <div className={styles.campo_form}>
              <label htmlFor="">Preço(R$)</label>
              <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
            </div>
            <div className={styles.campo_form}>
              <label htmlFor="">Categoria</label>
              <select
                multiple onChange={(e) => setCategoriasSelecionadas(Array.from(e.target.selectedOptions).map((option) => Number(option.value)))}>

                {categorias.map((item) => (
                  <option value={item.categoriaID} key={item.categoriaID}>{item.nome}
                  </option>
                )
                )}
              </select>

              <Link href="/categoria"> Criar categoria </Link>
            </div>
            <div className={styles.campo_form}>
              <label htmlFor="">Imagem do produto</label>
              <input
                type="file" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImagem(e.target.files[0]);
                  }
                }}
              />
            </div>
            <button type="submit" id={styles.btn_salvar}>Salvar</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Produto;
