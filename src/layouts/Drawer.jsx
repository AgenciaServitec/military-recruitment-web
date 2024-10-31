import { useVisibleDrawer } from "../hooks/index.js";

const Drawer = ({ children, dataNavbar }) => {
  const { visibleDrawer, showDrawer, hiddenDrawer } = useVisibleDrawer();

  return (
    <>
      <button
        aria-label="abrir menu"
        style={{ border: "none", background: "none" }}
        onClick={showDrawer}
      >
        {children}
      </button>

      <section
        style={{
          position: "fixed",
          zIndex: "300",
          width: "100vw",
          height: "100vh",
          top: "0",
          right: "0",
          background: "rgba(43, 43, 43, 0.8)",
          transition: "all 0.3s ease-in-out ",
          transform: visibleDrawer ? " translateX(0%)" : " translateX(100%)",
          display: "grid",
          gridTemplateColumns: "25% 1fr",
        }}
      >
        <div onClick={hiddenDrawer}></div>
        <article style={{ background: "#2B2B2B", padding: "2em 1em" }}>
          <ul style={{ listStyle: "none" }}>
            {dataNavbar.navbar.map((item, index) => (
              <ItemLi
                key={index}
                text={item.label}
                path={item.value}
                onHiddenDrawer={hiddenDrawer}
              />
            ))}
            <ItemLi
              text={dataNavbar.itemContact.label}
              path={dataNavbar.itemContact.value}
              onHiddenDrawer={hiddenDrawer}
            />
          </ul>
        </article>
      </section>
    </>
  );
};

export default Drawer;

const ItemLi = ({ text, path = "/", onHiddenDrawer }) => (
  <li
    style={{ padding: "0.3em 0", fontSize: "1.5em" }}
    onClick={onHiddenDrawer}
  >
    <a
      href={path}
      style={{
        textDecoration: "none",
        color: "#fff",
      }}
    >
      {text}
    </a>
  </li>
);
