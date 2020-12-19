import OverviewPage, {fakeFetchEintraege} from "./overview-page";
import {act, render, screen} from "@testing-library/react";


describe('sadasdasdad', () => {
    it('This page shows all the entries of the state', async () => {
        await act(async () => {
            render(<OverviewPage/>);
        });

        const entryWrapper = screen.getByTestId('Overview-Page--list-wrapper');

        expect(entryWrapper).toBeInTheDocument();
        expect(entryWrapper).not.toBeEmptyDOMElement();


        const mockEntries = await fakeFetchEintraege(); // Until we refactor it
        const entries = screen.getAllByTestId('SimpleListEntry');

        expect(entries).toHaveLength(mockEntries.length);
    })
})
