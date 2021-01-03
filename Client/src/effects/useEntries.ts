import {useEffect, useState} from "react";
import {Attendance, ATTENDANCE_LOCAL_STORAGE_KEY} from "../models/attendance";

export default function useEntries(): [Attendance[], (entries: Attendance[]) => void] {
    const [entries, setEntries] = useState<Attendance[]>(() => {
        const attendanceJson = localStorage.getItem(ATTENDANCE_LOCAL_STORAGE_KEY) || '[]';
        const attendances = JSON.parse(attendanceJson) as Attendance[];
        attendances.forEach(e => {
            e.momentFrom = new Date(e.momentFrom);
            e.momentUntil = e.momentUntil != null ? new Date(e.momentUntil) : undefined;
        });

        return attendances;
    });

    useEffect(() => {
        localStorage.setItem(ATTENDANCE_LOCAL_STORAGE_KEY, JSON.stringify(entries));
    }, [entries]);

    return [entries, setEntries];
}
