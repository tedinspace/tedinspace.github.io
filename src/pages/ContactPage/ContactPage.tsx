import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Form,
  FormField,
  Spinner,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import { theme } from "../../shared/theme";

function ContactPage() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [wasFailure, setWasFailure] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const width: number = 250;
  const style: any = {};
  return (
    <Box fill pad="medium">
      <Text size="xxlarge" color="orange">
        Contact Me
      </Text>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={({ value: nextValue }) => {
          setWasSubmitted(false);
          setWasFailure(false);
          setIsLoading(true);
          axios
            .post(
              "https://contact-ted.onrender.com/email",
              {
                name: nextValue.name,
                email: nextValue.email,
                message: nextValue.message,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then(() => {
              setIsLoading(false);
              setWasSubmitted(true);
              setWasFailure(false);
            })
            .catch((err) => {
              setIsLoading(false);
              setWasSubmitted(false);
              setWasFailure(true);
            });
        }}
      >
        <br />
        <FormField
          name="name"
          style={{ width: width }}
          label={<Text size="large">Your Name</Text>}
          required
        >
          <TextInput name="name" type="name" style={style} />
        </FormField>
        <br />
        <FormField
          style={{ width: width }}
          label={<Text size="large">Your Email</Text>}
          required
          name="email"
        >
          <TextInput name="email" type="email" style={style} />
        </FormField>
        <br />
        <FormField
          style={{ width: width * 2 }}
          label={<Text size="large">Message</Text>}
          required
          name="message"
        >
          <br />
          <TextArea
            resize={false}
            style={{ ...style, ...{ height: 250 } }}
            name="message"
          />
        </FormField>
        <br />
        <Button
          style={
            wasSubmitted ? { background: theme.global.colors.success0 } : {}
          }
          type="submit"
          label={
            isLoading ? (
              <Spinner
                border={[
                  {
                    side: "all",
                    color: "orange",
                    size: "medium",
                    style: "dotted",
                  },
                ]}
              />
            ) : (
              "submit"
            )
          }
          size="large"
        />
      </Form>
      {wasFailure && (
        <>
          &nbsp;
          <Text color={"warning"}>
            <b>something went wrong; message not sent</b>
          </Text>
        </>
      )}
      {wasSubmitted && (
        <Text color={"success1"}>
          <b>message sent!</b>
        </Text>
      )}
      {isLoading && (
        <Text color={"orange_light"}>
          <br />
          <i>
            Okay here's the thing: I'm cheap and I'm using a free tier to host my server,<br/> 
            so this will take about 30-60 seconds to send while the server spins up. 
            <br /> You have to leave the page open while it's sending, but you can minimize it and go about your day. 
          </i>
        </Text>
      )}
    </Box>
  );
}

export default ContactPage;
