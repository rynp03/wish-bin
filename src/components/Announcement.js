import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ff5d5d;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over ₹1000</Container>;
};

export default Announcement;
