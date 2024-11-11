import cls from "../../styles/Header.module.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import closeBtn from "../../assets/close_btn.svg";
import openBtn from "../../assets/open_modal.svg";

const Header = () => {
  const [lang, setLang] = useState("RU");
  const [modal, setModal] = useState(true);
  const changeLang = (value: string) => {
    setLang(value);
  };
  const navbarValue = [
    {
      text: "Програмы питания",
      href: "#",
    },
    {
      text: "Бизнес-ланчи",
      href: "#",
    },
    {
      text: "Gastro Shop",
      href: "#",
    },
    {
      text: "О нас",
      href: "#",
    },
    {
      text: "Блог",
      href: "#",
    },
  ];
  const langValue = ["RU", "UA", "EN"];
  return (
    <header className={cls.Header}>
      <div className={cls.Logo}>
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={cls.Content}>
        <div>
          <ul className={cls.Navbar}>
            {navbarValue.map((item) => {
              return (
                <li key={item.text}>
                  <a href={item.href}>{item.text}</a>
                </li>
              );
            })}
          </ul>
          <ul className={cls.Language}>
            {langValue.map((item) => {
              return (
                <li key={item}>
                  <button
                    value={item}
                    className={
                      item == lang
                        ? [cls.LangBtn, cls.active].join(" ")
                        : cls.LangBtn
                    }
                    onClick={(e) => {
                      changeLang(e.target.value);
                    }}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={cls.Number}>
          <h3>+38 (068) 949 - 49 -19</h3>
        </div>
      </div>
      <button
        className={cls.BurgerOpen}
        onClick={() => setModal((prev) => (prev = !prev))}
      >
        <img src={openBtn} alt="" />
      </button>

      {modal ? (
        <div className={cls.Burger}>
          <div className={cls.BurgerMenu}>
            <div className={cls.BurgerContent}>
              <ul className={cls.Navbar}>
                {navbarValue.map((item) => {
                  return (
                    <li key={item.text}>
                      <a href={item.href}>{item.text}</a>
                    </li>
                  );
                })}
              </ul>

              <div className={cls.BurgerLang}>
                <button
                  className={cls.BurgerClose}
                  onClick={() => setModal((prev) => (prev = !prev))}
                >
                  <img src={closeBtn} alt="" />
                </button>
                <ul className={cls.Language}>
                  {langValue.map((item) => {
                    return (
                      <li key={item}>
                        <button
                          value={item}
                          className={
                            item == lang
                              ? [cls.LangBtn, cls.active].join(" ")
                              : cls.LangBtn
                          }
                          onClick={(e) => {
                            changeLang(e.target.value);
                          }}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={cls.Number}>
              <h3>+38 (068) 949 - 49 -19</h3>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
