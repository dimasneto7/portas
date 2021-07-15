import styles from "../styles/Formulario.module.css";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import Link from "next/link";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#8257e5">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Porta com Presente"
            value={comPresente}
            onChange={(novaPortaComPresente) =>
              setComPresente(novaPortaComPresente)
            }
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Qtde Portas?"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Cartao>
        <Cartao bgcolor="#04d361">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>INICIAR</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
