import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  Image,
} from "@chakra-ui/react";
import { forgotPassword as initiateForgotPassword } from "./auth";
import { Contextvalue } from "@/app/context/context";

const Resetpassword: React.FC = () => {
  const { username, setStep } = Contextvalue();

  const handleForgotPassword = async () => {
    setStep(2);
    try {
      await initiateForgotPassword(username);
    } catch (error) {
      console.error("Forgot password failed:", error);
    }
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Flex
        height={"100vh"}
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
            h={"158px"}
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
                w={{ "2xl": "360px" }}
                height={"40px"}
                alignSelf={"stretch"}
                textAlign={"center"}
                fontSize={{ sm: "26px", "2xl": "30px" }}
                fontFamily={"Chivo"}
                color={"rgba(16, 24, 40, 1)"}
                fontStyle={"normal"}
                fontWeight={{ sm: "700px", "2xl": "400" }}
                lineHeight={"133%"}
              >
                Reset Password
              </Text>
              <Text
                w={"360px"}
                h={"48px"}
                fontFamily={"Inter"}
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"24px"}
                color={"rgba(71, 84, 103, 1)"}
                textAlign={"center"}
                alignSelf={"stretch"}
              >
                No worries, we will help you reset your password.
              </Text>
            </Flex>
          </Flex>
        </Box>

        {/* **************** */}
        <Flex flexDir={"column"} gap={"24px"}>
          {/* Phone */}
          <Flex
            gap={"4px"}
            flexDir={"column"}
            w={{ sm: "100%", md: "120%", "2xl": "360px" }}
            h={"98px"}
          >
            <FormLabel
              w={{ "2xl": "360px" }}
              h={"16px"}
              fontFamily={"Inter"}
              fontSize={{ sm: "14px", "2xl": "12px" }}
              fontStyle={"normal"}
              fontWeight={"600"}
              color={"rgba(0, 0, 0, 0.64)"}
              lineHeight={"16px"}
              letterSpacing={"0.3px"}
            >
              Phone Number
            </FormLabel>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              w={{ "2xl": "360px" }}
              height={"40px"}
              p={"0px 16px"}
              fontSize={"16px"}
              fontFamily={"Inter"}
              colorScheme={"rgba(160, 174, 192, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
            />
          </Flex>
          {/* Button */}
          <Box
            typeof="Button"
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
            onClick={handleForgotPassword}
          >
            <Text
              color={"rgba(255, 255, 255, 1)"}
              fontFamily={"Inter"}
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={"600"}
              lineHeight={"24px"}
            >
              Send Code
            </Text>
          </Box>
        </Flex>

        {/* **************** */}
        {/* Sign in */}
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
              onClick={() => setStep(0)}
            >
              Back to log in
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Resetpassword;
