// ... (your existing imports)
"use client"
import { Box, Button, Flex, Progress, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

type AxiosProgressEvent = {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number | null | undefined; // updated this line
  };
  
  // ... rest of your code
  

const Backupfile = ({ display }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef: any = React.useRef();
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('');
    const [fileType, setFileType] = useState<string>('text/plain');
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
        setFileName(selectedFile.name);
      }
    };
  
    const handleUpload = async () => {
      try {
        setIsUploading(true);
  
        // Your existing code for getting pre-signed URL
  
        // Start the file upload
        const fileContent = await file?.arrayBuffer();
        if (fileContent) {
          const uploadResponse = await axios.put("https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=dummydata.txt&contentType=text/plain", fileContent, {
            headers: {
              'Content-Type': fileType,
              'Content-Disposition': `attachment; filename="${fileName}"`,
            },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(progress);
            },
          });
  
          if (uploadResponse.status === 200) {
            console.log('File uploaded successfully');
            // Add any logic to handle success, e.g., showing a success message
          } else {
            console.error('File upload failed:', uploadResponse.statusText);
          }
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsUploading(false);
      }
    };
  
    useEffect(() => {
      if (isUploading) {
        // Your existing code for handling the upload
        handleUpload();
      }
    }, [isUploading]);
  
    return (
      <>
        {/* ... (your existing code) */}
  
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
              onClick={() => setIsUploading(true)}
              isDisabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Begin Import'}
            </Button>
          </Box>
        </Flex>
        {isUploading && (
          <Progress value={uploadProgress} size="sm" colorScheme="teal" mt={2} />
        )}
      </>
    );
  };
  
  export default Backupfile;
  