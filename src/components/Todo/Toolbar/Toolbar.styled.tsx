import styled from "styled-components";
import { Typography } from "@mui/material";

export const Toolbar = styled.div`
  background: #1c1d1f;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(0, 2)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TasksIndicators = styled.div`
  min-width: 120px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const TasksCount = styled(Typography)`
  border: 1px solid ${({ theme }) => theme.palette.error.main};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-weight: 700;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.error.main};
`;

export const CompletedTasksCount = styled(TasksCount)`
  border-color: ${({ theme }) => theme.palette.primary.contrastText};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Title = styled(Typography)`
  letter-spacing: 0.2rem !important;
  font-weight: 700 !important;
  font-size: 24px !important;
`;
