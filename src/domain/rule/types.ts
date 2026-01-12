export type Operator =
    | "EQUALS"
    | "NOT_EQUALS"
    | "GREATER_THAN"
    | "LESS_THAN"
    | "CONTAINS"

export interface Condition {
    id: string;
    field: string;
    operator: Operator;
    value: string | number | boolean;
}

export type Action =
    | {
        type: "ADD_LABEL";
        payload: {
            label: string;
        }
    }
    | {
        type: "SET_STATUS";
        payload: {
            status: "ACTİVE" | "PASSIVE" | "BLOCKED"
        }
    }

export interface Rule {
    id: string;
    name: string;
    isActive: boolean;
    conditions: Condition[];
    action: Action[]
}