import React, { useContext } from "react";
import classNames from "classnames";
import { ModelFooterProps } from "./interface";
import { ModelContext } from "./Context";

export function ModelFooter(props: ModelFooterProps) {
    const { prefixCls = "xy-model__footer", className, style, children } = props;
    const close = useContext(ModelContext);


    function closeHandle(e: React.MouseEvent<HTMLElement>) {
        if (close) {
            close();
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            {React.Children.map(children, (btn: any, i) => {
                if (btn.props.onClick) {
                    return btn;
                } else {
                    return React.cloneElement(btn, { key: i, onClick: closeHandle });
                }
            })}
        </div>
    );
}

export default React.memo(ModelFooter);
