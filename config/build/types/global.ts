declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.jpg' {
    const jpgPath: string;
    export default jpgPath;
}
declare module '*.jpeg' {
    const jpegPath: string;
    export default jpegPath;
}

declare module '*.png' {
    const pngPath: string;
    export default pngPath;
}