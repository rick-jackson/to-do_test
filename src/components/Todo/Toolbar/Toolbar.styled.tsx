import styled from "styled-components";
import { Typography } from "@mui/material";

export const Toolbar = styled.div`
  background: #1c1d1f;
  color: #fff;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TasksIndicators = styled.div`
  min-width: 120px;
  display: flex;
  gap: 4px;
`;

export const TasksCount = styled(Typography)`
  border: 1px solid #f75851d6;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  color: #f75851d6;
  border-radius: 2px;
  font-weight: 700;
`;

export const CompletedTasksCount = styled(TasksCount)`
  border-color: #fff;
  color: #fff;
`;

export const Title = styled(Typography)`
  letter-spacing: 0.2rem !important;
  font-weight: 700 !important;
  font-size: 24px !important;
`;
