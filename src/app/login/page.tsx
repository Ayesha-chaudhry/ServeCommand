import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

const page = () => {
  return (
    <Flex
      height={"100vh"}
      w={{ sm: "90%", mm: "95%", ml: "100%" }}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"48px 32px"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        gap={{ sm: "14px", "2xl": "32px" }}
      >
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
            fontSize={{ sm: "28px", "2xl": "30px" }}
            fontFamily={"Chivo"}
            color={"rgba(16, 24, 40, 1)"}
            fontStyle={"normal"}
            fontWeight={{ sm: "700px", "2xl": "400" }}
          >
            Log in to your account
          </Text>
        </Flex>

        {/* Phone */}
        <Flex
          gap={"8px"}
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
            fontWeight={"600px"}
            color={"rgba(0, 0, 0, 0.64)"}
          >
            Phone
          </FormLabel>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            variant='unstyled' 
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
      </Box>

      <Box
        mt={{ sm: "10px", "2xl": "20px" }}
        display={"flex"}
        flexDir={"column"}
        gap={{ sm: "10px", "2xl": "20px" }}
      >
        {/* Password */}
        <Flex
          gap={"8px"}
          flexDir={"column"}
          w={{ sm: "100%%", md: "120%", "2xl": "360px" }}
          h={"98px"}
        >
          <FormLabel
            w={{ "2xl": "360px" }}
            h={"16px"}
            fontFamily={"Inter"}
            fontSize={{ sm: "14px", "2xl": "12px" }}
            fontStyle={"normal"}
            fontWeight={"600px"}
            colorScheme={"rgba(0, 0, 0, 0.64)"}
          >
            Password
          </FormLabel>
          <Input
            type="Password"
            placeholder="••••••••"
            variant={"unstyled"}
            w={{ "2xl": "360px" }}
            height={"40px"}
            p={"0px 16px"}
            fontSize={"16px"}
            fontFamily={"Inter"}
            color={"rgba(102, 112, 133, 1)"}
            fontStyle={"normal"}
            fontWeight={"400"}
          />
        </Flex>

        <Box
          bgColor={"rgba(17, 25, 12, 1)"}
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"8px"}
          width={{ sm: "100%", md: "120%", "2xl": "360px" }}
          height={"40px"}
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
      </Box>
    </Flex>
  );
};

export default page;
