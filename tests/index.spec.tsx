import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Model, ModelBody, ModelFooter } from "../src";

describe("component", () => {
    test("render", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const wrapper = render(
            <Model title="对话框标题" defaultVisible={true} getContainer={container}>
                <ModelBody>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                </ModelBody>
                <ModelFooter>
                    <button>取消</button>
                    <button>确定</button>
                </ModelFooter>
            </Model>,
            { container }
        );

        const p = wrapper.getByText("对话框标题");
        expect(p.classList.contains("xy-model__header-title")).toBeTruthy();

        const confirmButton = wrapper.getByText("确定");
        const cancelButton = wrapper.getByText("取消");

        expect(confirmButton).toBeDefined();
        expect(cancelButton).toBeDefined();
    });

    test("close", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const wrapper = render(
            <Model title="对话框标题" defaultVisible={true} getContainer={container}>
                <ModelBody>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                </ModelBody>
                <ModelFooter>
                    <button>取消</button>
                    <button>确定</button>
                </ModelFooter>
            </Model>,
            { container }
        );
        const model = container.querySelector(".xy-messagebox");
        expect(model.classList.contains("xy-messagebox-open")).toBeTruthy();
        const closeBtn = wrapper.getByText("✖");
        fireEvent.click(closeBtn);
        expect(model.classList.contains("xy-messagebox-open")).toBeFalsy();
    });

    test("footer button close", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const wrapper = render(
            <Model title="对话框标题" defaultVisible={true} getContainer={container}>
                <ModelBody>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                    <p>这是对话框内容</p>
                </ModelBody>
                <ModelFooter>
                    <button>取消</button>
                </ModelFooter>
            </Model>,
            { container }
        );
        const model = container.querySelector(".xy-messagebox");
        expect(model.classList.contains("xy-messagebox-open")).toBeTruthy();
        const closeBtn = wrapper.getByText("取消");
        fireEvent.click(closeBtn);
        expect(model.classList.contains("xy-messagebox-open")).toBeFalsy();
    });
});
