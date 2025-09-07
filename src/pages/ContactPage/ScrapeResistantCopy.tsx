import { Box, Button, Tip } from "grommet";
import { CircleInformation, Clipboard } from "grommet-icons";
import { decode } from "./scrapeResistanceLogic";
const ENCODED_EMAIL :string = "0biGCDA3X8WqakLZjTDEck3ZerEL"
function ScrapeResistantCopy() {

    return (
        <Box pad="medium">
            <div>
                <Box direction="row">
                    <Button primary label="Copy email to clipboard" size="large" icon={<Clipboard />} onClick={() => {
                        copy(decode(ENCODED_EMAIL));
                    }} />
                    &nbsp;
                    <Tip content="uses basic obfuscation to trick naive web scrapers; click for details.">
                        <a href="https://github.com/tedinspace/tedinspace.github.io/tree/develop/src/pages/ContactPage/scrapeResistanceLogic.ts"><CircleInformation size="medium" color={"orange_light"} /></a>
                    </Tip>
                </Box>
            </div>
        </Box>
    );
}

export default ScrapeResistantCopy;

async function copy(text2copy: string) {
    try {
        await navigator.clipboard.writeText(text2copy);
    } catch (err) {
        alert("Failed to copy; use="+decode(ENCODED_EMAIL))
        console.error('Failed to copy scrape-resistant text: ', err);        
    }
}



