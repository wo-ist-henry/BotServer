export interface Attendance {
    id: number;
    place: string;
    description?: string;
    momentFrom: Date;
    momentUntil?: Date;
}

export type AttendanceStatus = 'notStarted' | 'active' | 'done';
