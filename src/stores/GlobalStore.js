import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    Logo: "https://mxatmspi.blob.core.windows.net/customerlogos/spi_logo_menu.png",
    Colors: {
      SectionBackground: "#263461",
      FontPrimary: "#273557",
      FontSecondary: "#000000",
      FontInfo:"#000000",
      ButtonBackgroundPrimary: "#c9d401",
      // ButtonBackgroundSecondary:"#000000",
      // ButtonBackgroundInfo:"#000000",
      ButtonFontPrimary: "#000000",
      // ButtonFontSecondary:"#000000",
      // ButtonFontInfo:"#000000",
      ComboBackgroundPrimary: "#c9d401",
      ComboBackgroundSecondary:"#000000",
      ComboBackgroundInfo:"#000000",
      // ComboFontPrimary: "#000000",
      // ComboFontSecondary:"#000000",
      ComboFontInfo:"#000000",
      AccentBackground1:"#f5f5f5",
      AccentBackground2:"#eeeeee",
      TitleColor:"#131313",
      SubtitleColor:"#131313",
      DescriptionColor:"#9c9c9c"
    },
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
