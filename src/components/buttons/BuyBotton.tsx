import { styled } from "styled-components";

interface ButtonProps {
    color: string;
    productID: string;
}

// color로 버튼 폰트 색상, 배경 색상을 정합니다.
const BuyBotton = (props: ButtonProps) => {
    const { color, productID } = props;

    const buyProduct = (id: string) => {
        console.log("상품을 구매합니다. 상품 ID: ", id);
    };

    return (
        <StyledButton color={color} onClick={() => buyProduct(productID)}>
            BUY NOW
        </StyledButton>
    );
};

export default BuyBotton;

const StyledButton = styled.button`
    cursor: pointer;
    width: 170px;
    height: 42px;
    border: none;
    border-radius: 1.5rem;
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => (props.color === "yellow" ? "black" : "white")};
    background: ${(props) =>
        props.color === "yellow" ? "#ffc700" : "#000000"};
    &:hover {
        transform: scale(1.02);
        transition: 0.2s;
    }
`;
