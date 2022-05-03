import MonacoEditor from '@monaco-editor/react';
import React from "react";

interface CodeEditorProps {
    initialValue: string
}

const CodeEditor: React.FC<CodeEditorProps> = ({initialValue}) => {
    return <MonacoEditor language='javascript'
                         value={initialValue}
                         height='500px'
                         theme='dark'
                         options={{
                             wordWrap: 'on',
                             minimap: {enabled: false},
                             showUnused: false,
                             folding: false,
                             lineNumbersMinChars: 3,
                             fontSize: 16,
                             scrollBeyondLastLine: false,
                             automaticLayout: true
                         }}
    />
}
export default CodeEditor;