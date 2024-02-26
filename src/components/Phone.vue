<template>
    <div class="container">
        <div class="parent">
            <div class="topbar">
                <FontAwesomeIcon :icon="['fas', 'bars']" class="icon alt" :style="{ 'color': Colors.FontPrimary }" />
                <img :src="Logo">
                <FontAwesomeIcon :icon="['fas', 'cart-shopping']" class="icon alt"
                    :style="{ 'color': Colors.FontPrimary }" />
            </div>
            <div class="searchbar" :style="{ 'background-color': Colors.SectionBackground }">
                <div>
                    <label class="cmbRefaccion" for=""
                        :style="{ 'color': Colors.ComboFontPrimary, 'background': Colors.ComboBackgroundPrimary }">Refaccion</label>
                    <input type="text">
                    <label class="searchOptions" style="background: white;">
                        <FontAwesomeIcon :icon="['fas', 'microphone']" :style="{ 'color': Colors.FontPrimary }">
                        </FontAwesomeIcon>
                        <span class="separator">|</span>
                        <FontAwesomeIcon :icon="['fas', 'camera']" :style="{ 'color': Colors.FontPrimary }">
                        </FontAwesomeIcon>
                    </label>
                </div>
            </div>
            <div class="filters" :style="{ 'background-color': Colors.AccentBackground1 }">
                <div :style="{ 'color': Colors.ButtonBackgroundPrimary, display: 'flex', width: '100%' }">
                    <div>
                        <FontAwesomeIcon :icon="['fas', 'sliders']" class="icon alt" />
                        <label style="margin-left: 5px;">Filtrar</label>
                    </div>
                    <span>|</span>
                    <div :style="{ 'color': Colors.FontPrimary }">
                        <FontAwesomeIcon :icon="['fas', 'sort']" class="icon alt" />
                        <label style="margin-left: 5px;">Ordenar</label>
                    </div>
                </div>
            </div>

            <div class="titlecontent" :style="{ 'background-color': Colors.AccentBackground2 }">
                <label for="" :style="{ color: Colors.TitleColor }">Busqueda exacta </label>
            </div>
            <div class="content">
                <div style="text-align: center; width: 100%;display: flex;flex-direction: column;">
                    <label
                        :style="{ textAlign: 'left', paddingLeft: '15px', paddingTop: '15px', color: Colors.TitleColor }">BUJIA
                        DE ENCENDIDO NGK</label>
                    <!-- <img style="margin: auto;width: 20%;" src="https://autorefax.blob.core.windows.net/autorefax/5/0/BKR5EGP-la.jpg" /> -->
                    <div style="text-align: left;padding-left: 15px; margin-top: 1rem;">
                        <span :style="{ color: Colors.FontPrimary, fontWeight: 600, fontSize: '20px' }">$21.53</span> <span
                            :style="{ color: Colors.ButtonBackgroundPrimary, fontSize: '16px', paddingLeft: '10px', fontWeight: 600 }">0
                            unidades</span>
                    </div>
                    <div style="text-align: left;padding-left: 15px; margin-top: 1rem;">
                        <span :style="{ color: Colors.TitleColor, fontWeight: 600, fontSize: '16px' }">Atributos</span>
                    </div>
                    <div style="text-align: left;padding-left: 15px; margin-top: 1rem;">
                        <span
                            :style="{ color: Colors.TitleColor, fontWeight: 600, fontSize: '16px' }">Calibracion:</span><span
                            :style="{ color: Colors.DescriptionColor, fontWeight: 600 }">0.044 PULGADA (1.1MILIMETROS)</span>
                    </div>
                    <div style="text-align: left;padding-left: 15px; margin-top: 5px;">
                        <span :style="{ color: Colors.TitleColor, fontWeight: 600, fontSize: '16px' }">SKU:</span><span
                            :style="{ color: Colors.DescriptionColor, fontWeight: 600 }">BP4FS</span>
                    </div>
                    <div style="text-align: left;padding-left: 15px; margin-top: 5px;">
                        <span :style="{ color: Colors.TitleColor, fontWeight: 600, fontSize: '16px' }">ESTADO:</span><span
                            :style="{ color: Colors.DescriptionColor, fontWeight: 600 }">ACTIVO</span>
                    </div>

                </div>
            </div>
            <div class="menu">
                <div :style="{ color: Colors.FontPrimary }">
                    <label>
                        <FontAwesomeIcon :icon="['fas', 'house']" class="icon alt" /> <br /> <span
                            style="font-size: 12px;">Inicio</span>
                    </label>
                    <label>
                        <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" class="icon alt" /> <br /> <span
                            style="font-size: 12px;">Busqueda</span>
                    </label>
                    <label>
                        <FontAwesomeIcon :icon="['fas', 'heart']" class="icon alt" /> <br /> <span
                            style="font-size: 12px;">Descuentos</span>
                    </label>
                    <label>
                        <FontAwesomeIcon :icon="['fas', 'user']" class="icon alt" /> <br /> <span
                            style="font-size: 12px;">Perfil</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FontAwesomeIcon } from '../utils/AwesomeIcons';
import { storeToRefs } from "pinia";
import { useGlobalStore } from '../stores/GlobalStore.js';
const { Logo, Colors } = storeToRefs(useGlobalStore());
const theme = {
    Logo: Logo.value,
    Colors: Colors.value
};

console.log(JSON.stringify(theme.Colors));
</script>
<style scoped>
.topbar>.fa-bars {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}

.topbar>img {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    max-width: 50%;
    margin: auto;
}

.topbar>.fa-cart-shopping {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
}

.container {
    width: 100%;
    height: 100%;
}

.parent {
    border: 1px solid black;
    border-radius: 5px;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 100px 50px 50px 250px 50px;
    grid-template-areas:
        "header"
        "search"
        "filter"
        "title"
        "content"
        "menu"
    ;
}

.parent>div {
    height: 100%;
    width: 100%;
}

.topbar {
    grid-area: header;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
}

.searchbar {
    grid-area: search;
    text-align: center;
}


.cmbRefaccion {
    padding: 1rem;
    border-radius: 10px 0px 0px 10px;
    border-right: 0px;
    padding-top: 13px;
}

.searchbar>div {
    padding: 25px;
}

.searchbar>div>input {
    padding: 1rem;
    border: 0;
}

.searchOptions {
    padding: 1rem;
    padding-top: 13px;
    border-radius: 0 10px 10px 0;
    border-left: 0;
}

.separator {
    margin-right: 5px;
    margin-left: 5px;
}

.filters {
    grid-area: filter;
}

.filters>div {
    display: inline-flex;
    width: 100%;
    justify-content: space-around;
    padding-top: 15px;
}

.titlecontent {
    grid-area: title;
    background-color: rgb(238, 238, 238);
    font-weight: 600;
}

.titlecontent>label {
    padding: 15px;
    line-height: 45px;
}

.content {
    grid-area: content;
}

.menu {
    grid-area: menu;
    padding-top: 10px;
    border-top: 2px solid #80808021;
}

.menu>div {
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
    text-align: center;
}</style>