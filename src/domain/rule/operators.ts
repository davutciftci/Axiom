import type { Operator } from "./types";

type OperatorFn = (
    fieldValue: string | number | boolean, conditionValue: string | number | boolean) => boolean;

export const operatorMap: Record<Operator, OperatorFn> = {
    EQUALS: (fieldValue, conditionValue) => fieldValue === conditionValue,
    NOT_EQUALS: (fieldValue, conditionValue) => fieldValue !== conditionValue,
    GREATER_THAN: (fieldValue, conditionValue) =>
        typeof fieldValue === 'number' && typeof conditionValue === 'number' && fieldValue > conditionValue,
    LESS_THAN: (fieldValue, conditionValue) =>
        typeof fieldValue === 'number' && typeof conditionValue === 'number' && fieldValue < conditionValue,
    CONTAINS: (fieldValue, conditionValue) =>
        typeof fieldValue === 'string' && typeof conditionValue === 'string' && fieldValue.includes(conditionValue)
}