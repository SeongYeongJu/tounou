import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.tsx";
import { GlobalStyle } from "./global-style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <GlobalStyle />
        <Header />
        <App />
        <Footer />
    </>
);
