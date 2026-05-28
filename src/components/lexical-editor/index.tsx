'use client';

import { type FC } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import StatusBar from '@/components/statusbar';
import Toolbar from '@/components/toolbar';

const theme = {
    text: {
        bold: 'font-bold',
        italic: 'italic',
        underline: 'underline',
        strikethrough: 'line-through',
        superscript: 'align-super text-xs',
        subscript: 'align-sub text-xs',
    },
};

function onError(error: Error) { console.error(error); }

const LexicalEditor:FC = () => {
    const initialConfig = { namespace: 'WordsEditor', theme, onError };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="relative flex flex-col grow min-h-0 w-full border border-gray-200 rounded-lg p-4 bg-white overflow-y-auto">
                <Toolbar />

                <div className="grow overflow-y-auto">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="outline-none min-h-full w-full" />
                        }
                        placeholder={<div className="absolute top-16 left-4 text-gray-400 pointer-events-none">Start typing...</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                </div>

                <StatusBar />
                <HistoryPlugin />
            </div>
        </LexicalComposer>
    );
};

export default LexicalEditor