import { Text, Box } from "grommet";
import { CopyBlock, nord, monoBlue } from "react-code-blocks";
import { AppTsxCode, FibonacciWorkerTs } from ".";
import { WorkerDiagram } from "./WorkerDiagram";

export function WorkerTutorial(props: { darkMode: boolean }) {
  return (
    <Box style={{ margin: 75, marginTop: 50 }}>
      <div>
        <Text size="xxlarge" color={"orange"}>
          <b>Web Workers / Multi-threading in ReactJS (with TypeScript)</b>
        </Text>
        <div style={{ height: 55 }} />
        <WorkerDiagram darkMode={props.darkMode}/>
        <div style={{ height: 55 }} />
        <h3>Index</h3>
        <ul>
          <li>
            <b>I. Preface (Skippable)</b>
          </li>
          <li>
            <b>II. Repository Link</b>
          </li>
          <li>
            <b>III. Copy and Paste Code</b>
          </li>
          <li>
            <b>IV. Live Demo</b>
          </li>
          <li>
            <b>V. Conclusion and Resources</b>
          </li>
        </ul>
        <div style={{ height: 50 }} />
        <h3>I. Preface (Skippable) </h3>
        <Box style={{ marginLeft: 35 }}>
          <i>
            <Text color={"orange"}>
              If you already get the jist / don't like preambles, feel free to
              move to the next point.
            </Text>
          </i>
          <br />
          Okay, here is the thing: considering that Javascript is
          single-threaded, it does a pretty great job of being the language of
          the web. However, if you want a web application to conduct any amount
          of computation that is not trivial, you will experience lagging where
          your application becomes unresponsive for periods of time.
          <br />
          <br />I really like web applications because anyone with a browser and
          internet access can use your code without downloading anything or
          worrying about operating systems. It makes applications the most
          accessible to the audience you want to reach, since no one (including
          technical professionals) likes following README installation
          instructions.
          <br />
          <br />
          That being said, if you do want to perform any significant computation
          in the context of a web application, you basically have two options:
          <br />
          <div style={{ width: "50%" }}>
            <ol>
              <li>
                <b>Server-side approach:</b> <br /> My eyes used to glaze over
                when I saw phrases like "client side" and "server side," but all
                that this means is that you have another computer run the
                computation and deliver you the result when it's done.
                <br />
                <br />
                For example, imagine if you have some Python code that does all
                of your intense computation perfectly for you. You don't want to
                translate that into Javascript; nor do you want to deal with how
                slow it runs. You can wrap that code in a simple Python
                web-server and host it through AWS or some other service (i.e.:
                host it using a computer that doesn't belong to you, usually at
                some price)
                <br />
                &nbsp;
              </li>
              <li>
                <b>Client-side approach:</b> <br />
                Here is what we are talking about in this tutorial. In this
                case, you just want to run your computation in the browser of
                whomever is accessing your website. Javascript is
                single-threaded and it runs synchrounously (unless otherwise
                specified via Promises etc.), which means if you ask it to do
                three tasks--A, B, and C--it will conduct A then B then C. If
                one task takes a long time, the page will become unresponsive.
                Let's say A takes 30 seconds to execute; you can pass the
                computation to a web worker and then execute B and C with no
                delay. Otherwise, your user will have to sit for 30 seconds with
                an unresponsive web page, while A executes.
              </li>
            </ol>
          </div>
        </Box>
        <h3> II. Repository Link</h3>
        <Box style={{ marginLeft: 35 }}>
          <Text size="xlarge">
            <a
              href="https://github.com/tedinspace/worker-tutorial"
              target="_blank"
              rel="noreferrer"
            >
              code repository here
            </a>
          </Text>
          <br />
          <Text color="swap_soft">
            <i>
              if you're the type of person who just likes to look at the code
              directly in the context it is ran, click the link above.
            </i>
          </Text>
        </Box>
        <h3> III. Copy and Paste Code</h3>
        <Box style={{ marginLeft: 35 }}>
          We have two files here:&nbsp;
          <Box style={{ marginLeft: 15 }}>
            <br />
            <a
              href="https://github.com/tedinspace/worker-tutorial/blob/main/src/fibonacci-worker.ts"
              target="_blank"
              rel="noreferrer"
            >
              <i>&nbsp;&nbsp;1. fibonacci-worker.ts</i>
            </a>
            <Box style={{ marginLeft: 25 }}>
              this is the web worker itself. Use this snippet to run your
              function (instead of mine 'fibonacci(...)')
            </Box>
            <br />
            <a
              href="https://github.com/tedinspace/worker-tutorial/blob/main/src/App.tsx"
              target="_blank"
              rel="noreferrer"
            >
              <i>&nbsp;&nbsp;2. App.tsx</i>
            </a>
            <Box style={{ marginLeft: 25 }}>
              this is the file responsible for calling the web worker based on
              user input. I tried to keep it simple for the sake of moving
              quickly.
            </Box>
          </Box>
          <br />
          <br />
          <b>
            <Text color={"blue"} size="large">
              fibonacci-worker.ts
            </Text>
          </b>
          <CopyBlock
            text={FibonacciWorkerTs()}
            language={"js"}
            showLineNumbers
            theme={props.darkMode ? nord : monoBlue}
            wrapLongLines
          />
          <br />
          <br />
          <b>
            <Text color={"blue"} size="large">
              App.tsx
            </Text>
          </b>
          <CopyBlock
            text={AppTsxCode()}
            language={"jsx"}
            showLineNumbers
            theme={props.darkMode ? nord : monoBlue}
            wrapLongLines
          />
        </Box>
        <div style={{ height: 50 }} />
        <h3>IV. Live Demo</h3>
        <Text size="xlarge">
          <a
            href="https://tedsite.com/worker-tutorial/"
            target="_blank"
            rel="noreferrer"
          >
            view the code shown above here
          </a>
        </Text>
        <div style={{ height: 20 }} />
        <h3>V. Conclusion and Resources </h3>
        <Box style={{ marginLeft: 35 }}>
          I like really short and succinct tutorials, which is what I've tried
          to make here.
          <br />
          <br />
          However, here are some other resources on this topic (including more
          comprehensive/longer-winded articles)
          <br />
          <ol>
            <li>
              <a
                href="https://blog.logrocket.com/web-workers-react-typescript/"
                target="_blank"
                rel="noreferrer"
              >
                Longer tutorial with more code and explanation
              </a>
            </li>
            <li>
              <a
                href="https://blog.logrocket.com/integrating-web-workers-in-a-react-app-with-comlink/"
                target="_blank"
                rel="noreferrer"
              >
                Using Comlink to access web workers
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tedinspace/convolve/blob/main/src/workers/runFunctionEval.ts"
                target="_blank"
                rel="noreferrer"
              >
                More of my code that uses web workers to numerically solve
                mathematical functions
              </a>
            </li>
          </ol>
        </Box>
        <div style={{ height: 50 }} />
      </div>
    </Box>
  );
}
