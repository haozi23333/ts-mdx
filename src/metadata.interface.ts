
import * as ts from 'typescript';

export type MetaDataType = ts.SyntaxKind;

export interface MetaData {
    type: MetaDataType,
    sourceNode: ts.Node,
    jsDoc: []
    children: MetaData[]
}

export interface JsDoc {
    
}

export interface MetaDataTree extends Array<MetaData> {
    fileName: string,
    filePath: string,
    sourceFile: ts.SourceFile,
    children: MetaData[]
}