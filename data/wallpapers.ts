import p1v1 from "../public/preview/v1/p1.png";
import p2v1 from "../public/preview/v1/p2.png";
import p3v1 from "../public/preview/v1/p3.png";
import p4v1 from "../public/preview/v1/p4.png";
import p5v1 from "../public/preview/v1/p5.png";
import p6v1 from "../public/preview/v1/p6.png";
import p1v2 from "../public/preview/v2/p1.png";
import p2v2 from "../public/preview/v2/p2.png";
import p3v2 from "../public/preview/v2/p3.png";
import p4v2 from "../public/preview/v2/p4.png";
import p5v2 from "../public/preview/v2/p5.png";
import p6v2 from "../public/preview/v2/p6.png";
import {StaticImageData} from "next/image";

const WALLPAPERS: { [index: string]: { [index: number]: { src: StaticImageData, alt: string } } } = {
        "999:1-2":
            {
                1: {
                    src: p1v1,
                    alt: "w1-v1",
                }
                , 2: {
                    src: p2v1,
                    alt: "w2-v1",
                }
                , 3: {
                    src: p3v1,
                    alt: "w3-v1",
                }
                , 4: {
                    src: p4v1,
                    alt: "w4-v1",
                }
                , 5: {
                    src: p5v1,
                    alt: "w5-v1",
                }
                ,
                6: {
                    src: p6v1,
                    alt: "w6-v1",
                }
                ,
            }
        ,
        "999:40":
            {
                1: {
                    src: p1v2,
                    alt: "w1-v2",
                }
                , 2: {
                    src: p2v2,
                    alt: "w2-v2",
                }
                , 3: {
                    src: p3v2,
                    alt: "w3-v2",
                }
                , 4: {
                    src: p4v2,
                    alt: "w4-v2",
                }
                , 5: {
                    src: p5v2,
                    alt: "w5-v2",
                }
                ,
                6: {
                    src: p6v2,
                    alt: "w6-v2",
                }
                ,
            }
        ,
    }
;

export default WALLPAPERS;
