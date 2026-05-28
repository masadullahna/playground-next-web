import { type FC } from "react"
import { type Metadata } from "next";
import LexicalEditor from "@/components/lexical-editor";

export const metadata: Metadata = {
  title: "Words"
};

const WordsPage: FC = () => {
  return (
    <main className="p-4 flex flex-col min-h-0 grow">
      <div className="flex grow w-full min-h-0">
        <LexicalEditor />
      </div>
    </main>
  )
}

export default WordsPage