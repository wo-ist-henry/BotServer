import {render, screen} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import Sidenav from "./sidenav";

describe('Sidenav Tests', () => {
    it('Sidenav has exactly two links', () => {
        render(
            <MemoryRouter>
                <Sidenav/>
            </MemoryRouter>
        );
        const nav = screen.getByTestId('sidenav');

        expect(nav.childElementCount).toEqual(2);
    })
});
