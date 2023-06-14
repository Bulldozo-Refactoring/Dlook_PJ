import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

// 재사용 가능한 컴포넌트로 바꾸기
const SubmitButton = styled(Button)({
  margin: "0 auto",
  padding: "10px 20px",
  fontSize: 18,
  lineHeight: 1.8,
  backgroundColor: "#D0D3FF",
  borderColor: "var(--primary-100)",
  borderRadius: 15,
  fontFamily: ["-apple-system", "BlinkMacSystemFont"].join(","),
  "&:hover": {
    backgroundColor: "#D0D3FF",
    borderColor: "var(--primary-100)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#D0D3FF",
    borderColor: "var(--primary-100)",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default SubmitButton;
