import { styled } from "styled-components";
import BuyBotton from "../../buttons/BuyBotton";

const TopProduct = ({ topProduct }: { topProduct: ItemType }) => {
    return (
        <>
            <TopProductWrapper key={topProduct.id}>
                <TopProductImg src={topProduct?.imageURL} loading="lazy" />
                <TopProductTextContainer>
                    <TopProductTitle>{topProduct?.title}</TopProductTitle>
                    <TopProductDescription>
                        {topProduct.description.split("\n").map((line) => {
                            return (
                                <>
                                    {line}
                                    <br />
                                </>
                            );
                        })}
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
    align-items: center;
    background-color: #2b2835;
    width: 1440px;
    height: 616px;

    @media screen and (max-width: 1280px) {
        width: 100%;
        height: 492.8px;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 100%;
        height: 880px;
    }

    @media screen and (max-width: 525px) {
        top: 0;
        left: 0;
        height: 287px;
    }

    @media screen and (max-width: 425px) {
        width: 100%;
        min-width: 370px;
        height: 208px;
    }
`;

const TopProductImg = styled.img`
    width: 1078px;
    height: 766px;
    margin-top: 9rem;
    margin-left: -13.5rem;

    @media screen and (max-width: 1280px) {
        width: 862.4px;
        height: 612.8px;
        margin-top: 5rem;
        margin-left: -10.8rem;
    }

    @media screen and (max-width: 820px) {
        width: 732px;
        height: 520px;
        margin-top: 0;
        margin-left: -6rem;
    }

    @media screen and (max-width: 525px) {
        margin-left: -4rem;
        width: 585px;
        height: 416px;
    }

    @media screen and (max-width: 425px) {
        width: 424px;
        height: 300.5px;
        margin-left: -2.5rem;
    }
`;

const TopProductTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 508px;
    height: 238px;
    margin-left: -5rem;

    @media screen and (max-width: 820px) {
        margin-top: 2rem;
        margin-left: 0rem;
    }

    @media screen and (max-width: 525px) {
        width: 290px;
    }
`;

const TopProductTitle = styled.span`
    color: #ffff;
    font-weight: 500;
    font-size: 1rem;

    @media screen and (max-width: 525px) {
        color: black;
    }
`;

const TopProductDescription = styled.span`
    color: #ffff;
    display: block;
    max-width: 550px;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;

    @media screen and (max-width: 525px) {
        color: black;
        font-size: 2rem;
    }
`;

const PriceAndButtonBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const TopProductPrice = styled.span`
    color: #ffff;
    font-size: 2.5rem;
    margin-right: 2rem;

    @media screen and (max-width: 525px) {
        color: black;
        font-size: 2rem;
        font-weight: 400;
        margin-right: 1px;
    }
`;

const TopProductPromotionText = styled.p`
    color: #ffc700;
    font-size: 13px;

    @media screen and (max-width: 525px) {
        color: black;
        opacity: 0.68459356;
        display: block;
        width: 300px;
    }
`;
