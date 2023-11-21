"use client"
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import Backupfile from "./components/shared/Backupfile";
import Uploadedfile from "./components/shared/Uploadedfile";
import Login from "./components/shared/Login"
// import Resetpassword from "./resetpassword/Resetpassword";
import Resetcode from "./components/shared/Resetcode";
import Confirmpassword from "./components/shared/Confirmpassword";
import { Valueone } from "./context/context";
import Resetpassword from "./components/shared/Resetpassword";
import { Confpaswd } from "./components/shared/Confpaswd";


export default function Home() {
  const {step} = Valueone();
  console.log(step)
  return (
    <>
    
    {/* {step == 0 &&(<Login/>)}
    {step == 1 && (<Confpaswd/>)}
    {step == 2 &&(<Resetpassword/>)}
    {step == 3 && (<Resetcode/>)}
    {step == 4 && (<Confirmpassword/>)}
     */}
    
    {/* <Resetpassword/> */}
    {/* <Resetcode/> */}
    {/* <Confirmpassword/> */}
      <Flex overflow={"hidden"}>
        <Sidebar />
        <Navbar />
      </Flex>

      {/* <Backupfile/> */}
      {/* <Uploadedfile/> */}
      
    </>
  );
}
