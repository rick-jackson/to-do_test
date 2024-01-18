import styled from "styled-components";
import MuiButton from "@mui/material/Button";

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 12px;
  padding: 8px;
`;

export const Button = styled(MuiButton)`
  min-width: 100px;
  height: 56px;
`;
