<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;500;700&family=Noto+Sans+TC:wght@100;300;400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <q-layout view="hHh Lpr fff" >
      <div class="contain" container  ></div>
      <q-header elevated class="bg-white">
        <q-toolbar>
          <q-btn class="lt-lg" flat @click="drawer = !drawer" round dense icon="menu" color="black"   />
          <q-toolbar-title class="flex">
            <q-img src="~assets/logo.png" style="width:100px;height:auto"></q-img>
        </q-toolbar-title>
            
             
                  <div class="gt-xs nav-word">
          <q-btn flat class="q-mr-md" to="/home" color="blue-grey-9"> 首頁</q-btn>
          <q-btn flat class="q-mr-md" to="/about" color="blue-grey-9" >關於tapgo </q-btn>
          <q-btn flat class="q-mr-md" to="/service" color="blue-grey-9" >服務項目</q-btn>
          <q-btn flat class="q-mr-md" to="/urgent" color="blue-grey-9">緊急救援</q-btn>
          <q-btn flat class="q-mr-md" to="/case" color="blue-grey-9">實際案例</q-btn>
          <q-btn flat class="q-mr-md" to="/commerce" color="blue-grey-9">電商整合</q-btn>
          <q-btn flat class="q-mr-md" to="/contact" color="blue-grey-9">聯絡我們</q-btn>
        
        
            </div>
        

        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        overlay
        bordered
        class="bg-grey-3 "
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple :to="`/${menuItem.to}`">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" class="lt-md" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
                
                
                
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      
   
    <q-page-container>
      <router-view />
    </q-page-container>

     <q-footer  bordered  class="text-blue-grey-9 bg-white  " >
       
        <q-toolbar class=" q-mx-auto footer-box  items-baseline"  >
          <div class="info1 q-ma-xl">
            <p class="text-h6 text-bold q-py-md q-px-md ">網站導覽</p>
            <p><q-btn flat class="q-mr-md" to="/home" color="blue-grey-9"> 首頁</q-btn></p>
            <p><q-btn flat class="q-mr-md" to="/about" color="blue-grey-9" >關於tapgo </q-btn></p>
            <p><q-btn flat class="q-mr-md" to="/service" color="blue-grey-9" >服務項目</q-btn></p>
            <p><q-btn flat class="q-mr-md" to="/urgent" color="blue-grey-9">緊急救援</q-btn></p>
            <p><q-btn flat class="q-mr-md" to="/case" color="blue-grey-9">實際案例</q-btn></p>
            <p><q-btn flat class="q-mr-md" to="/commerce" color="blue-grey-9">電商整合</q-btn></p>
            <p><q-btn flat class="q-mr-md" to="/contact" color="blue-grey-9">聯絡我們</q-btn></p>
          </div>
          <div class="info2 q-mx-lg">
            <p class="text-h6 text-bold q-py-md">公司資訊</p>
            <p class="q-py-sm"> http://tapgo.cc/tw/</p>
            <p class="q-py-sm"> +886-937-949-515</p>
            <p class="q-py-sm"> 台北市大安區辛亥路一段50號4樓</p>
            <p class="q-py-sm"> mikewu@tapgo.cc</p>
          </div>
          <div class="info3 q-mx-lg">
            <p class="text-h6 text-bold q-py-md">與我們聯絡</p>

            <q-input class="q-py-sm" style="width:300px"  outlined bottom-slots v-model="text" label="email" counter maxlength="30" :dense="dense">
        <template v-slot:before>
          
        </template>

        

        <template v-slot:hint>
          留下Email，我們將主動與您聯繫
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
          </div>

        
        </q-toolbar>
      </q-footer>
    
    
   
  </q-layout>

</template>

<script>

import { ref } from 'vue'


const menuList = [
  {
    icon: 'inbox',
    label: '首頁',
    separator: true,
    to:"home",
  },
  {
    icon: 'send',
    label: '關於我們',
    separator: false,
    to:"about"
  },
  {
    icon: 'delete',
    label: '緊急救援',
    separator: false,
    to:"urgent"
  },
  {
    icon: 'error',
    label: '服務項目',
    separator: true,
    to:"service"
  },
  {
    icon: 'settings',
    label: '實際案例',
    separator: false,
    to:"case"
  },
  {
    icon: 'feedback',
    label: '電商整合',
    separator: false,
    to:"commerce"
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: '聯絡我們',
    separator: false,
    to:"contact"
   
  }
]

export default {
  setup () {
    return {
      drawer: ref(false),
      menuList,
      text: ref(''),
      
      dense: ref(false)
    }
  }
}
</script>