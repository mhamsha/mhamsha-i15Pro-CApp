import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
  lens1Img,
  lens2Img,
  lens3Img,
  lens4Img,
  lens5Img,
  lens6Img,
  lens7Img,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["Enter A17 Pro.", "Game‑changing chip.", "Groundbreaking performance."],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: ["iPhone 15 Pro Max has the", "longest optical zoom in", "iPhone ever. Far out."],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const imageCarouselSlides = [
  {
    id: 1,
    img: lens1Img,
    alt: "lens1",
    lensZoom : "0.5x",
    imgDescription: " Ultra Wide | Macro",
  },
  {
    id: 2,
    img: lens2Img,
    alt: "lens2",
    lensZoom:"0.5x",
    imgDescription: " Ultra Wide | 13mm",
  },
  {
    id: 3,
    img: lens3Img,
    alt: "lens3",
    lensZoom:"1x",
    imgDescription: " Main | 24 mm ",
  },
  {
    id: 4,
    img: lens4Img,
    alt: "lens4",
    lensZoom:"1x",
    imgDescription: " Main | 28 mm",
  },
  {
    id: 5,
    img: lens5Img,
    alt: "lens5",
    lensZoom:"2x",
    imgDescription: " Telephoto | 48 mm",
  },
  {
    id: 6,
    img: lens6Img,
    alt: "lens6",
    lensZoom:"New 5x",
    imgDescription: " Telephoto | 120 mm",
  },
  {
    id: 7,
    img: lens7Img,
    alt: "lens7",
    lensZoom:"3.5x",
    imgDescription: " Telephoto",
  },
];
export const footerLinks = ["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"];
