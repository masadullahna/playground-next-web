'use client';

import { useState, useEffect, type FC } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection, $getRoot } from 'lexical';
import { Bold, Copy, Italic, Underline, Strikethrough, Superscript, Subscript } from 'lucide-react';

const Toolbar: FC = () => {
    const [editor] = useLexicalComposerContext();

    const [activeFormats, setActiveFormats] = useState({
        bold: false, italic: false, underline: false,
        strikethrough: false, superscript: false, subscript: false
    });

    const copyToClipboard = () => {
        editor.getEditorState().read(() => {
            const text = $getRoot().getTextContent();
            navigator.clipboard.writeText(text).then(() => {
                alert('Copied all text to clipboard!');
            });
        });
    };

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const selection = $getSelection();
                if ($isRangeSelection(selection)) {
                    setActiveFormats({
                        bold: selection.hasFormat('bold'),
                        italic: selection.hasFormat('italic'),
                        underline: selection.hasFormat('underline'),
                        strikethrough: selection.hasFormat('strikethrough'),
                        superscript: selection.hasFormat('superscript'),
                        subscript: selection.hasFormat('subscript'),
                    });
                }
            });
        });
    }, [editor]);

    const toolbarItems = [
        { icon: Bold, action: 'bold', label: 'Bold' },
        { icon: Italic, iconProps: { className: 'italic' }, action: 'italic', label: 'Italic' },
        { icon: Underline, action: 'underline', label: 'Underline' },
        { icon: Strikethrough, action: 'strikethrough', label: 'Strikethrough' },
        { icon: Superscript, action: 'superscript', label: 'Superscript' },
        { icon: Subscript, action: 'subscript', label: 'Subscript' },
    ];

    return (
        <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-white">
            {toolbarItems.map((item) => (
                <button
                type='button'
                    key={item.action}
                    onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, item.action as any)}
                    className={`p-1.5 rounded transition-colors ${activeFormats[item.action as keyof typeof activeFormats]
                        ? 'bg-gray-200 text-black'
                        : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    title={item.label}
                >
                    <item.icon size={16} strokeWidth={2} />
                </button>
            ))}
            <button
                type='button'
                onClick={copyToClipboard}
                className="p-1.5 rounded hover:bg-gray-100 text-gray-500 transition-colors ml-auto"
                title="Copy All Text"
            >
                <Copy size={16} strokeWidth={2} />
            </button>
        </div>
    );
};

export default Toolbar