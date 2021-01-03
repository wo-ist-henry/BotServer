import './load-list-data-button.css';
import {Button} from "react-bootstrap";
import {getMockEntries} from "../../functions/get-mock-attendances";
import {useEffect, useRef, useState} from "react";
import {Attendance} from "../../models/attendance";

interface LoadListDataButtonProps {
    entries: Attendance[];
    setEntries: (newEntries: Attendance[]) => void
}

export function LoadListDataButton({entries, setEntries}: LoadListDataButtonProps) {
    const [entriesChanged, setEntriesChanged] = useState<boolean>(() => false);
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;

            const mockEntries = JSON.stringify(getMockEntries());
            const currEntries = JSON.stringify(entries);

            if (mockEntries === currEntries) {
                return;
            }
        }

        setEntriesChanged(true);
    }, [entries])

    function loadStandardAttendances() {
        isFirstRun.current = true;
        setEntries(getMockEntries());
        setEntriesChanged(false);
    }

    if (!entriesChanged) {
        return null;
    }

    return (
        <Button className="Load-List-Data-Button" variant="outline-primary" onClick={() => loadStandardAttendances()}>
            Refill
        </Button>
    )
}
