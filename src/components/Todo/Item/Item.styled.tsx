import {
  Typography,
  ListItem,
  type TypographyProps,
  type ListItemProps,
} from "@mui/material";
import styled from "styled-components";

export const Item = styled(ListItem)<{ $completed: boolean } & ListItemProps>`
  color: #fff;
  ${({ $completed }) => $completed && "background: #1C1D1F; color: grey"}
`;

export const Date = styled(Typography)<TypographyProps>`
  white-space: pre-line;
  font-size: 11px !important;
`;
