import styled from "styled-components";
import BigCatItem from "./BigCatItem";
import { bigCats } from "../data";
import { mobile } from "../responsive";

const Conatainer = styled.div`
  display: flex;
  padding: 0px 20px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const BigCategory = () => {
  return (
    <Conatainer>
      {bigCats.map((cat) => (
        <BigCatItem data={cat} key={cat.id} />
      ))}
    </Conatainer>
  );
};

export default BigCategory;
