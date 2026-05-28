import { type ReactNode } from "react";

export interface BaseProps {
  readonly children: ReactNode
}

export interface RootLayoutProps extends BaseProps { }

export interface WordsLayoutProps extends BaseProps { }

export interface NavLinkProps extends BaseProps {
  readonly href: string;
}