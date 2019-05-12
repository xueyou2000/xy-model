import classNames from "classnames";
import React from "react";
import { ModelBodyProps } from "./interface";

export function ModelBody(props: ModelBodyProps) {
    const { prefixCls = "xy-model__body", className, style, children } = props;

    console.log("重新渲染  -- ModelBody");

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            {children}
        </div>
    );
}

export default React.memo(ModelBody);
