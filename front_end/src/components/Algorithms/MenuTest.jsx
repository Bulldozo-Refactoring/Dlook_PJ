import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="문제 추천" />
        <Tab label="알고리즘 문제 분석" />
        <Tab label="랭킹분석" />
      </Tabs>
    </Box>
  );
}

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";

// const AntTabs = styled(Tabs)({
//   borderBottom: "1px solid #e8e8e8",
//   "& .MuiTabs-indicator": {
//     backgroundColor: "#D0D3FF"
//   }
// });

// const AntTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing(1),
//     color: "rgba(0, 0, 0, 0.85)",
//     fontFamily: ["-apple-system", "BlinkMacSystemFont"].join(","),
//     "&:hover": {
//       color: "#D0D3FF",
//       opacity: 1,
//       backgroundColor: "#424874"
//     },
//     "&.Mui-selected": {
//       color: "#D0D3FF",
//       backgroundColor: "#424874",
//       fontWeight: theme.typography.fontWeightMedium
//     },
//     "&.Mui-focusVisible": {
//       backgroundColor: "#424874"
//     }
//   })
// );

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   "& .MuiTabs-indicator": {
//     display: "flex",
//     justifyContent: "space-between",
//     backgroundColor: "transparent"
//   },
//   "& .MuiTabs-indicatorSpan": {
//     width: "100%",
//     backgroundColor: "#635ee7"
//   }
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: "none",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: "rgba(255, 255, 255, 0.7)",
//     "&.Mui-selected": {
//       color: "#fff"
//     }
//   })
// );

// export default function CustomizedTabs() {
//   const [value, setValue] = React.useState(0);
//   const [subValue, setSubValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleSubChange = (subEvent, newSubValue) => {
//     setSubValue(newSubValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ bgcolor: "#fff" }}>
//         <AntTabs value={value} onChange={handleChange} aria-label="ant example">
//           <AntTab label="Tab 1" />
//           <AntTab label="Tab 2" />
//           <AntTab label="Tab 3" />
//         </AntTabs>
//         <Box sx={{ p: 3 }} />
//       </Box>
//       <Box sx={{ bgcolor: "#2e1534" }}>
//         <StyledTabs
//           value={subValue}
//           onChange={handleSubChange}
//           aria-label="styled tabs example"
//         >
//           <StyledTab label="Workflows" />
//           <StyledTab label="Datasets" />
//           <StyledTab label="Connections" />
//         </StyledTabs>
//         <Box sx={{ p: 3 }} />
//       </Box>
//     </Box>
//   );
// }