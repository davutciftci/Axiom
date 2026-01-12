import { operatorMap } from "./operators";
import type { Condition } from "./types";

export function evaluateCondition(
    condition: Condition,
    input: Record<string, unknown>
): boolean {
    const fieldValue = input[condition.field];

    if (fieldValue === undefined) {
        return false;
    }

    const operatorFn = operatorMap[condition.operator];
    return operatorFn(fieldValue as string | number | boolean, condition.value);
}

export function evaluateConditions(
    conditions: Condition[],
    input: Record<string, unknown>
): boolean {
    return conditions.every((condition) => evaluateCondition(condition, input));
}