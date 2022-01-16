import { Button, FormControl, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const Login = ({ setOpenPopup }) => {
  return (
    <div>
      <div className="absolute top-2 right-0 font-extrabold active:scale-95">
        <Button
          style={{ color: "red" }}
          onClick={setOpenPopup.bind(this, false)}
        >
          <CloseIcon />
        </Button>
      </div>

      <div className="flex flex-col items-center text-xl px-4 py-8">
        <h1 className="mb-4 text-lg">Log In as Admin</h1>
        <form>
          <FormControl>
            <TextField
              label="Password"
              type="password"
              name="user[password]"
              autoComplete="current-password"
              style={{ paddingBottom: "24px" }}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Login;
