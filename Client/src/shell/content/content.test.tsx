import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import Content from "./content";

describe('Content Tests', () => {
    it.each`
        route
        ${''}
        ${'/status'}
    `
    ('Content shows the Status page when URL is empty or /status', async ({route}) => {
        render(
            <MemoryRouter initialEntries={[route]}>
                <Content/>
            </MemoryRouter>
        );

        const statusContent = screen.getByTestId('status-content');
        const addContent = screen.queryByTestId('add-content');

        expect(statusContent).toBeInTheDocument();
        expect(addContent).not.toBeInTheDocument();
    });

    it('Content shows the Add page when URL is /add', () => {
        render(
            <MemoryRouter initialEntries={['/add']}>
                <Content/>
            </MemoryRouter>
        );

        const addContent = screen.getByTestId('add-content');

        expect(addContent).toBeInTheDocument();
    })
});
