import {AttendanceStatus} from "../models/attendance";

export function dateToStatus(from: Date, to?: Date): AttendanceStatus {
    const now = new Date();
    const entryIsInFuture = now < from;

    if (entryIsInFuture) {
        return "notStarted";
    }
    const entryIsInPast = to != null && now > to;
    if (entryIsInPast) {
        return "done";
    }
    return "active";
}
