import classNames from "classnames";
import React, { useCallback } from "react";
import { MessageBox } from "xy-messagebox";
import "xy-messagebox/assets/index.css";
import { ModelProps } from "./interface";
import { ModelContext } from "./Context";
import ModelHeader from "./ModelHeader";

export function Model(props: ModelProps) {
    const { prefixCls = "xy-model", className, style, children, title, ...rest } = props;
    let closeFunc: Function;

    const getCloseFunc = useCallback((close: Function) => {
        closeFunc = close;
        if (props.getCloseFunc) {
            props.getCloseFunc(close);
        }
    }, []);

    const closeHandle = useCallback((args) => {
        if (closeFunc) {
            closeFunc(args);
        }
    }, []);

    return (
        <MessageBox {...rest} getCloseFunc={getCloseFunc}>
            <ModelContext.Provider value={closeHandle}>
                <div className={classNames(prefixCls, className)} style={style}>
                    {title && <ModelHeader>{title}</ModelHeader>}
                    {children}
                </div>
            </ModelContext.Provider>
        </MessageBox>
    );
}

export default React.memo(Model);
