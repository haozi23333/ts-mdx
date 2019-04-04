import * as ts from 'typescript';
import { getJsDoc } from '_tsutils@3.9.1@tsutils';
import { parserMetadata } from './metadata.parser';

/**
 * 创建 AST 🌲
 */
const program = ts.createProgram(['./test.ts'], {
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  allowJs: true,
  moduleResolution: ts.ModuleResolutionKind.NodeJs
});
let output: any[] = [];

for (const sourceFile of program.getSourceFiles()) {
  if (!sourceFile.isDeclarationFile) {
    // sourceFile.statements.forEach((node) => {
    //   if (ts.isClassDeclaration(node)) {
    //       node.members.forEach(member => {
    //         console.log(member)
    //         // console.log(ts.getJSDocClassTag(member))
    //       })
    //   }
    //   // console.log(ts.getAllJSDocTagsOfKind(node, ts.SyntaxKind.JSDocParameterTag))
    // })
    parserMetadata('namespace', sourceFile);
  }
}

// writeFileSync("./classes.json", JSON.stringify(output, undefined, 4));
