"use client";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Infocircle from "./Svgs/Infocircle";
import Check from "./Svgs/Check";
import Close from "./Svgs/Close";
import {} from "@chakra-ui/react";
import { useState } from "react";

const Uploadedfile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileType, setFileType] = useState<string>('text/plain');

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      gap={{ sm: "1px", mm: "8px", md: "10px", "2xl": "16px" }}
      width={"100%"}
    >
      {/* Step 3 */}
      <Flex
        flexDir={"column"}
        alignItems={"flex-start"}
        alignSelf={"stretch"}
        gap={{ sm: "2px", mm: "5px", md: "10px", "2xl": "32px" }}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          w={{ sm: "90%", ml: "90%", "2xl": "100%" }}
          h={{ "2xl": "158px" }}
          gap={"8px"}
          border={"2px dashed"}
          backgroundColor={"rgba(247, 247, 250, 1)"}
          borderColor={"rgba(0, 0, 0, 0.16)"}
          borderRadius={"8px"}
          padding={{
            sm: "6px 20px",
            mm: "10px 20px",
            ml: "14px 20px",
            md: "18px",
            "2xl": "24px 10px",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={{ sm: "30px", "2xl": "40px" }}
            h={{ sm: "30px", "2xl": "40px" }}
            backgroundColor={"rgba(37, 133, 90, 1)"}
            borderRadius={"100px"}
          >
            <Check />
          </Box>
          <Flex
            flexDir={"column"}
            gap={{ "2xl": "10px" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              w={"232px"}
              h={"28px"}
              fontFamily={"Inter"}
              fontSize={{ sm: "12px", "2xl": "18px" }}
              fontWeight={"500px"}
              fontStyle={"normal"}
              color={"rgba(0, 0, 0, 0.87)"}
              textAlign={"center"}
            >
              File Successfully Uploaded
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              w={"auto"}
              h={"24px"}
              columnGap={"8px"}
              padding={"0px 8px"}
              borderRadius={"39px"}
              border={"1px solid"}
              borderColor={"rgba(56, 161, 105, 1)"}
              backgroundColor={"rgba(255, 255, 255, 1)"}
            >
              <Text
                // w={"63px"}
                h={"16px"}
                color={"rgba(56, 161, 105, 1)"}
                fontFamily={"Inter"}
                fontSize={"12px"}
                fontStyle={"normal"}
                fontWeight={"600"}
              >
                {file ? fileType && fileName : "password.txt"}
              </Text>

              <Box>
                <Close />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Uploadedfile;
