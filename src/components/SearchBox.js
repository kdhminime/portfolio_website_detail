import {
  TextField,
  MenuItem,
  Paper,
  MenuList,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e2e2e2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e2e2e2",
      borderWidth: "0.5pt",
    },
  },
});

let history = ["Experience", "Education", "Skills", "Projects"];

let SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [borderStyle, setBorderStyle] = useState("textFieldClose");

  const handleClick = () => {
    if (open) {
      setOpen(false);
      setBorderStyle("textFieldClose");
    } else {
      setOpen(true);
      setBorderStyle("textFieldOpen");
    }
  };

  const linkDetail = () => {
    console.log("hi");
    window.open(
      "https://kdhminime.github.io/portfolio_website_detail/",
      "_self"
    );
  };

  let SearchHistory = () => {
    return (
      <Paper
        sx={{
          width: "35%",
          borderBottomLeftRadius: "30pt",
          borderBottomRightRadius: "30pt",
        }}
      >
        <MenuList>
          {history.map((item) => (
            <MenuItem key={item} onMouseDown={linkDetail}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    );
  };

  return (
    <>
      <div className="searchBoxContainer">
        <CssTextField
          style={{ width: "35%" }}
          onFocus={handleClick}
          onBlur={handleClick}
          className={borderStyle}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {open ? <SearchHistory /> : null}
      </div>
    </>
  );
};

export default SearchBox;
