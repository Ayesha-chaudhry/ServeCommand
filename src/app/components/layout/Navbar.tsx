import { Box, Text, Image } from "@chakra-ui/react";
import Card from "../shared/Card";

const Navbar = () => {
  return (
    <>
      <Box
        w={{ sm: "90%", md: "100%", "2xl": "1864" }}
        backgroundColor={"#F7FAFC"}
      >
        {/* Main */}
        <Box
          display={"flex"}
          gap={{ sm: "2px", ml: "14px", "2xl": "8px" }}
          justifyContent={{ sm: "space-between", "2xl": "space-between" }}
          alignItems={{ sm: "start" }}
          width={{
            sm: "100%",
            mm: "100%",
            ml: "90%",
            md: "100%",
            lg: "100%",
            xl: "100%",
            "2xl": "1864px",
          }}
          height={{ "2xl": "120px" }}
          px={{ sm: "10px", "2xl": "32px" }}
          py={{ sm: "25px", "2xl": "24px" }}
          backgroundColor={"#F7FAFC"}
        >
          {/* Left Side */}
          <Box
            width={{
              sm: "160%",
              mm: "170%",
              ml: "160%",
              md: "130%",
              "2xl": "1655px",
            }}
            height={{ "2xl": "72px" }}
            color={"rgba(0, 0, 0, 0.87)"}
          >
            <Text
              fontSize={{ sm: "18px", lg: "22px", "2xl": "30px" }}
              fontFamily={"Chivo"}
              fontWeight={{ sm: "600", "2xl": "400px" }}
              fontStyle={"normal"}
              width={{ "2xl": "176px" }}
              height={{ "2xl": "40px" }}
              color={"rgba(0,0,0,0.87)"}
            >
              Import Data
            </Text>
            <Text
              width={{ "2xl": "386px" }}
              height={{ "2xl": "24px" }}
              fontSize={{ sm: "14px", lg: "18px", "2xl": "16px" }}
              fontWeight={"400px"}
              fontStyle={"normal"}
            >
              Import data from the following tools in a few clicks.
            </Text>
          </Box>
          {/* Right Side */}
          <Box
            display={"flex"}
            textAlign={"center"}
            alignItems={"center"}
            gap={{ sm: "2px", "2xl": "8px" }}
            px={{ sm: "4px", "2xl": "12px" }}
            py={{ sm: "2px" }}
            width={{
              sm: "100%",
              mm: "80%",
              ml: "80%",
              md: "150px",
              lg: "160px",
              "2xl": "137px",
            }}
            height={{ "2xl": "32px" }}
            border={"1px solid"}
            borderRadius={{ sm: "4px", "2xl": "6px" }}
          >
            <Text
              fontSize={{ sm: "12px", lg: "14px", "2xl": "14px" }}
              w={{ "2xl": "91px" }}
              h={{ "2xl": "20px" }}
            >
              Call to Action
            </Text>
            <Image
              src={"/images/plus.svg"}
              alt="plus"
              w={{ "2xl": "14px" }}
              height={{ "2xl": "14px" }}
            />
          </Box>
        </Box>
        <Card />
      </Box>
    </>
  );
};

export default Navbar;
