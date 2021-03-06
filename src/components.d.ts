/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { JMHData, } from "@app/types/types";
export namespace Components {
    interface FortysevenRobeen {
        "dataUrl": string;
    }
    interface RobeenChart {
        "metrics": JMHData;
    }
    interface RobeenTooltip {
        "hide": () => Promise<void>;
        "setTooltip": (tooltipElement: any) => Promise<void>;
        "show": (index: number, data: any, positions: number[]) => Promise<void>;
    }
}
declare global {
    interface HTMLFortysevenRobeenElement extends Components.FortysevenRobeen, HTMLStencilElement {
    }
    var HTMLFortysevenRobeenElement: {
        prototype: HTMLFortysevenRobeenElement;
        new (): HTMLFortysevenRobeenElement;
    };
    interface HTMLRobeenChartElement extends Components.RobeenChart, HTMLStencilElement {
    }
    var HTMLRobeenChartElement: {
        prototype: HTMLRobeenChartElement;
        new (): HTMLRobeenChartElement;
    };
    interface HTMLRobeenTooltipElement extends Components.RobeenTooltip, HTMLStencilElement {
    }
    var HTMLRobeenTooltipElement: {
        prototype: HTMLRobeenTooltipElement;
        new (): HTMLRobeenTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "fortyseven-robeen": HTMLFortysevenRobeenElement;
        "robeen-chart": HTMLRobeenChartElement;
        "robeen-tooltip": HTMLRobeenTooltipElement;
    }
}
declare namespace LocalJSX {
    interface FortysevenRobeen {
        "dataUrl": string;
    }
    interface RobeenChart {
        "metrics": JMHData;
    }
    interface RobeenTooltip {
    }
    interface IntrinsicElements {
        "fortyseven-robeen": FortysevenRobeen;
        "robeen-chart": RobeenChart;
        "robeen-tooltip": RobeenTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fortyseven-robeen": LocalJSX.FortysevenRobeen & JSXBase.HTMLAttributes<HTMLFortysevenRobeenElement>;
            "robeen-chart": LocalJSX.RobeenChart & JSXBase.HTMLAttributes<HTMLRobeenChartElement>;
            "robeen-tooltip": LocalJSX.RobeenTooltip & JSXBase.HTMLAttributes<HTMLRobeenTooltipElement>;
        }
    }
}
