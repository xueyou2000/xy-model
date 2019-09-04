import React, { useContext } from "react";
import classNames from "classnames";
import { ModelHeaderProps } from "./interface";
import { ModelContext } from "./Context";

export function ModelHeader(props: ModelHeaderProps) {
    const { prefixCls = "xy-model__header", className, style, children, titleAlign = "center" } = props;
    const close = useContext(ModelContext);
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-${titleAlign}`]: true,
    });

    function closeHandle(e: React.MouseEvent<HTMLElement>) {
        if (close) {
            close();
        }
    }

    return (
        <div className={classString} style={style}>
            <p className={`${prefixCls}-title`}>{children}</p>
            <span className={`${prefixCls}-close`} onClick={closeHandle}>
                ✖
            </span>
        </div>
    );
}

export default React.memo(ModelHeader);
