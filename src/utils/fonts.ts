import localFont from "next/font/local";

const zalandoSansExpanded = localFont({
  src: [
    {
      path: "../../public/fonts/ZalandoSansExpanded-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-zalando",
  display: "swap",
});

export { zalandoSansExpanded };
