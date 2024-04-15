import {render, screen} from "@testing-library/react";
import {expect, vi, describe, it } from "vitest";
import Landing from "./landing";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

describe("Landing", () => {
    it("should render properly", () => {
        render (
        <BrowserRouter>
            <Landing/>
        </BrowserRouter>
        );

        const collection = screen.queryByText("The BET Collection");
        expect(collection).toBeNull()
        //to text if "Collective had been misspelled anywhere in the document"
    });
});