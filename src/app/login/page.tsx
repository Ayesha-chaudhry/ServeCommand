// import { useToast } from "@chakra-ui/react";
// import { useState } from "react";



// const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const toast = useToast();

//   const handleLogin = async () => {
//     try {
//       const session = await authenticateUser(username, password);
//       console.log('Authentication successful:', session);
//       // Redirect or perform other actions on successful login
//     } catch (error) {
//       console.error('Authentication failed:', error);
//       toast({
//         title: 'Authentication Failed',
//         description: 'Please check your username and password.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box p={8} maxW="md" mx="auto">
//       <Heading mb={4}>Login</Heading>
//       <Input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         mb={4}
//       />
//       <Input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         mb={4}
//       />
//       <Button colorScheme="blue" onClick={handleLogin} mb={4}>
//         Login
//       </Button>
//     </Box>
//   );
// };

// const ForgotPasswordPage: React.FC = () => {
//   const [username, setUsername] = useState<string>('');
//   const toast = useToast();

//   const handleForgotPassword = async () => {
//     try {
//       const data = await forgotPassword(username);
//       console.log('Forgot password successful:', data);
//       toast({
//         title: 'Forgot Password',
//         description: 'Please check your email for instructions.',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.error('Forgot password failed:', error);
//       toast({
//         title: 'Forgot Password Failed',
//         description: 'Please check your username and try again.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box p={8} maxW="md" mx="auto">
//       <Heading mb={4}>Forgot Password</Heading>
//       <Input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         mb={4}
//       />
//       <Button colorScheme="blue" onClick={handleForgotPassword} mb={4}>
//         Reset Password
//       </Button>
//     </Box>
//   );
// };

// const ChangePasswordPage: React.FC = () => {
//   const [username, setUsername] = useState<string>('');
//   const [oldPassword, setOldPassword] = useState<string>('');
//   const [newPassword, setNewPassword] = useState<string>('');
//   const toast = useToast();

//   const handleChangePassword = async () => {
//     try {
//       const data = await changePassword(username, oldPassword, newPassword);
//       console.log('Change password successful:', data);
//       toast({
//         title: 'Change Password',
//         description: 'Password changed successfully.',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.error('Change password failed:', error);
//       toast({
//         title: 'Change Password Failed',
//         description: 'Please check your credentials and try again.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box p={8} maxW="md" mx="auto">
//       <Heading mb={4}>Change Password</Heading>
//       <Input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         mb={4}
//       />
//       <Input
//         type="password"
//         placeholder="Old Password"
//         value={oldPassword}
//         onChange={(e) => setOldPassword(e.target.value)}
//         mb={4}
//       />
//       <Input
//         type="password"
//         placeholder="New Password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//         mb={4}
//       />
//       <Button colorScheme="blue" onClick={handleChangePassword} mb={4}>
//         Change Password
//       </Button>
//     </Box>
//   );
// };

// export { LoginPage, ForgotPasswordPage, ChangePasswordPage };


// pages/Login.tsx
"use client"
import { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import {
  signIn,
  changePassword as changeUserPassword,
  forgotPassword as initiateForgotPassword,
} from '../components/shared/auth';
import { Response } from 'aws-sdk';

const Login = () => {
  const [step, setStep] = useState<'login' | 'forgot' | 'change'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await signIn(username, password);
      //setStep('change');
      console.log("login ho gaya",token)
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await initiateForgotPassword(username);
      setStep('change');
    } catch (error) {
      console.error('Forgot password failed:', error);
    }
  };

  const handleChangePassword = async () => {
    try {
      await changeUserPassword(username, password, newPassword);
      // Optionally, redirect to another page or display a success message
    } catch (error) {
      console.error('Change password failed:', error);
    }
  };

  return (
    <Box>
      <Heading textAlign="center" mt="8">
        {step === 'login' && 'Login'}
        {step === 'forgot' && 'Forgot Password'}
        {step === 'change' && 'Change Password'}
      </Heading>
      <Box maxWidth="400px" margin="auto" mt="8">
        {step === 'login' && (
          <>
            <FormControl id="username" mb="4">
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="password" mb="4">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="button" colorScheme="teal" onClick={handleLogin} mb="4">
              Login
            </Button>
            <Text textAlign="center" cursor="pointer" color="teal.500" onClick={() => setStep('forgot')}>
              Forgot Password?
            </Text>
          </>
        )}
        {step === 'forgot' && (
          <>
            <FormControl id="username" mb="4">
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <Button type="button" colorScheme="teal" onClick={handleForgotPassword} mb="4">
              Submit
            </Button>
          </>
        )}
        {step === 'change' && (
          <>
            <FormControl id="oldPassword" mb="4">
              <FormLabel>Old Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="newPassword" mb="4">
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>
            <Button type="button" colorScheme="teal" onClick={handleChangePassword} mb="4">
              Change Password
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Login;
