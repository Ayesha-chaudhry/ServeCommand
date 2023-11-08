"use client";
import { Box, Button, Text, Image, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Infocircle from "./Svgs/Infocircle";
import RightIcon from "./Svgs/RightIcon";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Close from "./Svgs/Close";
import Check from "./Svgs/Check";
import Uploadedfile from "./Uploadedfile";

const Backupfile = ({ display }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();

  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (event: any) => {
    const uploadedFile = await event.target.files[0];
    uploadedFile && setIsFileUploaded(true);
    uploadedFile && setFileName(uploadedFile.name);
  };
  return (
    <>
      <Button
        _hover={{ background: "none" }}
        background={"none"}
        onClick={onOpen}
      >
        {/* Import Button */}
        <Flex
          flex={1}
          justify={"center"}
          alignItems={"center"}
          p={{ "2xl": "0px 12px" }}
          w={"91px"}
          h={"32px"}
          gap={{ "2xl": "8px" }}
          border={"1px solid"}
          borderRadius={"6px"}
        >
          <Image src={"/images/arrow.png"} alt="arrow" w={"14px"} h={"14px"} />
          <Box
            w={{ "2xl": "45px" }}
            h={{ "2xl": "20px" }}
            fontFamily={"Inter"}
            fontSize={{ sm: "14px", "2xl": "14px" }}
            fontWeight={"600px"}
            color={"black"}
            _hover={{ background: "none" }}
          >
            Import
          </Box>
        </Flex>
      </Button>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent
          boxShadow={"none"}
          background={"none"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AlertDialogBody>
            <Box
              display={"flex"}
              flexDir={"column"}
              backgroundColor={"rgba(255, 255, 255, 1)"}
              gap={{ sm: "5px", mm: "10px", ml: "8px", "2xl": "32px" }}
              w={{ sm: "105%", md: "130%", xl: "180%", "2xl": "900px" }}
              // h={{ "2xl": "602px" }}

              borderRadius={"20px"}
              padding={{
                sm: "8px 10px",
                ml: "6px 14px",
                md: "10px 18px",
                xl: "28px 32px",
                "2xl": "32px 40px",
              }}
            >
              {/* Top section */}
              <Flex
                alignItems={"flex-start"}
                alignSelf={"stretch"}
                gap={{ sm: "10px", "2xl": "16px" }}
                w={{ "2xl": "820px" }}
                h={{ "2xl": "62px" }}
              >
                <Box
                  w={{ "2xl": "40px" }}
                  h={{ "2xl": "40px" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  backgroundColor={"rgba(17, 25, 12, 0.04)"}
                >
                  <Infocircle />
                </Box>
                <Flex
                  flexDir={"column"}
                  alignSelf={"stretch"}
                  gap={{ sm: "1px", "2xl": "8px" }}
                >
                  <Text
                    w={{ "2xl": "764px" }}
                    h={{ "2xl": "32px" }}
                    fontFamily={"Inter"}
                    fontSize={{
                      sm: "12px",
                      md: "18px",
                      xl: "22px",
                      "2xl": "24px",
                    }}
                    fontWeight={"500px"}
                    fontStyle={"normal"}
                  >
                    Prepare Your Hindsite Import
                  </Text>
                  <Text
                    w={{ "2xl": "764px" }}
                    h={{ "2xl": "22px" }}
                    fontFamily={"Inter"}
                    fontSize={{
                      sm: "12px",
                      md: "13px",
                      xl: "16px",
                      "2xl": "16px",
                    }}
                    fontWeight={"400px"}
                    fontStyle={"normal"}
                    color={"rgba(0, 0, 0, 0.64)"}
                  >
                    To get started, you will need to export your latest backup
                    of Hindsite.
                  </Text>
                </Flex>
              </Flex>

              <Box
                display={"flex"}
                flexDir={"column"}
                gap={{ sm: "1px", mm: "8px", md: "10px", "2xl": "16px" }}
              >
                {/* Step 1 */}

                <Flex
                  flexDir={"column"}
                  alignSelf={"stretch"}
                  alignItems={"flex-start"}
                  gap={{ sm: "1px", "2xl": "16px" }}
                  w={{ "2xl": "820px" }}
                  h={{ "2xl": "88px" }}
                >
                  <Text
                    w={{ "2xl": "236px" }}
                    h={{ "2xl": "24px" }}
                    fontFamily={"Inter"}
                    fontSize={{
                      sm: "12px",
                      md: "14px",
                      xl: "16px",
                      "2xl": "16px",
                    }}
                    fontWeight={"500px"}
                    fontStyle={"normal"}
                  >
                    Step 1. Create Hindsite Backup
                  </Text>
                  <Text
                    w={{ "2xl": "820px" }}
                    h={{ "2xl": "48px" }}
                    fontFamily={"Inter"}
                    fontSize={{
                      sm: "12px",
                      md: "14px",
                      xl: "16px",
                      "2xl": "16px",
                    }}
                    fontWeight={"400px"}
                    fontStyle={"normal"}
                    color={"rgba(0, 0, 0, 0.64)"}
                  >
                    In Hindsite, go to “Daily Must Do” section and click “Run
                    Backup”. Save the backup file somewhere you can easily find
                    it, like on your desktop.
                  </Text>
                </Flex>

                {/* Step 2 */}

                <Flex
                  flexDir={"column"}
                  alignSelf={"stretch"}
                  alignItems={"flex-start"}
                  gap={{ sm: "1px", "2xl": "16px" }}
                  w={{ "2xl": "820px" }}
                  h={{ "2xl": "88px" }}
                >
                  <Text
                    w={{ "2xl": "262px" }}
                    h={{ "2xl": "24px" }}
                    fontFamily={"Inter"}
                    fontSize={{
                      sm: "12px",
                      md: "14px",
                      xl: "16px",
                      "2xl": "16px",
                    }}
                    fontWeight={"500px"}
                    fontStyle={"normal"}
                  >
                    Step 2. Unzip Hindsite Backup File
                  </Text>
                  <Text
                    w={{ "2xl": "820px" }}
                    h={{ "2xl": "48px" }}
                    fontFamily={"Inter"}
                    fontSize={{ sm: "12px", xl: "16px", "2xl": "16px" }}
                    fontWeight={"400px"}
                    fontStyle={"normal"}
                    color={"rgba(0, 0, 0, 0.64)"}
                  >
                    Find the backup file and use your computer to “Unzip” the
                    file. The file should read “backup.txt”. Save this file
                    somewhere you can easily find it.
                  </Text>
                </Flex>
                {/* Step 3 */}
                <Flex
                  flexDir={"column"}
                  alignItems={"flex-start"}
                  alignSelf={"stretch"}
                  gap={{ sm: "2px", mm: "5px", md: "14px", "2xl": "32px" }}
                  // width={"100%"}
                >
                  <Text
                    w={{ "2xl": "285px" }}
                    h={{ "2xl": "24px" }}
                    fontFamily={"Inter"}
                    fontSize={{
                      sm: "12px",
                      md: "14px",
                      xl: "16px",
                      "2xl": "16px",
                    }}
                    fontWeight={"500px"}
                    fontStyle={"normal"}
                  >
                    Step 3. Upload Your Backup File Here
                  </Text>
                  {isFileUploaded ? (
                    <Uploadedfile fileName={fileName} />
                  ) : (
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={{ sm: "90%", ml: "90%", "2xl": "100%" }}
                      h={{ "2xl": "120px" }}
                      border={"2px dashed"}
                      backgroundColor={"rgba(247, 247, 250, 1)"}
                      borderColor={"rgba(0, 0, 0, 0.1)"}
                      borderRadius={"8px"}
                      padding={{
                        sm: "6px 20px",
                        mm: "10px 20px",
                        ml: "14px 20px",
                        md: "18px",
                        "2xl": "10px",
                      }}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={{ sm: "6px", "2xl": "8px" }}
                        w={{ "2xl": "204px" }}
                        h={{ "2xl": "40px" }}
                        border={"1px solid"}
                        borderColor={"rgba(17, 25, 12, 1)"}
                        backgroundColor={"rgba(255, 255, 255, 1)"}
                        borderRadius={"6px"}
                        padding={{ sm: "2px 10px", "2xl": "0px 16px" }}
                        onClick={() => {
                          const fileInput =
                            document.getElementById("file-input");
                          if (fileInput) {
                            fileInput.click();
                          }
                        }}
                      >
                        {/* Upload file */}
                        <Input
                          id="file-input"
                          type="file"
                          accept="text/plain"
                          onChange={handleFileUpload}
                          style={{ display: "none" }}
                        />
                        <Text
                          w={{ "2xl": "148px" }}
                          h={{ "2xl": "24px" }}
                          fontFamily={"Inter"}
                          fontSize={{ sm: "10px", "2xl": "16px" }}
                          fontWeight={"600px"}
                          fontStyle={"normal"}
                          color={"rgba(17, 25, 12, 1)"}
                        >
                          Upload Backup File
                        </Text>
                        <Box flexShrink={0}>
                          <RightIcon />
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Flex>
              </Box>

              {/* Button last*/}
              <Flex
                alignItems={"flex-start"}
                alignSelf={"stretch"}
                gap={{ sm: "2px", mm: "4px", md: "10px", "2xl": "16px" }}
                w={{ "2xl": "820px" }}
                h={{ "2xl": "32px" }}
              >
                <Box
                  w={{ "2xl": "72px" }}
                  h={{ "2xl": "32px" }}
                  border={"1px solid"}
                  borderColor={"rgba(226, 232, 240, 1)"}
                  borderRadius={"6px"}
                  padding={{ sm: "2px 10px", "2xl": "0px 12px" }}
                >
                  <Button
                    w={"48px"}
                    h={{ "2xl": "20px" }}
                    fontFamily={"Inter"}
                    fontSize={{ sm: "12px", "2xl": "14px" }}
                    fontWeight={"600px"}
                    fontStyle={"normal"}
                    color={"rgba(0, 0, 0, 0.92)"}
                    onClick={onClose}
                    _hover={{ background: "none" }}
                  >
                    Cancel
                  </Button>
                </Box>
                <Box
                  w={"111px"}
                  h={{ "2xl": "32px" }}
                  backgroundColor={"rgba(237, 242, 247, 1)"}
                  borderRadius={"6px"}
                  padding={{ sm: "2px 8px", "2xl": "0px 12px" }}
                >
                  <Button
                    w={"87px"}
                    h={{ "2xl": "20px" }}
                    fontFamily={"Inter"}
                    fontSize={{ sm: "12px", "2xl": "14px" }}
                    fontWeight={"600px"}
                    fontStyle={"normal"}
                    color={"rgba(0, 0, 0, 0.24"}
                  >
                    Begin Import
                  </Button>
                </Box>
              </Flex>
            </Box>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Backupfile;
