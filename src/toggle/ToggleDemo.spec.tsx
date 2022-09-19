import { fireEvent, render, screen } from "@testing-library/react";
import ToggleDemo from "./ToggleDemo";


test("toggle button when button clicked", () => {
    render(<ToggleDemo/>);

    let toggleBtn = screen.getByTestId("toggle-btn");
    let contentDiv = screen.getByTestId("content");

    expect(contentDiv).toHaveStyle("display: none");

    fireEvent.click(toggleBtn);

    expect(contentDiv).toHaveStyle("display: block");

});