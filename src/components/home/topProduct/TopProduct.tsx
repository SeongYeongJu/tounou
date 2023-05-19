import { styled } from "styled-components";
import BuyBotton from "../../buttons/BuyBotton";

const TopProduct = ({ topProduct }: { topProduct: ItemType }) => {
    return (
        <>
            <TopProductWrapper key={topProduct.id}>
                <TopProductImg src={topProduct?.imageURL} />
                <TopProductTextContainer>
                    <TopProductTitle>{topProduct?.title}</TopProductTitle>
                    <TopProductDescription>
                        {topProduct?.description}
                    </TopProductDescription>
                    <PriceAndButtonBox>
                        <TopProductPrice>{topProduct?.price}</TopProductPrice>
                        <BuyBotton color="yellow" productID={topProduct.id} />
                    </PriceAndButtonBox>
                    <TopProductPromotionText>
                        {topProduct?.promotionText}
                    </TopProductPromotionText>
                </TopProductTextContainer>
            </TopProductWrapper>
        </>
    );
};

export default TopProduct;

const TopProductWrapper = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b2835;
    width: 100vw;
    height: 616px;
    @media screen and (max-width: 1178px) {
        height: 520px;
    }

    @media screen and (max-width: 866px) {
        flex-direction: column;
        height: 880px;
    }

    @media screen and (max-width: 640px) {
        height: 632px;
    }
    @media screen and (max-width: 500px) {
        height: 570px;
    }
`;

const TopProductImg = styled.img`
    width: 1078px;
    height: 766px;
    margin-top: 10rem;
    margin-left: -10rem;
    @media screen and (max-width: 1178px) {
        width: 732px;
        height: 520px;
        margin-top: 8rem;
    }

    @media screen and (max-width: 866px) {
        margin-top: -5rem;
        margin-left: -6rem;
    }

    @media screen and (max-width: 640px) {
        margin-top: -1rem;
        width: 520px;
        height: 374px;
    }
    @media screen and (max-width: 500px) {
        position: absolute;
        top: 30%;
        left: 68%;
        width: 424px;
        height: 300px;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
`;

const TopProductTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 300px;
    @media screen and (max-width: 1178px) {
        margin-right: 0;
        margin-left: -100px;
    }
    @media screen and (max-width: 866px) {
        margin-top: 2rem;
        margin-left: 0rem;
    }
    @media screen and (max-width: 500px) {
        position: absolute;
        top: 70%;
        left: 45%;
        width: 300px;
        transform: translate(-50%, -50%);
    }
`;

const TopProductTitle = styled.span`
    color: #ffff;
    font-size: 1.5rem;
    @media screen and (max-width: 1178px) {
        font-size: 1.06rem;
    }

    @media screen and (max-width: 640px) {
        font-size: 1rem;
    }
`;

const TopProductDescription = styled.span`
    color: #ffff;
    display: block;
    width: 550px;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 1178px) {
        width: 390px;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 640px) {
        width: 300px;
        font-size: 1.8rem;
    }
`;

const PriceAndButtonBox = styled.div`
    display: flex;
    align-items: center;
`;

const TopProductPrice = styled.span`
    color: #ffff;
    font-size: 3rem;
    margin-right: 2rem;
    @media screen and (max-width: 640px) {
        font-size: 2.16rem;
    }
`;

const TopProductPromotionText = styled.p`
    color: #ffc700;
    font-size: 1rem;
    @media screen and (max-width: 640px) {
        font-size: 14px;
    }
    @media screen and (max-width: 500px) {
        display: block;
        width: 300px;
    }
`;
