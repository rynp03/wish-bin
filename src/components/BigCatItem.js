import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  overflow: hidden;
  &:hover {
    .image {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.3s all;
  ${mobile({height: "50vh"})}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Desc = styled.p`
  word-wrap: break-word;
  width: 80%;
  text-align: center;
  padding: 5px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const BigCatItem = ({ data }) => {
  return (
    <Container>
      <Image src={data.img} className="image" />
      <Info>
        <Title>{data.title}</Title>
        <Desc>{data.desc}</Desc>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default BigCatItem;
