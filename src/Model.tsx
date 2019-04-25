import classNames from "classnames";
import React from "react";
import { MessageBox } from "xy-messagebox";
import "xy-messagebox/assets/index.css";
import { ModelProps } from "./interface";
import { ModelContext } from "./Context";
import ModelHeader from "./ModelHeader";

export function Model(props: ModelProps) {
    const { prefixCls = "xy-model", className, style, children, title, ...rest } = props;
    let closeFunc: Function;

    function getCloseFunc(close: Function) {
        closeFunc = close;
        if (props.getCloseFunc) {
            props.getCloseFunc(closeHandle);
        }
    }

    function closeHandle() {
        if (closeFunc) {
            closeFunc();
        }
    }

    return (
        <MessageBox {...rest} getCloseFunc={getCloseFunc}>
            <ModelContext.Provider value={{ close: closeHandle }}>
                <div className={classNames(prefixCls, className)} style={style}>
                    {title && <ModelHeader>{title}</ModelHeader>}
                    {children}
                </div>
            </ModelContext.Provider>
        </MessageBox>
    );
}

export default React.memo(Model);
