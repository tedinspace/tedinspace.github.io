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
import { DARK0, POP2 } from "../../shared/colors";

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
  const style: any = { border: "1px solid #5F6B7C", background: DARK0 };
  return (
    <Box fill pad="medium" overflow={"auto"} id="grid-pattern">
      <Text size="xxlarge">Contact Me</Text>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={({ value: nextValue }) => {
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
          style={wasSubmitted ? { background: "#238C2C" } : {}}
          type="submit"
          label={
            isLoading ? (
              <Spinner
                border={[
                  {
                    side: "all",
                    color: POP2,
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
          <Text color={"#EB6847"}>
            <b>something went wrong; message not sent</b>
          </Text>
        </>
      )}
      {wasSubmitted && (
        <Text color={"#43BF4D"}>
          <b>message sent!</b>
        </Text>
      )}
    </Box>
  );
}

export default ContactPage;
