import React, { useState } from "react";
import { Model, ModelBody, ModelFooter, ModelHeader } from "../src";
import { Button } from "xy-button";
import "xy-button/assets/index.css";

const ModelBodyMemo = React.memo(() => {
    return (
        <ModelBody>
            <p>这是对话框内容</p>
            <p>这是对话框内容</p>
            <p>这是对话框内容</p>
            <p>这是对话框内容</p>
        </ModelBody>
    );
});

const ModelFooterMemo = React.memo(({ setVisible }: { setVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <ModelFooter>
            <Button type="text">取消</Button>
            <Button
                type="primary"
                onClick={() => {
                    console.log("点击了确定");
                    setVisible(false);
                }}
            >
                确定
            </Button>
        </ModelFooter>
    );
});

export default function() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Button onClick={() => setVisible(!visible)}>切换</Button>
            <Model title="对话框标题" maskClose={false} visible={visible} onChange={setVisible}>
                <ModelBodyMemo />
                <ModelFooterMemo setVisible={setVisible} />
            </Model>
        </div>
    );
}
