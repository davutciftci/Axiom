
import { evaluateConditions } from "../domain/rule/evalutor";
import type { Rule } from "../domain/rule/types";
import type { EngineResult, RuleExecutionResult } from "./types";

export function runRule(rule: Rule, input: Record<string, unknown>): RuleExecutionResult {
    if (!rule.isActive) {
        return {
            ruleId: rule.id,
            ruleName: rule.name,
            executed: false,
        }
    }

    const conditionsPassed = evaluateConditions(rule.conditions, input);

    if (!conditionsPassed) {
        return { ruleId: rule.id, ruleName: rule.name, executed: false }
    }

    return {
        ruleId: rule.id,
        ruleName: rule.name,
        executed: true,
        action: rule.action,
    };
}

export function runEngine(rules: Rule[], input: Record<string, unknown>): EngineResult {

    const results = rules.map((rule) => runRule(rule, input))

    return { results }
}