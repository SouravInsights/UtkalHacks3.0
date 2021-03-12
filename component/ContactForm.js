import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Input,
    Stack,
    FormLabel,
    Textarea,
    Button,
    FormControl
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default () => {
    const firstField = React.useRef();
    const btnRef = React.useRef();

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: "",
        message: "",
    });

    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: "",
                message: "",
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: "POST",
            url: "https://formspree.io/f/maylrjok",
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    "Thank you, 🙏  your message has been submitted 🙂."
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <Stack color="gray" spacing={["20px", "20px", "20px", "20px"]}>
                    <FormControl id="full-name" isRequired>
                        <FormLabel htmlFor="fullname">Full name</FormLabel>
                        <Input
                            borderColor="gray"
                            borderRadius="2px"
                            ref={firstField}
                            color="gray"
                            id="fullname"
                            placeholder="Your full name"
                        />
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel htmlFor="url">Email address</FormLabel>
                        <Input
                            borderRadius="2px"
                            borderColor="gray"
                            ref={firstField}
                            name="_replyto"
                            placeholder="Your email address"
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    <FormControl id="Company/College-name" isRequired>
                        <FormLabel htmlFor="url">Company/College Name</FormLabel>
                        <Input
                            borderRadius="2px"
                            borderColor="gray"
                            ref={firstField}
                            placeholder="Your college or company name"
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    <FormControl id="idea" isRequired>
                        <FormLabel htmlFor="idea">What's the pain/problem ?</FormLabel>
                        <Textarea
                            id="idea"
                            borderRadius="2px"
                            borderColor="gray"
                            onChange={handleOnChange}
                            placeholder="Briefly talk about the idea"
                        />
                    </FormControl>
                </Stack>
                <Button
                    my={["20px", "20px", "30px", "30px"]}
                    borderRadius="2px"
                    bg="black"
                    color="white"
                    fontWeight="bold"
                    type="submit"
                    _hover="none"
                    disabled={status.submitting}
                >
                    {!status.submitting
                        ? !status.submitted
                            ? "Send to UtkalHacks"
                            : "Submitted"
                        : "Submitting..."}
          &#160; <FaLongArrowAltRight />
                </Button>
            </form>

            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </>
    );
};