import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Backupfile from "../shared/Backupfile";

const Navbar = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        gap={"16px"}
        w={{ sm: "90%", md: "100%", "2xl": "1864px" }}
        backgroundColor={"#F7FAFC"}
      >
        {/* Main */}
        <Box
          display={"flex"}
          gap={{ sm: "2px", ml: "14px", "2xl": "8px" }}
          justifyContent={{ sm: "space-between", "2xl": "space-between" }}
          alignItems={{ sm: "start", md: "center" }}
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
          p={{ sm: "25px 10px", md:"20px", lg:"25px 20px", xl:"24px 32px", "2xl": "24px 32px" }}
          backgroundColor={"#F7FAFC"}
        >
          {/* Left Side */}
          <Flex
            flexDir={"column"}
            alignItems={"flex-start"}
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
              color={"rgba(0, 0, 0, 0.87)"}
            >
              Import Data
            </Text>
            <Text
              width={{ "2xl": "386px" }}
              height={{ "2xl": "24px" }}
              fontSize={{ sm: "14px", lg: "18px", "2xl": "16px" }}
              fontWeight={"400px"}
              fontStyle={"normal"}
              fontFamily={"Inter"}
            >
              Import data from the following tools in a few clicks.
            </Text>
          </Flex>
          {/* Right Side */}
          <Box
            display={"flex"}
            textAlign={"center"}
            alignItems={"center"}
            gap={{ sm: "2px", "2xl": "8px" }}
            p={{ sm: "0px 2px", "2xl": "0px 12px" }}
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
              fontSize={{ sm: "12px", lg: "12px", "2xl": "14px" }}
              fontFamily={"Inter"}
              fontStyle={"normal"}
              fontWeight={"600px"}
              w={"91px"}
              h={"20px"}
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
        {/* <Card /> */}
        <Box
          w={{
            sm: "92%",
            mm: "95%",
            ml: "90%",
            md: "50%",
            lg: "40%",
            xl:"30%",
            "2xl": "431px",
          }}
          h={{ "2xl": "194px" }}
          bg={"rgba(255, 255, 255, 1)"}
          p={{ sm: "10px", "2xl": "24px" }}
          border={"1px solid"}
          borderColor={"rgba(17, 25, 12, 0.30)"}
          borderRadius={"6px"}
          ml={{ sm: "10px", md:"20px", xl:"32px", "2xl": "32px" }}
        >
          <Box w={{ "2xl": "383px" }} h={{ "2xl": "146px" }}>
            <Flex
              flexDir={"column"}
              gap={{ sm: "2px", "2xl": "12px" }}
            >
              <Flex w={{ "2xl": "383px" }} h={{ "2xl": "50px" }}>
                <Box
                  flex={{ "2xl": 2 }}
                  display={"flex"}
                  w={{ "2xl": "282px" }}
                  h={{ "2xl": "50px" }}
                >
                  <Flex
                    w={{ sm: "132px", mm: "190px", ml:"200px", md:"220px", lg:"240px", xl:"260px", "2xl": "282px" }}
                    h={{ "2xl": "50px" }}
                  >
                    <Image
                      src={"/images/Logo.png"}
                      alt="logo"
                      width={{ sm: "110px", lg: "160px", "2xl": "178px" }}
                      height={{ "2xl": "50px" }}
                    />
                  </Flex>
                  <Backupfile />
                  {/* <Flex
                    flex={1}
                    justify={"center"}
                    alignItems={"center"}
                    p={{ "2xl": "0px 12px" }}
                    w={"91px"}
                    h={"32px"}
                    gap={{ "2xl": "8px" }}
                    border={"1px solid"}
                    borderRadius={"6px"}
                  >
                    <Image
                      src={"/images/arrow.png"}
                      alt="arrow"
                      w={"14px"}
                      h={"14px"}
                    />
                    <Box
                      w={{ "2xl": "45px" }}
                      h={{ "2xl": "20px" }}
                      fontFamily={"Inter"}
                      fontSize={{ sm: "14px", "2xl": "14px" }}
                      fontWeight={"600px"}
                      color={"black"}
                      _hover={{ background: "none" }}
                    >
                      Import
                    </Box>
                  </Flex> */}
                </Box>
              </Flex>

              <Flex
                flexDir={"column"}
                w={{ "2xl": "383px" }}
                h={"84px"}
                gap={{ "2xl": "8px" }}
              >
                <Text
                  width={{ "2xl": "172px" }}
                  height={{ "2xl": "28px" }}
                  fontFamily={"Inter"}
                  fontSize={{ "2xl": "20px" }}
                  fontWeight={{ sm: "800px", "2xl": "500px" }}
                  color={"rgba(0, 0, 0, 1"}
                  fontStyle={"normal"}
                  alignItems={"flex-start"}
                  alignSelf={"stretch"}
                >
                  Hindsite Software
                </Text>
                <Text
                  bg={"white"}
                  w={{ "2xl": "383px" }}
                  h={{ "2xl": "48px" }}
                  color={"rgba(74, 75, 87, 1)"}
                  fontFamily={"Inter"}
                  fontSize={{ sm: "13px", lg: "16px", "2xl": "16px" }}
                  fontWeight={"400px"}
                  fontStyle={"normal"}
                >
                  Switch from Hindsite to ServeCommand in just a few clicks.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
