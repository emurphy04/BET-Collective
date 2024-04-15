import {render, screen, toEqual} from "@testing-library/react";
import {expect, expectTypeOf, toEqualTypeOf, vi, describe, it } from "vitest";
import Checkout from "./checkout";
import ShoppingCart from "../components/ShoppingCart/shoppingCart";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

describe("checkout", () => {
    it("should render properly", () => {
        render(
        <BrowserRouter>
            <Checkout />
        </BrowserRouter>);

        const ccv = screen.getByPlaceholderText("XXX");
        expect (ccv).toBeInTheDocument();
        //check to ensure page asks for the CVV security code

    });

    
});
