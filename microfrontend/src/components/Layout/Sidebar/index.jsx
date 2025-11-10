import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
    setOpen(false);
  }

  return (
    <>
      {/* Botão para abrir/fechar no mobile */}
      <button
        className={styles.toggle}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <div className={styles.inner}>
          <div className={styles.profile}>
            <img
              src="https://ui-avatars.com/api/?name=Usuário&background=1976d2&color=fff"
              alt="Avatar do usuário"
              className={styles.avatar}
            />
            <h3 className={styles.name}>Usuário</h3>
          </div>

          <nav className={styles.nav}>
            <button onClick={() => handleNavigate("/")} className={styles.navBtn}>
              🏠 Início
            </button>
            <button onClick={() => handleNavigate("/estoques")} className={styles.navBtn}>
              📦 Estoques
            </button>
            <button onClick={() => handleNavigate("/alugueis")} className={styles.navBtn}>
              🤝 Aluguéis
            </button>
            <button onClick={() => alert("Configurações em breve!")} className={styles.navBtn}>
              ⚙️ Configurações
            </button>
            <button onClick={() => alert("Saindo...")} className={`${styles.navBtn} ${styles.exit}`}>
              🚪 Sair
            </button>
          </nav>
        </div>
      </aside>

      {/* Fundo escuro (só aparece no mobile) */}
      <div
        className={`${styles.backdrop} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
