import { useEffect, useState } from "react";
import { Box,Tabs,Tab,TabList,TabPanels,TabPanel } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import ItemsTabPage from "../ItemsTabPage/ItemsTabPage"

export default function TabView({ titles, onPlusClick }) {
  const [ntabs, setNtabs] = useState(titles.length);

  useEffect(() => {
    setNtabs(titles.length);
  }, [titles]);

  return (
    <Box width="95%" minWidth="95vw" display="flex" flexDirection="column" alignItems="center" margin="20px">
      <Tabs width="100%">
        <Box display="flex" justifyContent="center">
          <Box overflowX="auto" maxWidth="80%" whiteSpace="nowrap" scrollBehavior="smooth">
            <TabList display="flex" minWidth="max-content">
              {titles.map((text, index) => (
                <Tab key={index} fontSize="20px">
                  {text}
                </Tab>
              ))}
              <Tab fontSize="20px">
                <span
                  onClick={onPlusClick}
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                  }}
                >
                  <FaPlus />
                </span>
              </Tab>
            </TabList>
          </Box>
        </Box>

        <TabPanels>
          {Array.from({ length: ntabs }).map((_, index) => (
            <TabPanel key={index}>
              <ItemsTabPage />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}