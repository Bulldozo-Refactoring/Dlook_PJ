import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#D0D3FF"
    }
  });
  
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      color: "rgba(0, 0, 0, 0.85)",
      fontFamily: ["-apple-system", "BlinkMacSystemFont"].join(","),
      "&:hover": {
        color: "#D0D3FF",
        opacity: 1,
        backgroundColor: "#424874"
      },
      "&.Mui-selected": {
        color: "#D0D3FF",
        backgroundColor: "#424874",
        fontWeight: theme.typography.fontWeightMedium
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#424874"
      }
    })
  );
  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "transparent"
    },
    "& .MuiTabs-indicatorSpan": {
      width: "100%",
      backgroundColor: "#635ee7"
    }
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-selected": {
        color: "#fff"
      }
    })
  );

function AlgorithmsMenu() {
    const [value, setValue] = React.useState(0);
    const [subValue, setSubValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleSubChange = (subEvent, newSubValue) => {
      setSubValue(newSubValue);
    };
  
    const activeStyle = {
        color: "#FFCEFE",
        fontWeight: "700",
        
    };

    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ bgcolor: "#fff" }}>
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="문제 추천" />
            <AntTab label="Tab 2" />
            <AntTab label="Tab 3" />
          </AntTabs>
          <Box sx={{ p: 3 }} />
        </Box>
        <Box sx={{ bgcolor: "#2e1534" }}>
          <StyledTabs
            value={subValue}
            onChange={handleSubChange}
            aria-label="styled tabs example"
          >
            <NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/step"><StyledTab label="실력별 추천" /></NavLink>
            <NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/child"><StyledTab label="알고리즘 분류" /></NavLink>            
            <StyledTab label="Connections" />
          </StyledTabs>
          <Box sx={{ p: 3 }} />
        </Box>
      </Box>
    );

//     return (
//     <>
//     <li><p>문제 추천</p>
//         <ul className='sub_menu'>
//             <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/step">실력별 추천</NavLink></li>
//             <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/child">알고리즘 분류</NavLink></li>
//         </ul>
//     </li>
//     <li><p>알고리즘 문제 분석</p>
//         <ul className="sub_menu">
//             <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/type">유형별 분석</NavLink></li>
//             <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/wrong">오답 유형</NavLink></li>
//         </ul>
//     </li>
//     <li><p>랭킹 분석</p>
//         <ul className="sub_menu">=
//             <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/rank">랭킹분석</NavLink></li>
//         </ul>
//     </li>
//     </>
//   );
}

export default AlgorithmsMenu;


/*

import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#D0D3FF"
  }
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: ["-apple-system", "BlinkMacSystemFont"].join(","),
    "&:hover": {
      color: "#D0D3FF",
      opacity: 1,
      backgroundColor: "#424874"
    },
    "&.Mui-selected": {
      color: "#D0D3FF",
      backgroundColor: "#424874",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#424874"
    }
  })
);

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#635ee7"
  }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff"
    }
  })
);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);
  const [subValue, setSubValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubChange = (subEvent, newSubValue) => {
    setSubValue(newSubValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          <AntTab label="Tab 3" />
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
      <Box sx={{ bgcolor: "#2e1534" }}>
        <StyledTabs
          value={subValue}
          onChange={handleSubChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Workflows" />
          <StyledTab label="Datasets" />
          <StyledTab label="Connections" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
*/