"use client"
import { useState } from "react";
import {
  Container,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileType, setFileType] = useState<string>("text/plain");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    try {
      const apiUrl =
        "https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=dummydata.txt&contentType=text/plain";

      const response = await axios.get(apiUrl, {
        params: {
          fileName: fileName,
          contentType: fileType,
        },
      });

      if (response.status === 200) {
        const { signedUrl } = response.data.uploadUrl;
        console.log("pre signed url", response.data.uploadUrl);

        const fileContent = await file?.arrayBuffer();
        if (fileContent) {
          const uploadResponse = await axios.put(signedUrl, fileContent, {
            headers: {
              'Content-Type': fileType,
            },
          });

          if (uploadResponse.status === 200) {
            console.log('File uploaded successfully');
            // Add any logic to handle success, e.g., showing a success message
          } else {
            console.error('File upload failed:', uploadResponse.statusText);
          }
        }
      } else {
        console.error("Failed to get pre-signed URL:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Container maxW="container.sm" centerContent>
      <Heading as="h1" mb={6}>
        S3 File Upload
      </Heading>

      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Choose File</FormLabel>
          <Input type="file" onChange={handleFileChange} />
        </FormControl>

        {file && (
          <>
            <FormControl>
              <FormLabel>File Name</FormLabel>
              <Input type="text" value={fileName} isReadOnly />
            </FormControl>

            <FormControl>
              <FormLabel>File Type</FormLabel>
              <Input type="text" value={fileType} isReadOnly />
            </FormControl>

            <Button colorScheme="blue" variant={"ghost"} onClick={handleUpload}>
              Upload File
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Home;
