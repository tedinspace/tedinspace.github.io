import { Box, Diagram, Stack, Text } from "grommet";
import { CodeBlock, nord, googlecode } from "react-code-blocks";
enum ID {
  MAIN_WAIT = "MAIN_WAIT",
  MAIN_POST = "MAIN_POST",
  MAIN_EVENT = "MAIN_EVENT",
  WORK_EVENT = "WORK_EVENT",
  WORK_PROCESS = "WORK_PROCESS",
  WORK_POST = "WORK_POST",
}

function WorkerBox(props: { id: ID; children: any }) {
  return (
    <Box pad={"small"} margin={"small"} background={"level1"} id={props.id}>
      {props.children}
    </Box>
  );
}
const fixed: any[] = [
  {
    color: "#8F99A8",
    thickness: "xsmall",
    fromTarget: ID.MAIN_WAIT,
    toTarget: ID.MAIN_POST,
    anchor: "vertical",
  },
  {
    color: "#8F99A8",
    thickness: "xsmall",
    fromTarget: ID.MAIN_POST,
    toTarget: ID.WORK_EVENT,
    anchor: "horizontal",
  },
  {
    color: "#8F99A8",
    thickness: "xsmall",
    fromTarget: ID.WORK_EVENT,
    toTarget: ID.WORK_PROCESS,
    anchor: "vertical",
  },
  {
    color: "#8F99A8",
    thickness: "xsmall",
    fromTarget: ID.WORK_PROCESS,
    toTarget: ID.WORK_POST,
    anchor: "vertical",
  },
  {
    color: "#8F99A8",
    thickness: "xsmall",
    fromTarget: ID.WORK_POST,
    toTarget: ID.MAIN_EVENT,
    anchor: "horizontal",
  },
];

export function WorkerDiagram(props: { darkMode: boolean }) {
  return (
    <Box border={{ color: "level1", size: "medium" }}>
      <Stack>
        <Box direction="row">
          <Box fill="horizontal" margin={"medium"}>
            <Text size="xlarge">Main Thread</Text>
            <WorkerBox id={ID.MAIN_WAIT}>
              <Text color="#32A467">
                <b>Waiting for Trigger</b>
              </Text>
            </WorkerBox>
            <WorkerBox id={ID.MAIN_POST}>
              <Text color='#D1980B'><b>Post Message</b></Text>
              <Box pad="xsmall">
                <CodeBlock
                  text="myWorker.postMessage( {myData: 'my data'} );"
                  language="js"
                  showLineNumbers={false}
                  wrapLongLines
                  theme={props.darkMode ? nord : googlecode}
                />
              </Box>
            </WorkerBox>
            <WorkerBox id={ID.MAIN_EVENT}>
              <Text color="warning">
                <b>Event Handler</b>
              </Text>
            </WorkerBox>
          </Box>
          <Box fill="horizontal" margin={"medium"}>
            <Text size="xlarge">Web Worker</Text>
            <WorkerBox id={ID.WORK_EVENT}>
              <Box direction="row"><b>Event Handler</b>:&nbsp;<i>receive request from main</i></Box>
              <Box pad="xsmall">
                <CodeBlock
                  text="self.onmessage( (e)=>{ console.log(e.data.myData); "
                  language="js"
                  showLineNumbers={false}
                  wrapLongLines
                  theme={props.darkMode ? nord : googlecode}
                />
              </Box>
            </WorkerBox>
            <WorkerBox id={ID.WORK_PROCESS}>
              <b>Process Data</b>
              <Box pad="xsmall">
                <CodeBlock
                  text="let processedData = longProcess(e.data.myData);"
                  language="js"
                  showLineNumbers={false}
                  wrapLongLines
                  theme={props.darkMode ? nord : googlecode}
                />
              </Box>
            </WorkerBox>
            <WorkerBox id={ID.WORK_POST}>
            <Box direction="row"><b>Post Message</b>:&nbsp;<i>return processed data to main</i></Box>
              <Box pad="xsmall">
                <CodeBlock
                  text="self.postMessage(processedData); })"
                  language="js"
                  showLineNumbers={false}
                  wrapLongLines
                  theme={props.darkMode ? nord : googlecode}
                />
              </Box>
            </WorkerBox>
          </Box>
        </Box>
        <Diagram
          connections={fixed}
          animation={{ type: "draw", duration: 1000 }}
        />
      </Stack>
    </Box>
  );
}
