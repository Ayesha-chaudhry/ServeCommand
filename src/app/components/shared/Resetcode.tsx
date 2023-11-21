import { Valueone } from "@/app/context/context";
import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const Resetcode = () => {
  const {setStep} = Valueone()
  return (
    <>
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Flex
        height={"90vh"}
        w={{ "2xl": "fit-content", sm: "fit-content" }}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"48px 32px"}
        gap={{ sm: "14px", "2xl": "32px" }}
      >
        <Box display={"flex"} flexDir={"column"}>
          {/* Reset Password */}
          <Flex
            gap={{ sm: "12px", "2xl": "24px" }}
            flexDir={"column"}
            alignItems={"center"}
            w={{ sm: "100%", md: "120%", "2xl": "360px" }}
            h={"230px"}
          >
            <Image
              src={"/images/Flattened.svg"}
              alt={"Flattenend"}
              width={"33px"}
              height={"34px"}
              flexShrink={0}
            />

            <Flex flexDir={"column"} gap={"12px"}>
              <Text
                alignSelf={"stretch"}
                textAlign={"center"}
                fontSize={{ sm: "26px", "2xl": "30px" }}
                fontFamily={"Chivo"}
                color={"rgba(16, 24, 40, 1)"}
                fontStyle={"normal"}
                fontWeight={{ sm: "700px", "2xl": "400" }}
                lineHeight={"133%"}
              >
                Enter your reset code
              </Text>
              <Box
                w={"360px"}
                h={"120px"}
                fontFamily={"Inter"}
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"24px"}
                color={"rgba(71, 84, 103, 1)"}
                textAlign={"center"}
                alignSelf={"stretch"}
              >
                <Text>
                  Code sent to:{" "}
                  <span style={{ fontWeight: "600" }}>914-497-6340</span>
                </Text>
                {<br />}
                <Text>
                  If your phone number exists in ServeCommand, you will receive
                  a text with your code to update your password.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>

        {/* **************** */}
        <Flex flexDir={"column"} gap={"24px"}>
          {/* Phone */}
          <Flex
            gap={"6px"}
            w={{ sm: "100%", md: "120%", "2xl": "360px" }}
            h={"48px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Input
              type="tel"
              placeholder="-"
              w={{ "2xl": "48px" }}
              height={"48px"}
              p={"0px 16px"}
              flexDir={"column"}
              borderRadius={"6px"}
              border={"1px solid"}
              borderColor={"rgba(226, 232, 240, 1)"}
              bg={"rgba(255, 255, 255, 1)"}
              textAlign={"center"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              colorScheme={"rgba(160, 174, 192, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            />
            <Input
              type="tel"
              placeholder="-"
              w={{ "2xl": "48px" }}
              height={"48px"}
              p={"0px 16px"}
              flexDir={"column"}
              borderRadius={"6px"}
              border={"1px solid"}
              borderColor={"rgba(226, 232, 240, 1)"}
              bg={"rgba(255, 255, 255, 1)"}
              textAlign={"center"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              colorScheme={"rgba(160, 174, 192, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            />
            <Input
              type="tel"
              placeholder="-"
              w={{ "2xl": "48px" }}
              height={"48px"}
              p={"0px 16px"}
              flexDir={"column"}
              borderRadius={"6px"}
              border={"1px solid"}
              borderColor={"rgba(226, 232, 240, 1)"}
              bg={"rgba(255, 255, 255, 1)"}
              textAlign={"center"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              colorScheme={"rgba(160, 174, 192, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            />
            <Input
              type="tel"
              placeholder="-"
              w={{ "2xl": "48px" }}
              height={"48px"}
              p={"0px 16px"}
              flexDir={"column"}
              borderRadius={"6px"}
              border={"1px solid"}
              borderColor={"rgba(226, 232, 240, 1)"}
              bg={"rgba(255, 255, 255, 1)"}
              textAlign={"center"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              colorScheme={"rgba(160, 174, 192, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            />
            <Input
              type="tel"
              placeholder="-"
              w={{ "2xl": "48px" }}
              height={"48px"}
              p={"0px 16px"}
              flexDir={"column"}
              borderRadius={"6px"}
              border={"1px solid"}
              borderColor={"rgba(226, 232, 240, 1)"}
              bg={"rgba(255, 255, 255, 1)"}
              textAlign={"center"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              colorScheme={"rgba(160, 174, 192, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            />
            <Input
              type="tel"
              placeholder="-"
              w={{ "2xl": "48px" }}
              height={"48px"}
              p={"0px 16px"}
              flexDir={"column"}
              borderRadius={"6px"}
              border={"1px solid"}
              borderColor={"rgba(226, 232, 240, 1)"}
              bg={"rgba(255, 255, 255, 1)"}
              textAlign={"center"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              colorScheme={"rgba(160, 174, 192, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            />
          </Flex>
          {/* Button */}
          <Box
            height={"40px"}
            padding={"0px 16px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"8px"}
            alignSelf={"stretch"}
            borderRadius={"6px"}
            bg={"rgba(17, 25, 12, 1)"}
            cursor={"pointer"}
            onClick={() => setStep(4)}
          >
            <Text
              color={"rgba(255, 255, 255, 1)"}
              fontFamily={"Inter"}
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={"600"}
              lineHeight={"24px"}
            >
              Enter Code
            </Text>
          </Box>
        </Flex>

        {/* **************** */}
        {/* Back to Login */}
        <Box
          display={"flex"}
          fontFamily={"Inter"}
          fontSize={"16px"}
          fontStyle={"normal"}
          lineHeight={"24px"}
          width={{ sm: "100%", md: "120%", "2xl": "360px" }}
          height={"24px"}
          px={"16px"}
        >
          <Text fontWeight={"400"} color={"rgba(71, 84, 103, 1)"}>
            Didn’t receive the email?
          </Text>
          <Text fontWeight={"600"} color={"rgba(17, 25, 12, 1)"}>
            Click to resend
          </Text>
        </Box>
        {/* **************************** */}

        <Box
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"8px"}
          width={{ sm: "100%", md: "120%", "2xl": "360px" }}
          height={"40px"}
          px={"16px"}
        >
          <Flex
            height={"40px"}
            padding={"0px 16px"}
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"stretch"}
            color={"rgba(26, 32, 44, 1)"}
            gap={"8px"}
            cursor={"pointer"}
          >
            <Image src={"/images/arrow-left.svg"} alt="arrow" />
            <Text
              fontFamily={"Inter"}
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={"600"}
              lineHeight={"24px"}
              onClick={ () => setStep(0)}
            >
              Back to log in
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>

    <Box
    display={"flex"} ml={"1508px"} 
    width={"400px"}
    height={"72px"}
    padding={"12px 16px"}
    bg={"rgba(17, 25, 12, 1)"}
  >
    <Flex gap={"12px"} justifyContent={"center"} alignItems={"center"}>
      <Image src="/images/check-circle.svg" alt="img" flexShrink={0} w={"24px"} h={"24px"}/>
      <Flex flexDir={"column"}>
      <Text
        w={"332px"}
        h={"24px"}
        alignSelf={"stretch"}
        fontFamily={"Inter"}
        fontSize={"16px"}
        fontStyle={"normal"}
        fontWeight={"700"}
        lineHeight={"24px"}
        color={"rgba(255, 255, 255, 1)"}
      >
        Reset code sent
      </Text>
      <Text
      w={"332px"}
      h={"24px"}
        alignSelf={"stretch"}
        fontFamily={"Inter"}
        fontSize={"16px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"24px"}
        color={"rgba(255, 255, 255, 1)"}
      >
        Code was sent to 914-497-6340
      </Text>
      </Flex>
    </Flex>
  </Box>
  </>
  );
};

export default Resetcode;
