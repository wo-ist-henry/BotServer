import OverviewPage, {fakeFetchEntries} from "./overview-page";
import {act, render, screen} from "@testing-library/react";


describe('OverviewPage', () => {
    it('This page shows all the entries of the state', async () => {
        await act(async () => {
            render(<OverviewPage/>);
        });

        const entryWrapper = screen.getByTestId('Overview-Page--list-wrapper');

        expect(entryWrapper).toBeInTheDocument();
        expect(entryWrapper).not.toBeEmptyDOMElement();


        const mockEntries = await fakeFetchEntries(); // Until we refactor it
        const entries = screen.getAllByTestId('Simple-List-Entry');

        expect(entries).toHaveLength(mockEntries.length);
    })

    // TODO: Add test that calculates icon status
})
