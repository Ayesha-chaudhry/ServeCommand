import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import Backupfile from "./components/shared/Backupfile";
import Uploadedfile from "./components/shared/Uploadedfile";

export default function Home() {
  return (
    <>
      <Flex overflow={"hidden"}>
        <Sidebar />
        <Navbar />
      </Flex>

      {/* <Backupfile/> */}
      {/* <Uploadedfile/> */}
    </>
  );
}
