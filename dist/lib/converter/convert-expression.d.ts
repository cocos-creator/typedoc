import * as ts from 'typescript';
export declare function convertDefaultValue(node: ts.VariableDeclaration | ts.ParameterDeclaration | ts.EnumMember): string | undefined;
export declare function convertExpression(expression: ts.Expression): string;
