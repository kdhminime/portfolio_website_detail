import Name from "./components/Name";
import SearchBox from "./components/SearchBox";
import TopLinks from "./components/TopLinks";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} sx={{ marginLeft: "12%" }}>
      <Tab
        icon={<SearchIcon style={{ fontSize: 20 }} />}
        iconPosition="start"
        label="All"
        sx={{
          minWidth: "80px",
          fontSize: "14px",
          padding: "6px 12px",
          textTransform: "none",
        }}
        disableRipple
      />
      <Tab
        icon={<BusinessCenterIcon style={{ fontSize: 20 }} />}
        iconPosition="start"
        label="Projects"
        sx={{
          minWidth: "80px",
          fontSize: "14px",
          padding: "6px 12px",
          textTransform: "none",
        }}
        disableRipple
      />
      <Tab
        icon={<ImageIcon style={{ fontSize: 20 }} />}
        iconPosition="start"
        label="Image"
        sx={{
          minWidth: "80px",
          fontSize: "14px",
          padding: "6px 12px",
          textTransform: "none",
        }}
        disableRipple
      />
      <Tab
        icon={<NewspaperIcon style={{ fontSize: 20 }} />}
        iconPosition="start"
        label="News"
        sx={{
          minWidth: "80px",
          fontSize: "14px",
          padding: "6px 12px",
          textTransform: "none",
        }}
        disableRipple
      />
    </Tabs>
  );
}

function App() {
  return (
    <>
      <Name />
      <SearchBox />
      <TopLinks />
      <MyTabs />
    </>
  );
}

export default App;
