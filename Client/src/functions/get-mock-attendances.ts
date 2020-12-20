import {Attendance} from "../models/attendance";

export function getMockEntries(): Attendance[] {
    const today = new Date();
    return [
        {
            id: 1,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6),
            momentUntil: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 30),
            place: 'Zuhause',
            description: 'Gerade aufgestanden und gleich gehts zur Arbeit.'
        },
        {
            id: 2,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 30),
            momentUntil: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8),
            place: 'Unterwegs',
            description: 'Auf dem Weg zur Arbeit.'
        },
        {
            id: 3,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8),
            momentUntil: undefined,
            place: 'Arbeit',
            description: 'Zur Zeit bin ich im Büro.'
        },
        {
            id: 4,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 15),
            momentUntil: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 20),
            place: 'Kaffeemaschine'
        }
    ];
}
