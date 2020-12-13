import OverviewPage, {fakeFetchEintraege} from "./overview-page";
import {act, render, screen} from "@testing-library/react";


describe('Overview Page', () => {
    it('Die Seite zeigt alle Einträge des States an', async () => {
        await act(async () => {
            render(<OverviewPage/>);
        });

        const eintragWrapper = screen.getByTestId('Overview-Page--list-wrapper');

        expect(eintragWrapper).toBeInTheDocument();
        expect(eintragWrapper).not.toBeEmptyDOMElement();


        const mockEintraege = await fakeFetchEintraege(); // Nur bis Umbau
        const eintraege = screen.getAllByTestId('SimplerListenEintrag');

        expect(eintraege).toHaveLength(mockEintraege.length);
    })

    // TODO: Add test that calculates icon status
})
