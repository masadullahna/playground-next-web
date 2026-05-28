'use client';

import { useEffect, useState, type FC } from 'react';
import { $getRoot } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

const Statusbar: FC = () => {
    const [editor] = useLexicalComposerContext();

    const [stats, setStats] = useState({ words: 0, chars: 0, spaces: 0 });

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const text = $getRoot().getTextContent();

                const words = text.trim().split(/\s+/).filter(Boolean).length;

                const chars = text.length;

                const spaces = (text.match(/\s/g) || []).length;

                setStats({ words, chars, spaces });
            });
        });
    }, [editor]);

    return (
        <div className="flex justify-end p-2 border-t border-gray-200 text-sm text-gray-500 bg-white select-none">
            <span>Words: {stats.words} | Characters: {stats.chars} | Spaces: {stats.spaces}</span>
        </div>
    );
};

export default Statusbar