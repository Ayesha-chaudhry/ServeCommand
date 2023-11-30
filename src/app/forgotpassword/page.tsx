'use client'
// pages/forgot-password.tsx
import { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';
import { CognitoIdentityProviderClient, ForgotPasswordCommand, ConfirmForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider";

const clientId = "1727702mdj4021tmc218s3efab";
const cognitoClient = new CognitoIdentityProviderClient({
  // region: process.env.NEXT_PUBLIC_COGNITO_REGION,
  region: "us-east-1",
});

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendOtp = async () => {
    try {
      const response = await cognitoClient.send(new ForgotPasswordCommand({
        ClientId: clientId,
        Username: phoneNumber,
      }));
      console.log('Send OTP response:', response);
      setErrorMessage('');
    } catch (error: any) {
      console.error('Send OTP error:', error);
      setErrorMessage(error.message);
    }
  };

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
    <Flex align="center" justify="center" h="100vh">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4}>Forgot Password</Heading>

        {showSuccess && (
          <Alert status="success" mb={4}>
            <AlertIcon />
            {successMessage}
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setShowSuccess(false)} />
          </Alert>
        )}

        {errorMessage && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            <Text>{errorMessage}</Text>
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setErrorMessage('')} />
          </Alert>
        )}

        {!showSuccess && (
          <>
            <FormControl mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>

            <Button colorScheme="teal" mb={4} variant={"outline"} onClick={handleSendOtp}>
              Send OTP
            </Button>

            <FormControl mb={4}>
              <FormLabel>OTP</FormLabel>
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>

            <Button colorScheme="teal" mb={4} variant={"outline"} onClick={handleChangePassword}>
              Change Password
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default ForgotPassword;