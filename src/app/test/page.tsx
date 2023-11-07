"use client"
import React, { useState } from 'react';
import CustomDialog from "../components/shared/Alert"
import { Box, Image } from '@chakra-ui/react';

const MyPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Hello, Next.js with Custom Dialog!</h1>
      <button className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={openDialog}>
      <Box display={"flex"} gap={"8px"} alignItems={"center"} h={"32px"} w={"91px"}  p={"12px"} border={"1px solid"} borderColor={"#11190C"} borderRadius={"6px"}>
                <Box>
                    <Image src={"/images/arrow.png"} alt='arrow' w={"14px"} h={"14px"}/> 
                </Box>
                <Box w={"45px"} h={"20px"} fontFamily={"Inter"} fontSize={"14px"} fontWeight={"600px"}>Import</Box>
            </Box>
      </button>
      <CustomDialog isOpen={isDialogOpen} onClose={closeDialog}>
        <h2>This is a custom dialog box content.</h2>
        <p>You can put any content inside this dialog.</p>
      </CustomDialog>
    </div>
  );
};

export default MyPage;