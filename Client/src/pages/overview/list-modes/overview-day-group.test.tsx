import {act, render, screen} from "@testing-library/react";
import OverviewDayGroup from "./overview-day-group";
import {getMockEntries} from "../../../functions/get-mock-attendances";

describe('OverviewDayGroup', () => {
    it('This component shows all the entries of the prop', async () => {
        const mockEntries = getMockEntries();
        act(() => {
            render(<OverviewDayGroup entries={mockEntries}/>);
        });

        const entryWrapper = screen.getByTestId('Overview-Day-Group');

        expect(entryWrapper).toBeInTheDocument();
        expect(entryWrapper).not.toBeEmptyDOMElement();


        const entries = screen.getAllByTestId('Simple-List-Entry');

        expect(entries).toHaveLength(mockEntries.length);
    })

    // TODO: Add test that calculates icon status
})
