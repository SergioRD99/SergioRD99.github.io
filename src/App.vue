<script setup>
import Phone from './components/Phone.vue';
import { storeToRefs } from "pinia";
import { useGlobalStore } from './stores/GlobalStore.js';
import { ref } from 'vue';
const { Logo, Colors } = storeToRefs(useGlobalStore());
const finalTheme = ref("");
const PrintTheme = () => {
  finalTheme.value = JSON.stringify(Colors.value);
};
</script>

<template>
  <div class="parent">
    <div class="controls">
      <div>
        <label>Logo</label>
        <input type="text" v-model="Logo">
      </div>
      <div>
        <label>Color de fondo de secciones</label>
        <input type="color" v-model="Colors.SectionBackground">
      </div>
      <div>
        <label>Fuente principal</label>
        <input type="color" v-model="Colors.FontPrimary">
      </div>
      <!-- <div>
        <label>Fuente secundaria</label>
        <input type="color" v-model="Colors.FontSecondary">
      </div>
      <div>
        <label>Fuente informativa</label>
        <input type="color" v-model="Colors.FontInfo">
      </div> -->
      <div>
        <label>Color principal de fondo de boton</label>
        <input type="color" v-model="Colors.ButtonBackgroundPrimary">
      </div>
      <!-- <div>
        <label>Color secundario de fondo de boton</label>
        <input type="color" v-model="Colors.ButtonBackgroundSecondary">
      </div>
      <div>
        <label>Color informativo de fondo de boton</label>
        <input type="color" v-model="Colors.ButtonBackgroundInfo">
      </div> -->
      <div>
        <label>Color principal de texto de boton</label>
        <input type="color" v-model="Colors.ButtonFontPrimary">
      </div>
      <!-- <div>
        <label>Color secundario de texto de boton</label>
        <input type="color" v-model="Colors.ButtonFontSecondary">
      </div>
      <div>
        <label>Color informativo de texto de boton</label>
        <input type="color" v-model="Colors.ButtonFontInfo">
      </div> -->
      <div>
        <label>Color principal de fondo de select</label>
        <input type="color" v-model="Colors.ComboBackgroundPrimary">
      </div>
      <!-- <div>
        <label>Color secundario de fondo de select</label>
        <input type="color" v-model="Colors.ComboBackgroundSecondary">
      </div>
      <div>
        <label>Color informativo de fondo de select</label>
        <input type="color" v-model="Colors.ComboBackgroundInfo">
      </div> -->
      <div>
        <label>Color principal de texto de select</label>
        <input type="color" v-model="Colors.ComboFontPrimary">
      </div>
      <!-- <div>
        <label>Color secundario de texto de select</label>
        <input type="color" v-model="Colors.ComboFontSecondary">
      </div>
      <div>
        <label>Color informativo de texto de select</label>
        <input type="color" v-model="Colors.ComboFontInfo">
      </div> -->
      <div>
        <label>Color de acentuacion 1</label>
        <input type="color" v-model="Colors.AccentBackground1">
      </div>
      <div>
        <label>Color de acentuacion 2</label>
        <input type="color" v-model="Colors.AccentBackground2">
      </div>
      <div>
        <label>Color de titulos</label>
        <input type="color" v-model="Colors.TitleColor">
      </div>
      <div>
        <label>Color de subtitulos</label>
        <input type="color" v-model="Colors.SubtitleColor">
      </div>
      <div>
        <label>Color de descripciones</label>
        <input type="color" v-model="Colors.DescriptionColor">
      </div>
      <div>
        <button @click="PrintTheme">Obtener tema</button>
      </div>
      <div>
        <textarea style="width: 90%;" rows="10">{{ finalTheme }}</textarea>
      </div>
    </div>
    <div class="phone">
      <Phone />
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 1fr 1fr 450px;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 600px;
}

.controls {
  grid-area: 1 / 1 / 2 / 3;
}

.phone {
  grid-area: 1 / 3 / 2 / 4;
}</style>
