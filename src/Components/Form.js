import React from "react";
import { useFormik } from "formik";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

function FormComp() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' height='100vh' gap='15px'>
        <Heading fontSize="40px" fontWeight="bolder" color="teal">
          Login
        </Heading>
        <Box display="flex" alignItems="flex-start" flexDirection="column">
          <label style={{ fontSize: "15px" }} htmlFor="email">
            Email Address
          </label>
          <Input
            width="300px"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Box>
        <Box display="flex" alignItems="flex-start" flexDirection="column">
          <label style={{ fontSize: "15px" }} htmlFor="password">
            Password
          </label>
          <InputGroup width="300px" size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Button size="md" colorScheme="teal" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}
export default FormComp;
