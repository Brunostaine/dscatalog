declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

// Código que resolve o problema de imports de svg e outros caso necessario

// Fonte de informação explicativa

// https://duncanleung.com/typescript-module-declearation-svg-img-assets/
