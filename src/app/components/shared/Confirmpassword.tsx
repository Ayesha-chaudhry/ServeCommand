import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CognitoIdentityProviderClient,  ConfirmForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider";
import { Contextvalue } from "@/app/context/context";

const Confirmpassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const {phoneNumber, setPhoneNumber} = Contextvalue();


  const clientId = "1727702mdj4021tmc218s3efab";
  const cognitoClient = new CognitoIdentityProviderClient({
    // region: process.env.NEXT_PUBLIC_COGNITO_REGION,
    region: "us-east-1"
  });  
  
  // const handleSubmit = () => {
  //   if (password === confirmPassword) {
  //     setPasswordsMatch(true);
  //     console.log("Password is Matched");
  //   } else {
  //     setPasswordsMatch(false);
  //     console.log("Password does not Match");
  //   }
  // };

  const handleChangePassword = async () => {
    try {
      const response = await cognitoClient.send(new ConfirmForgotPasswordCommand({
        ClientId: clientId,
        ConfirmationCode: otp,
        Username: phoneNumber,
        Password: newPassword,
      }));
      console.log('Change Password response:', response);
      setSuccessMessage('Password changed successfully!');
      setShowSuccess(true);
    } catch (error: any) {
      console.error('Change Password error:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} background={"rgba(247, 250, 252, 1)"}>
        <Flex
          height={"100vh"}
          w={{ "2xl": "fit-content", sm: "fit-content" }}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"48px 32px"}
          gap={"32px"}
        >
          <Flex flexDir={"column"}>
            {/* Login */}
            <Flex
              gap={"24px"}
              flexDir={"column"}
              alignItems={"center"}
              w={"360px"}
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
                Confirm New Password
              </Text>
            </Flex>
          </Flex>

          <Flex flexDir={"column"} gap={"24px"}>
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
                Enter New Password
              </Text>
              <Input
                bg={"rgba(255, 255, 255, 1)"}
                type="tel"
                placeholder="Enter new password"
                w={"360px"}
                height={"40px"}
                p={"0px 16px"}
                fontSize={"16px"}
                fontFamily={"Inter"}
                colorScheme={"rgba(160, 174, 192, 1)"}
                fontStyle={"normal"}
                fontWeight={"400"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Flex>

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
                Confirm New Password
              </Text>
              <Input
              bg={"rgba(255, 255, 255, 1)"}
                type="password"
                placeholder="••••••••"
                w={"360px"}
                height={"40px"}
                p={"0px 16px"}
                fontSize={"16px"}
                fontFamily={"Inter"}
                border={"2px solid"}
                borderColor={
                  !passwordsMatch
                    ? "rgba(229, 62, 62, 1)"
                    : "rgba(226, 232, 240, 1)"
                }
                color={"rgba(102, 112, 133, 1)"}
                fontStyle={"normal"}
                fontWeight={"400"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!passwordsMatch && (
                <Text
                  color="rgba(229, 62, 62, 1)"
                  fontSize="12px"
                  mt="2"
                  fontFamily={"Inter"}
                  height={"16px"}
                  alignSelf={"stretch"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"16px"}
                >
                  Password does not match.
                </Text>
              )}
            </Flex>

            <Box
              w={"360px"}
              height={"40px"}
              padding={"0px 16px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              alignSelf={"stretch"}
              borderRadius={"6px"}
              bg={"rgba(17, 25, 12, 1)"}
              onClick={handleChangePassword}
              // onClick={() => {
              //   handleSubmit()
              //   handleChangePassword()}}
            >
              <Text
                color={"rgba(255, 255, 255, 1)"}
                fontFamily={"Inter"}
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={"600"}
                lineHeight={"24px"}
                w={"214px"}
              >
                Reset Password and Sign in
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Confirmpassword;
