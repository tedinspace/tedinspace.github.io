import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Form,
  FormField,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import { DARK0 } from "../../shared/colors";

function ContactPage() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [wasFailure, setWasFailure] = useState(false);
  const width: number = 250;
  const style: any = { border: "1px solid #5F6B7C", background: DARK0 };
  return (
    <Box fill pad="medium" id="grid-pattern" overflow={"auto"}>
      <Text size="xxlarge">Contact Me</Text>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={({ value: nextValue }) => {
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
              setWasSubmitted(true);
              setWasFailure(false);
            })
            .catch((err) => {
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
        {wasSubmitted ? (
          <>
            <Button
              type="submit"
              label="submit"
              size="large"
              style={{ background: "#238C2C" }}
            />
            <br />
            &nbsp;
            <Text color={"#43BF4D"}>
              <b>message sent!</b>
            </Text>
          </>
        ) : (
          <Button type="submit" label="submit" size="large" />
        )}
      </Form>
      {wasFailure && (
        <>
          &nbsp;
          <Text color={"#EB6847"}>
            <b>something went wrong; message not sent</b>
          </Text>
        </>
      )}
    </Box>
  );
}

export default ContactPage;
