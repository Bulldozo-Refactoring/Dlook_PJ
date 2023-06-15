import { useState } from "react";
import { styled } from "styled-components";

function DropDown() {
  const [option, setOption] = useState("");
  const handleOnchange = (e) => {
    console.log("변경된 값: ", e.target.value);
    setOption(e.target.value);
  };

  return (
    <Div>
      <Select value={option} onChange={handleOnchange}>
        <Option key={10}>자유게시판</Option>
        <Option key={20}>Q&A게시판</Option>
      </Select>
    </Div>
  );
}

const Option = styled.option`
  font-size: 13px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;
const Div = styled.div`
  float: left;
`;
const Select = styled.select`
  width: 250px;
  height: 36px;
`;

export default DropDown;
