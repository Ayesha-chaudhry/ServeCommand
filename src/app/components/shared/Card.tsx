"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Backupfile from "./Backupfile";
import Uploadedfile from "./Uploadedfile";

const Card = () => {
  return (
    <Flex
      w={{
        sm: "90%",
        mm: "96%",
        ml: "90%",
        md: "50%",
        lg: "43%",
        xl: "30%",
        "2xl": "431px",
      }}
      h={{ "2xl": "194px" }}
      mx={{ sm: "10px", "2xl": "32px" }}
      p={{ sm: "10px", "2xl": "24px" }}
      flexDir={"column"}
      alignItems={"flex-start"}
      gap={"10px"}
      flex-flexShrink={0}
      border={"1px solid"}
      borderColor={"rgba(17, 25, 12, 0.30)"}
      borderRadius={"6px"}
      backgroundColor={"rgba(255, 255, 255, 1)"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        h={"50px"}
      >
        {/* Right Side */}
        <Box w={"282px"} h={"50px"}>
          <Image
            src={"/images/Logo.png"}
            alt="logo"
            width={{ sm: "120px", lg: "160px", "2xl": "178px" }}
            height={{ "2xl": "50px" }}
          />
        </Box>
        {/* Left Side */}
        {/* <Uploadedfile/> */}
        <Backupfile />
        {/* <Box display={"flex"} gap={"8px"} alignItems={"center"} h={"32px"} w={"91px"}  p={"12px"} border={"1px solid"} borderColor={"#11190C"} borderRadius={"6px"}>
                <Box>
                    <Image src={"/images/arrow.png"} alt='arrow' w={"14px"} h={"14px"}/>
                </Box>
                <Box w={"45px"} h={"20px"} fontFamily={"Inter"} fontSize={"14px"} fontWeight={"600px"}>Import</Box>
            </Box> */}
      </Box>

      <Flex flexDir={"column"} w={{ "2xl": "383px" }} h={"84px"} gap={"8px"}>
        <Text
          width={{ "2xl": "172px" }}
          height={{ "2xl": "28px" }}
          fontFamily={"Inter"}
          fontSize={{ "2xl": "20px" }}
          fontWeight={{ sm: "800px", "2xl": "500px" }}
          color={"#000"}
          fontStyle={"normal"}
        >
          Hindsite Software
        </Text>
        <Text
          mt={{ "2xl": "8px" }}
          w={{ "2xl": "383px" }}
          h={{ "2xl": "48px" }}
          color={"#4A4B57"}
          fontFamily={"Inter"}
          fontSize={{ sm: "14px", lg: "16px", "2xl": "16px" }}
          fontWeight={"400px"}
          fontStyle={"normal"}
        >
          Switch from Hindsite to ServeCommand in just a few clicks.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
