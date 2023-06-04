import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.tsx";
import { GlobalStyle } from "./global-style";
import { styled } from "styled-components";

const LayoutWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LayoutContainer = styled.section`
    position: relative;
    width: 100%;
    max-width: 1440px;
    min-width: 370px;
    overflow: hidden;
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <LayoutWrapper>
        <LayoutContainer>
            <GlobalStyle />
            <Header />
            <App />
            <Footer />
        </LayoutContainer>
    </LayoutWrapper>
);
