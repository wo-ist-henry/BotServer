import {Attendance, ATTENDANCE_LOCAL_STORAGE_KEY} from "../models/attendance";
import useEntries from "./useEntries";
import {act} from "react-dom/test-utils";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function TestComponent() {
    const [entries, setEntries] = useEntries();

    function addEntry() {
        const preEntries = (entries || []).slice();
        const lastId = entries?.[entries.length - 1]?.id ?? 0;
        setEntries([
            ...preEntries,
            {
                id: lastId + 1,
                place: '',
                momentUntil: undefined,
                momentFrom: new Date(),
                description: ''
            }
        ])
    }

    return (
        <>
            <button data-testid="change-entries-btn" onClick={() => addEntry()}>Change</button>
            <div data-testid="entry-wrapper">
                {entries.map(e =>
                    <div data-testid="entry-node" key={e.id}>{e.id}</div>
                )}
            </div>
        </>
    )
}

describe('useEntries', () => {
    beforeEach(() => {
        localStorage.setItem(ATTENDANCE_LOCAL_STORAGE_KEY, '');
    });

    afterEach(() => {
        localStorage.setItem(ATTENDANCE_LOCAL_STORAGE_KEY, '');
    })

    it('should update the entries when setEntries is called', () => {
        localStorage.setItem(ATTENDANCE_LOCAL_STORAGE_KEY, '[]');

        act(() => {
            render(<TestComponent/>);
        });

        const wrapper = screen.getByTestId('entry-wrapper');

        expect(wrapper).toBeEmptyDOMElement();

        const btn = screen.getByTestId('change-entries-btn');
        userEvent.click(btn);

        expect(wrapper).not.toBeEmptyDOMElement();

        let entryNodes = screen.getAllByTestId('entry-node');
        expect(entryNodes).toHaveLength(1);
        expect(entryNodes[0]).toHaveTextContent('1');

        userEvent.click(btn);

        entryNodes = screen.getAllByTestId('entry-node');
        expect(entryNodes).toHaveLength(2);
        expect(entryNodes[0]).toHaveTextContent('1');
        expect(entryNodes[1]).toHaveTextContent('2');
    })

    it('should return the entries from the localstorage', () => {
        const entry: Attendance = {
            id: 55,
            place: '',
            momentUntil: undefined,
            momentFrom: new Date(),
            description: ''
        };

        localStorage.setItem(ATTENDANCE_LOCAL_STORAGE_KEY, JSON.stringify([entry]));

        act(() => {
            render(<TestComponent/>);
        });

        const wrapper = screen.getByTestId('entry-wrapper');

        expect(wrapper).not.toBeEmptyDOMElement();

        let entryNodes = screen.getAllByTestId('entry-node');
        expect(entryNodes).toHaveLength(1);
        expect(entryNodes[0]).toHaveTextContent('55');
    })
})
