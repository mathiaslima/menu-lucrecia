import React from "react";
import { Text } from "react-native";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import PostFooterLUCC from "../Organisms/PostFooterLUCC";


test("Test if render Component de Post Footer", async () => {

    const configComponent = {
        testID: "testID",
        icons: [
            {
                icon: <Text>@</Text>,
                onPress: jest.fn(),
                testID: "testID-Icon-1",
            },
            {
                icon: <Text>@</Text>,
                onPress: jest.fn(),
                testID: "testID-Icon-2",
            },
        ]
    };

    const { getByTestId } = render(
        <PostFooterLUCC
            testID={configComponent.testID}
            icons={configComponent.icons}
        />
    );

    await waitFor(() => expect(getByTestId(configComponent.testID)).toBeTruthy());

    await act(async () => expect(getByTestId(configComponent.icons[0].testID)).toBeTruthy());
    const firstButtonIcon = getByTestId(configComponent.icons[0].testID);
    fireEvent.press(firstButtonIcon);
    expect(configComponent.icons[0].onPress.mock.calls.length).toBe(1);

    await act(async () => expect(getByTestId(configComponent.icons[1].testID)).toBeTruthy());
    const lastButtonIcon = getByTestId(configComponent.icons[1].testID);
    fireEvent.press(lastButtonIcon);
    expect(configComponent.icons[1].onPress.mock.calls.length).toBe(1);


});
