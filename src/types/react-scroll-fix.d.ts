declare module 'react-scroll' {
    import * as React from 'react';
    interface LinkProps {
        to: string;
        containerId?: string;
        spy?: boolean;
        smooth?: boolean | string;
        duration?: number;
        delay?: number;
        isDynamic?: boolean;
        offset?: number;
        activeClass?: string;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
        [key: string]: any;
    }
    export class Link extends React.Component<LinkProps> {}
}