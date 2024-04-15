import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {expect, vi, describe, it, } from "vitest";
import Hero from "./hero";
import { BrowserRouter } from 'react-router-dom';


describe("Hero", () => {
    it("should render properly", () => {
        render (
        <BrowserRouter>
            <Hero/>
        </BrowserRouter>);
    
        const saleText = screen.getByText("SALE UP TO 25% OFF");
        expect(saleText).toBeInTheDocument();
        // tests to make sure the correct discount is being displayed
    
    });

    it("should render properly", () => {
        render (
        <BrowserRouter>
            <Hero />
        </BrowserRouter>);
        const textCategory = screen.getByText("TECH + TRAVEL GEAR");
        expect(textCategory).toBeInTheDocument();
        //tests to make sure the correct category is being displayed
    });
    
});