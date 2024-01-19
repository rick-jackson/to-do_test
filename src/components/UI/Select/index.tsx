import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { type SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch, useAppSelector } from "../../../common/hooks/store";
import { filterTasks } from "../../../store/actions/tasksActions";
import { filterConfig } from "../../../common/configs/filter";

const Select: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.tasks);

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(filterTasks(e.target.value as keyof typeof filterConfig));
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
      <MuiSelect value={filter} onChange={handleChange} color="error">
        {Object.entries(filterConfig).map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
