import * as ts from 'typescript';

export function parserMetadata(namespace: string, sourceFile: ts.SourceFile): any[] {
    const metadataTree: any[] = [];
    visitNode(sourceFile);
    return metadataTree;
    function visitNode(node: ts.Node) {
        switch (node.kind) {
            case ts.SyntaxKind.ClassDeclaration:
                console.log('找到了一个 class')
            break;
            case ts.SyntaxKind.MethodDeclaration:
                console.log('找到了一个 函数')
            break;
        }
        ts.forEachChild(node, visitNode);
    }
}
