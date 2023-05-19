import { styled } from "styled-components";
import { Logo } from "../header/Header";
import logoImg from "../../assets/logo/logo.svg";
import SNSimg from "../../assets/icons/sns.png";

const Footer = () => {
    return (
        <FooterContainer>
            <LogoBox>
                <Logo src={logoImg} />
            </LogoBox>
            <FooterContentsBox>
                <FooterContentTitle>Products</FooterContentTitle>
                <FooterContentList>
                    <FooterContentText>HEADPOHNES</FooterContentText>
                    <FooterContentText>EARPOHNES</FooterContentText>
                    <FooterContentText>SPEAKERS</FooterContentText>
                    <FooterContentText>ACCESSORIES</FooterContentText>
                    <FooterContentText>COLLABORATIONS</FooterContentText>
                    <FooterContentText>BEATAUDIO</FooterContentText>
                    <FooterContentText>SPECIAL OFFERS</FooterContentText>
                </FooterContentList>
            </FooterContentsBox>
            <FooterContentsBox>
                <FooterContentTitle>Support</FooterContentTitle>
                <FooterContentList>
                    <FooterContentText>PRODUCT HELP</FooterContentText>
                    <FooterContentText>SERVICE & WARRANTY</FooterContentText>
                    <FooterContentText>REGISTER YOUR BEATS</FooterContentText>
                    <FooterContentText>UPDATE YOUR BEATS</FooterContentText>
                    <FooterContentText>
                        AUTHORIZED SERVICE PROVIDERS
                    </FooterContentText>
                    <FooterContentText>CONTACT SUPPORT</FooterContentText>
                    <FooterContentText>INTERNATIONAL NUMBERS</FooterContentText>
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
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #191720;
    width: 100vw;
    min-width: 60vw;
    height: 344px;
    @media screen and (max-width: 866px) {
        flex-direction: column;
        align-items: flex-start;
        height: 900px;
    }
`;

const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    height: 240px;
    @media screen and (max-width: 866px) {
        justify-content: center;
        width: 100%;
        height: 100px;
    }
`;

const FooterContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 230px;
    height: 240px;
    @media screen and (max-width: 866px) {
        width: 100%;
        border-bottom: 1px solid #3d3c3c;
        line-height: 1rem;
    }
`;

const FooterContentTitle = styled.h1`
    color: #ffff;
    margin-block: 0;
    /* margin-inline: 0; */
    font-size: 1.5rem;
    @media screen and (max-width: 866px) {
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
    @media screen and (max-width: 866px) {
        display: block;
        width: 300px;
        margin-left: 3rem;
    }
`;

const SNSIcons = styled.img`
    width: 168px;
    height: 36px;
    margin-top: 28px;
    @media screen and (max-width: 866px) {
        margin-left: 3rem;
    }
`;
