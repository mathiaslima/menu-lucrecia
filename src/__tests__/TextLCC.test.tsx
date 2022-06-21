import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import TextLUCC from "../Atoms/TextLUCC";

test("Test component text - expect text", async () => {
    // Test component text - expect text component
    const configText = {
        text: "Test text",
        otherText: "Other text",
    }

    const { getByText } = render(
        <TextLUCC center h5 bold white>{configText.text}</TextLUCC>
    );

    await waitFor(() => expect(getByText(configText.text)).toBeTruthy());

});
