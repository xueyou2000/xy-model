import { MessageBoxProps } from "xy-messagebox/es/interface";

export interface ModelFooterProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * Model页脚按钮
     */
    children?: React.ReactNode;
}

export interface ModelHeaderProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * Model页眉标题
     */
    children?: React.ReactNode;
    /**
     * 页眉对齐方式
     */
    titleAlign?: "center" | "left";
}

export interface ModelBodyProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * Model内容
     */
    children?: React.ReactNode;
}

export interface ModelContextState {
    /**
     * 关闭对话框函数
     */
    close?: Function;
}

export interface ModelProps extends MessageBoxProps {
    /**
     * 对话框标题
     */
    title?: React.ReactNode;
}
