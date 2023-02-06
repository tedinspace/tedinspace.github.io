import { Heading, PageContent, Paragraph, Text } from "grommet";
import { Clock } from "grommet-icons";
import { HEADER0, POP1 } from "../..";

export function WidgetsSection() {
  return (
    <div>
      <PageContent>
        <Heading color={HEADER0} size="small">
          Widgets
        </Heading>
        <div style={{ width: "150px", borderTop: "1px solid " + POP1 }} />
        <Paragraph>
          adding things as I can!
          <br />
          <ul>
            <li>
              <Clock />
              &nbsp;&nbsp;
              <a href="https://tedsite.com/what-time-is-it-right-now/">
                <Text size="large">What Time is It Right Now (WTIIRN)</Text>
              </a>
            </li>
            <li>
              <i>
                <Text color={HEADER0}>
                  ever want to know what time it is right now in all the time
                  formats Ted uses?
                </Text>
              </i>
            </li>
          </ul>
        </Paragraph>
      </PageContent>
    </div>
  );
}
