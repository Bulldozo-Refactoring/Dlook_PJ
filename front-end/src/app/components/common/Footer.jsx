import { styled } from 'styled-components';

const Footer = () => {
  return (
    <>
      <div id="footer">
        <FooterInner></FooterInner>
      </div>
    </>
  );
};

const FooterInner = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  width: 1280px;
  height: 50px;
`;
export default Footer;
