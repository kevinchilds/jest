import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ListsDemo from "./ListsDemo";


test("toggle button when button clicked", async () => {
    render(<ListsDemo/>);
    

    let pokemons = screen.getByTestId("pokemon-container");

    await waitFor(() => {
        expect(pokemons.childElementCount).toEqual(20);
        
    });

});