import React from "react";
import { Box, Image } from "@chakra-ui/react";
import NavBarButton1 from "./Svgs/NavBarButton1";
import NavBarButton2 from "./Svgs/NavBarButton2";
import NavBarButton3 from "./Svgs/NavBarButton3";
import Setting from "./Svgs/Setting";
import User from "./Svgs/User";
const Sidebar = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"100vh"}
      width={"56px"}
      bg={{ "2xl": "" }}
      borderRight={"1px solid"}
      borderColor={"rgba(17, 25, 12, 0.30)"}
    >
      <Box>
        <Image
          src={"/images/Flattened.svg"}
          alt={"Flattenend"}
          width={"33px"}
          height={"34px"}
          my={"32px"}
          mx={"auto"}
          flexShrink={0}
        />
        <Box
          width={"40px"}
          height={"40px"}
          borderRadius={"5px"}
          p={"8px"}
          mb={"16px"}
        >
          <NavBarButton1 />
        </Box>
        <Box
          width={"40px"}
          height={"40px"}
          borderRadius={"5px"}
          p={"8px"}
          mb={"16px"}
        >
          <NavBarButton2 />
        </Box>
        <Box width={"40px"} height={"40px"} borderRadius={"5px"} p={"8px"}>
          <NavBarButton3 />
        </Box>
      </Box>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Box
          width={"40px"}
          height={"40px"}
          backgroundColor={"#f4f5f5"}
          gap={"8px"}
          borderRadius={"5px"}
          p={"8px"}
        >
          <Setting />
        </Box>
        <Box
          width={"32px"}
          height={"32px"}
          borderRadius={"5px"}
          p={"6.667px"}
          my={"24px"}
        >
          <User />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
