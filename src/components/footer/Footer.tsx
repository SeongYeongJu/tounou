import { styled } from "styled-components";
import logoImg from "../../assets/logo/logo.svg";
import SNSimg from "../../assets/icons/sns.png";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBox>
                <LogoBox>
                    <FooterLogo src={logoImg} />
                </LogoBox>
                <FooterContentsBox>
                    <FooterContentTitle>Products</FooterContentTitle>
                    <FooterContentList>
                        <FooterContentText>HEADPHONES</FooterContentText>
                        <FooterContentText>EARPHONES</FooterContentText>
                        <FooterContentText>SPEAKERS</FooterContentText>
                        <FooterContentText>ACCESSORIES</FooterContentText>
                        <FooterContentText>COLLABORATIONS</FooterContentText>
                        <FooterContentText>BEATSAUDIO</FooterContentText>
                        <FooterContentText>SPECIAL OFFERS</FooterContentText>
                    </FooterContentList>
                </FooterContentsBox>
                <FooterContentsBox>
                    <FooterContentTitle>Support</FooterContentTitle>
                    <FooterContentList>
                        <FooterContentText>PRODUCT HELP</FooterContentText>
                        <FooterContentText>
                            SERVICE & WARRANTY
                        </FooterContentText>
                        <FooterContentText>
                            REGISTER YOUR BEATS
                        </FooterContentText>
                        <FooterContentText>UPDATE YOUR BEATS</FooterContentText>
                        <FooterContentText>
                            AUTHORIZED SERVICE PROVIDERS
                        </FooterContentText>
                        <FooterContentText>CONTACT SUPPORT</FooterContentText>
                        <FooterContentText>
                            INTERNATIONAL NUMBERS
                        </FooterContentText>
                    </FooterContentList>
                </FooterContentsBox>
                <FooterContentsBox>
                    <FooterContentTitle>Company</FooterContentTitle>
                    <FooterContentList>
                        <FooterContentText>PRODUCT HELP</FooterContentText>
                        <FooterContentText>NEWS AND EVENTS</FooterContentText>
                        <FooterContentText>PROMOTION TERMS</FooterContentText>
                        <FooterContentText>PRIVACY POLICY</FooterContentText>
                        <FooterContentText>TRADEMARK</FooterContentText>
                        <FooterContentText>TERMS OF USE</FooterContentText>
                        <FooterContentText>COOKIES</FooterContentText>
                    </FooterContentList>
                </FooterContentsBox>
                <FooterContentsBox>
                    <FooterContentTitle>Follow Us</FooterContentTitle>
                    <SNSIcons src={SNSimg} />
                </FooterContentsBox>
            </FooterBox>
            <CopyRightText>
                Copyright © 2020 Apple Inc. - All rights reserved.
            </CopyRightText>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #191720;
    width: 1440px;
    @media screen and (max-width: 1280px) {
        width: 1280px;
    }

    @media screen and (max-width: 1024px) {
        width: 1024px;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: flex-start;
        height: 980px;
        width: 100%;
    }
`;

const FooterBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #191720;
    width: 100%;
    height: 329px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: flex-start;
        height: 980px;
    }
`;

const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    height: 240px;

    @media screen and (max-width: 820px) {
        justify-content: center;
        width: 100%;
        height: 50px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
`;

const FooterLogo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: 1;
`;

const FooterContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 230px;
    height: 240px;

    @media screen and (max-width: 820px) {
        width: 100%;
        border-bottom: 1px solid #3d3c3c;
        line-height: 20px;
        margin-bottom: 1rem;
    }
`;

const FooterContentTitle = styled.h1`
    color: #ffff;
    margin-block: 0;
    margin-bottom: 8px;
    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (max-width: 820px) {
        font-size: 18px;
        margin-block: 0.67rem;
        margin-left: 3rem;
    }
`;

const FooterContentList = styled.ul`
    list-style: none;
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
`;

const FooterContentText = styled.li`
    color: #b8b8b8;
    font-size: 14px;
    margin-bottom: 6px;
    cursor: pointer;

    @media screen and (max-width: 820px) {
        display: block;
        width: 300px;
        margin-left: 3rem;
    }
`;

const SNSIcons = styled.img`
    width: 168px;
    height: 36px;
    margin-top: 28px;

    @media screen and (max-width: 820px) {
        margin-left: 3rem;
        margin-top: 1rem;
    }
`;

const CopyRightText = styled.span`
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 21px;

    @media screen and (max-width: 820px) {
        display: none;
    }
`;
