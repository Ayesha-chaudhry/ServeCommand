import React, { useState } from "react";
import { Box, Button, Flex, Image, Input, Progress, Text } from "@chakra-ui/react";
import { signIn } from "./auth";
import { CognitoIdentityServiceProvider } from "aws-sdk";
import { Contextvalue } from "../../context/context";


const Home: React.FC = () => {
  const { setStep, username, setUsername } = Contextvalue();
  const [password, setPassword] = useState<string>("");

  const cognito = new CognitoIdentityServiceProvider({ region: "us-east-1" });
  const handleLogin = async () => {

    try {
      const token = await signIn(username, password);
      if (token === "NEW_PASSWORD_REQUIRED") {
        setStep(4);
      } else {
        console.log("Access token: ", token);
        setStep(5);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  
  
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      background={"rgba(247, 250, 252, 1)"}
    >
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
          {/* Login */}
          <Flex
            gap={{ sm: "12px", "2xl": "24px" }}
            flexDir={"column"}
            alignItems={"center"}
            w={{ sm: "100%", md: "120%", "2xl": "360px" }}
            h={"98px"}
          >
            <Image
              src={"/images/Flattened.svg"}
              alt={"Flattenend"}
              width={"33px"}
              height={"34px"}
              flexShrink={0}
            />

            <Text
              w={{ "2xl": "360px" }}
              height={"40px"}
              textAlign={"center"}
              fontSize={{ sm: "26px", "2xl": "30px" }}
              fontFamily={"Chivo"}
              color={"rgba(16, 24, 40, 1)"}
              fontStyle={"normal"}
              fontWeight={{ sm: "700px", "2xl": "400" }}
              lineHeight={"133%"}
            >
              Log in to your account
            </Text>
          </Flex>
        </Box>

        {/* **************** */}
        <Flex flexDir={"column"} gap={"24px"}>
          {/* Phone */}
          <Flex
            gap={"4px"}
            flexDir={"column"}
            w={{ sm: "100%", md: "120%", "2xl": "360px" }}
          >
            <Text
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
            </Text>
            <Input
              background={"rgba(255, 255, 255, 1)"}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Flex>
          {/* Password */}
          <Flex
            gap={"4px"}
            flexDir={"column"}
            w={{ sm: "100%", md: "120%", "2xl": "360px" }}
          >
            <Text
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
              Password
            </Text>
            <Input
              background={"rgba(255, 255, 255, 1)"}
              type="Password"
              placeholder="••••••••"
              w={{ "2xl": "360px" }}
              height={"40px"}
              p={"0px 16px"}
              fontSize={"16px"}
              fontFamily={"Inter"}
              color={"rgba(102, 112, 133, 1)"}
              fontStyle={"normal"}
              fontWeight={"400"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Flex>
          {/* #Forgot Password */}
          <Flex
            width={"360px"}
            h={"24px"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"Inter"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={"600"}
              lineHeight={"16px"}
              color={"rgba(17, 25, 12, 1)"}
              px={"8px"}
              cursor={"pointer"}
              onClick={() => setStep(1)}
            >
               {/* <Progress colorScheme='black' size='sm' value={50} /> */}

              Forgot Password
            </Text>
          </Flex>
        </Flex>

        {/* **************** */}
        {/* Sign in */}
        <Box
          bgColor={"rgba(17, 25, 12, 1)"}
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"8px"}
          width={{ sm: "100%", md: "120%", "2xl": "360px" }}
          height={"40px"}
          onClick={handleLogin}
        >
          <Button
            colorScheme={"rgba(255, 255, 255, 1)"}
            padding={"0px 16px"}
            fontFamily={"Inter"}
            fontSize={"16px"}
            w={"53px"}
            h={"24px"}
          >
            Sign in
          </Button>       
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
