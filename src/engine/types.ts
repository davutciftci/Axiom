import type { Action } from "../domain/rule/types";


export interface RuleExecutionResult {
    ruleId: string;
    ruleName: string;
    executed: boolean;
    action?: Action[];
}

export interface EngineResult {
    results: RuleExecutionResult[]
}