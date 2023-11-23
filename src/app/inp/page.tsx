"use client"

// import React, { useState, ChangeEvent } from 'react';

// const OTPVerification: React.FC = () => {
//   const [otp, setOTP] = useState(['', '', '', '', '','']); // Array to store each digit of the OTP

//   const handleChange = (index: number, value: string) => {
//     const newOTP = [...otp];
//     newOTP[index] = value;

//     // Move focus to the next input if a digit is entered
//     if (value.length === 1 && index < newOTP.length - 1) {
//       const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement | null;
//       if (nextInput) {
//         nextInput.focus();
//       }
//     }

//     setOTP(newOTP);
//   };

//   return (
//     <div>
//       <h1>Enter OTP</h1>
//       <div>
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             id={`otp-input-${index}`}
//             type="text"
//             maxLength={1}
//             value={digit}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
//           />
//         ))}
//       </div>
//       <button onClick={() => alert(`Entered OTP: ${otp.join('')}`)}>Verify OTP</button>
//     </div>
//   );
// };

// export default OTPVerification;





// import { Box, Flex, Image, Input, Text, Toast } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { Contextvalue } from "@/app/context/context";

// const Resetcode: React.FC = () => {

    
//         const [otp, setOTP] = useState(['', '', '', '', '', '']); // Array to store each digit of the OTP
      
//         const handleChange = (index: number, value: string) => {
//           const newOTP = [...otp];
//           newOTP[index] = value;
      
//           // Move focus to the next input if a digit is entered
//           if (value.length === 1 && index < newOTP.length - 1) {
//             const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement | null;
//             if (nextInput) {
//               nextInput.focus();
//             }
//           }
      
//           setOTP(newOTP);
//         };
//   return (
//     <>
//       <Flex justifyContent={"center"} alignItems={"center"} background={"rgba(247, 250, 252, 1)"}>
//         <Flex
//           height={"100vh"}
//           w={{ "2xl": "fit-content", sm: "fit-content" }}
//           flexDir={"column"}
//           justifyContent={"center"}
//           alignItems={"center"}
//           padding={"48px 32px"}
//           gap={{ sm: "14px", "2xl": "32px" }}
//         >
//           <Box display={"flex"} flexDir={"column"}>
//             {/* Reset Password */}
//             <Flex
//               gap={{ sm: "12px", "2xl": "24px" }}
//               flexDir={"column"}
//               alignItems={"center"}
//               w={{ sm: "100%", md: "120%", "2xl": "360px" }}
//               h={"230px"}
//             >
//               <Image
//                 src={"/images/Flattened.svg"}
//                 alt={"Flattenend"}
//                 width={"33px"}
//                 height={"34px"}
//                 flexShrink={0}
//               />

//               <Flex flexDir={"column"} gap={"12px"}>
//                 <Text
//                   alignSelf={"stretch"}
//                   textAlign={"center"}
//                   fontSize={{ sm: "26px", "2xl": "30px" }}
//                   fontFamily={"Chivo"}
//                   color={"rgba(16, 24, 40, 1)"}
//                   fontStyle={"normal"}
//                   fontWeight={{ sm: "700px", "2xl": "400" }}
//                   lineHeight={"133%"}
//                 >
//                   Enter your reset code
//                 </Text>
//                 <Box
//                   w={"360px"}
//                   h={"120px"}
//                   fontFamily={"Inter"}
//                   fontSize={"16px"}
//                   fontStyle={"normal"}
//                   fontWeight={"400"}
//                   lineHeight={"24px"}
//                   color={"rgba(71, 84, 103, 1)"}
//                   textAlign={"center"}
//                   alignSelf={"stretch"}
//                 >
//                   <Text>
//                     Code sent to:{" "}
//                     <span style={{ fontWeight: "600" }}>914-497-6340</span>
//                   </Text>
//                   <br />
//                   <Text>
//                     If your phone number exists in ServeCommand, you will
//                     receive a text with your code to update your password.
//                   </Text>
//                 </Box>
//               </Flex>
//             </Flex>
//           </Box>

//           {/* **************** */}
//           <Flex flexDir={"column"} gap={"24px"}>
//             {/* Phone */}
//             <Flex
//               gap={"6px"}
//               w={{ sm: "100%", md: "120%", "2xl": "360px" }}
//               h={"48px"}
//               justifyContent={"center"}
//               alignItems={"center"}
//             >
//               {otp.map((digit, index) => (
//                 <Input
//                 key={index}
//                 id={`otp-input-${index}`}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                   placeholder="-"
//                   w={{ "2xl": "48px" }}
//                   height={"48px"}
//                   p={"0px 16px"}
//                   flexDir={"column"}
//                   borderRadius={"6px"}
//                   border={"1px solid"}
//                   borderColor={"rgba(226, 232, 240, 1)"}
//                   bg={"rgba(255, 255, 255, 1)"}
//                   textAlign={"center"}
//                   fontSize={"18px"}
//                   fontFamily={"Inter"}
//                   colorScheme={"rgba(160, 174, 192, 1)"}
//                   fontStyle={"normal"}
//                   fontWeight={"400"}
//                   lineHeight={"normal"}
//                 />
//               ))}
//             </Flex>
//             {/* Button */}
//             <Box
//               height={"40px"}
//               padding={"0px 16px"}
//               display={"flex"}
//               justifyContent={"center"}
//               alignItems={"center"}
//               gap={"8px"}
//               alignSelf={"stretch"}
//               borderRadius={"6px"}
//               bg={"rgba(17, 25, 12, 1)"}
//               cursor={"pointer"}
//             //   onClick={() => setStep(3)}
//             >
//               <Text
//                 color={"rgba(255, 255, 255, 1)"}
//                 fontFamily={"Inter"}
//                 fontSize={"16px"}
//                 fontStyle={"normal"}
//                 fontWeight={"600"}
//                 lineHeight={"24px"}
//               >
//                 Enter Code
//               </Text>
//             </Box>
//           </Flex>

//           {/* **************** */}
//           {/* Back to Login */}
//           <Box
//             display={"flex"}
//             fontFamily={"Inter"}
//             fontSize={"16px"}
//             fontStyle={"normal"}
//             lineHeight={"24px"}
//             width={{ sm: "100%", md: "120%", "2xl": "360px" }}
//             height={"24px"}
//             px={"16px"}
//             gap={1}
//           >
//             <Text fontWeight={"400"} color={"rgba(71, 84, 103, 1)"}>
//               Didn’t receive the email? 
//             </Text>
//             <Text fontWeight={"600"} color={"rgba(17, 25, 12, 1)"}>
//               Click to resend
//             </Text>
//           </Box>
//           {/* **************************** */}

//           <Box
//             borderRadius={"6px"}
//             display={"flex"}
//             justifyContent={"center"}
//             alignItems={"center"}
//             columnGap={"8px"}
//             width={{ sm: "100%", md: "120%", "2xl": "360px" }}
//             height={"40px"}
//             px={"16px"}
//           >
//             <Flex
//               height={"40px"}
//               padding={"0px 16px"}
//               justifyContent={"center"}
//               alignItems={"center"}
//               alignSelf={"stretch"}
//               color={"rgba(26, 32, 44, 1)"}
//               gap={"8px"}
//               cursor={"pointer"}
//             >
//               <Image src={"/images/arrow-left.svg"} alt="arrow" />
//               <Text
//                 fontFamily={"Inter"}
//                 fontSize={"16px"}
//                 fontStyle={"normal"}
//                 fontWeight={"600"}
//                 lineHeight={"24px"}
//                 // onClick={() => setStep(0)}
//               >
//                 Back to log in
//               </Text>
//             </Flex>
//           </Box>
//           <Box
//         display={"flex"}
//         ml={"1492px"}
//         mt={"140px"}
//         width={"400px"}
//         height={"72px"}
//         padding={"12px 16px"}
//         bg={"rgba(17, 25, 12, 1)"}
//       >
//         <Flex gap={"12px"} justifyContent={"center"} alignItems={"center"}>
//           <Image
//             src="/images/check-circle.svg"
//             alt="img"
//             flexShrink={0}
//             w={"24px"}
//             h={"24px"}
//           />
//           <Flex flexDir={"column"}>
//             <Text
//               w={"332px"}
//               h={"24px"}
//               alignSelf={"stretch"}
//               fontFamily={"Inter"}
//               fontSize={"16px"}
//               fontStyle={"normal"}
//               fontWeight={"700"}
//               lineHeight={"24px"}
//               color={"rgba(255, 255, 255, 1)"}
//             >
//               Reset code sent
//             </Text>
//             <Text
//               w={"332px"}
//               h={"24px"}
//               alignSelf={"stretch"}
//               fontFamily={"Inter"}
//               fontSize={"16px"}
//               fontStyle={"normal"}
//               fontWeight={"400"}
//               lineHeight={"24px"}
//               color={"rgba(255, 255, 255, 1)"}
//             >
//               Code was sent to 914-497-6340
//             </Text>
//           </Flex>
//         </Flex>
//       </Box>
//         </Flex>
//       </Flex>


//     </>
//   );
// };

// export default Resetcode;




import {
    Box,
    Button,
    Flex,
    FormLabel,
    Input,
    Text,
    Image,
    useToast,
  } from "@chakra-ui/react";
//   import { forgotPassword as initiateForgotPassword } from "./auth";
  import { Contextvalue } from "@/app/context/context";
  
  const Resetpassword: React.FC = () => {
    const toast = useToast();
    const { username, setStep } = Contextvalue();
  
    // const handleForgotPassword = async () => {
    //   setStep(2);
    //   try {
    //     await initiateForgotPassword(username);
    //   } catch (error) {
    //     console.error("Forgot password failed:", error);
    //   }
    // };

    
    // const handleEnterCode = () => {
    //   // Your logic for handling the entered code
  
    //   // Show Chakra UI toast
    //   toast({
    //     position: 'bottom-right',
    //     title: 'Reset Code Sent',
    //     description: 'Code was sent to 914-497-6340',
    //     status: 'success',
    //     duration: 5000, // Display duration in milliseconds
    //     isClosable: true,
        
    //   });
  
    //   // You can also add your logic to navigate to the next step if needed
    //   setStep(2);
    // };
  
    const handleEnterCode = () => {
      // Your logic for handling the entered code
  
      // Show custom Chakra UI toast with a black background
      toast({
        position: 'bottom-right',
        render: () => (
          <Box
          display="flex"
        //   ml="1492px"
        //   mt="140px"
          width="400px"
          height="72px"
          padding="12px 16px"
          bg="rgba(17, 25, 12, 1)"
        >
          <Flex gap="12px" justifyContent="center" alignItems="center">
            <Image src="/images/check-circle.svg" alt="img" flexShrink={0} w="24px" h="24px" />
            <Flex flexDir="column">
              <Text
                w="332px"
                h="24px"
                alignSelf="stretch"
                fontFamily="Inter"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="24px"
                color="rgba(255, 255, 255, 1)"
              >
                Reset code sent
              </Text>
              <Text
                w="332px"
                h="24px"
                alignSelf="stretch"
                fontFamily="Inter"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                color="rgba(255, 255, 255, 1)"
              >
                Code was sent to 914-497-6340
              </Text>
            </Flex>
          </Flex>
        </Box>
      ),
      duration: 5000, // Display duration in milliseconds
      isClosable: true,
    });
  
    // You can also add your logic to navigate to the next step if needed
    // setStep(2);
  };







  
    return (
      <Flex justifyContent={"center"} alignItems={"center"} background={"rgba(247, 250, 252, 1)"}>
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
              // onClick={handleForgotPassword}
              onClick={handleEnterCode}
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
  