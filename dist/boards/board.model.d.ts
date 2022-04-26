export interface Board {
    id: string;
    title: string;
    desc: string;
    status: BoardStatus;
}
export declare enum BoardStatus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
