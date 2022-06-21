import React from "react";
import { Text } from "react-native";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import ButtonIconLUCC from "../Molecules/ButtonIconLUCC";


test("Test of click in button icon", async () => {
    const mockFn = jest.fn();
    const configButton = {
        testID: "Click me",
    };

    const { getByTestId } = render(
        <ButtonIconLUCC
            onPress={mockFn}
            testID={configButton.testID}
            icon={<Text>@</Text>}
        />
    );

    const button = getByTestId(configButton.testID);
    fireEvent.press(button);

    await waitFor(() => expect(getByTestId(configButton.testID)).toBeTruthy());
    expect(mockFn.mock.calls.length).toBe(1);

});
