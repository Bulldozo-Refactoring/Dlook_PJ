import { styled } from "styled-components";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <FooterInner>
          <h2>Footer 내용</h2>
        </FooterInner>
      </div>
    </>
  );
};

const FooterInner = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  width: 1280px;
  height: 100%;
`;
export default Footer;
