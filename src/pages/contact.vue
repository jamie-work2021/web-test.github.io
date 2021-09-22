<template>
 
    <q-page>

            <q-parallax
            class="con-para" :height="400" :speed="0.5">
      <template v-slot:media>
       <img src="~assets/bg-try2.png" width="100%" style="margin-top: -50px!important;
      top: 0 !important;"> 
      </template>

     <div class="img-contain-service relative-position q-my-lg">
              
               <p class="absolute  q-pb-sm title-main-c" >聯絡我們</p>
               <p class="color-border-c absolute" ></p>
               <p class="title-eng-c absolute  " style="margin-left:30px"
               > contact us </p>
            </div>
    </q-parallax> 
           <div class="paper-container " >
            <!-- <img  src="~assets/paper2.jpg" style="width:100%;height:1000px ; opacity: .3;"> -->
             <div class=" text-body1   text-center" >
              <div class=" flex flex-center text-center q-mx-lg" style="font-size:20px;">
            <p class="title-style ">線上諮詢</p>
          </div>
              <div class="q-pa-md
              con-form" >


    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-ml-md form-con-wid "
      
    >
    <div class="flex-input1 flex" style="width:100%" >
      <q-input
        
        class="q-mr-xl "
        v-model="name"
        label="公司名稱 *"
        hint="請填入公司名稱"
        style="width:43% ;margin-left:0px;"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        
        
        v-model="name"
        label="聯絡姓名 *"
        hint="請填入聯絡姓名"
        style="width:43%"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    </div>
    <div class="flex-input2 flex" style="width:100%">
    <q-input
        
        class="q-mr-xl"
        v-model="name"
        label="聯絡電話 *"
        hint="phone-number"
         style="width:43% ;margin-left:0px;"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      

      <q-input   v-model="email"  type="email" label="郵件 *"  style="width:43%;" hint="請填寫郵件" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']">
       
      </q-input>
    </div>

   
     <q-select v-model="model" :options="options" label="預算" style="width:95%" />

     <div class="q-my-lg" style="margin-left:10px">
    <div class="q-gutter-sm">
        <p>服務需求</p>
      <q-checkbox v-model="selection" val="teal"  label="電商整合" color="indigo-10" />
      <q-checkbox v-model="selection" val="orange" label="網站建置"  color="indigo-10" />
      <q-checkbox v-model="selection" val="red" label="緊急救援" color="indigo-10" />
      <q-checkbox v-model="selection" val="cyan" label="系統規劃" color="indigo-10" />
      <q-checkbox v-model="selection" val="blue" label="其他服務" color="indigo-10" />
     
    </div>

   
  </div>

  <q-input
      v-model="text"
      outlined
      label="告訴我們您的需求"
      type="textarea"
    />


      <div>
        <q-btn label="Submit" type="submit" color="blue-grey-13"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
<div class="space-100"></div>
  </div>
            </div>
             
          </div>

           <q-banner class="transparent text-center ">
            <p class=" title-style-nob text-center q-pt-lg">聯絡資訊</p>
            <p class="q-my-xl text-center text-h6 " >
              如果有需要我們幫忙，歡迎跟我們聯絡，歡迎各式合作！！
            </p>
           
          <div class="container flex flex-nowrap flex-center q-my-xl " >
            <div class="w2 contact-img">
              <q-img  src="~assets/banner7.jpg"></q-img>
            </div>
            <div class="w1 company-box" >
              <p class="company-info" style="color:#015799" >公司資訊</p>
             
               <br>
               <div class="flex h-info">
              <q-icon class="q-pt-xs icon-con" name="link" style=" font-size: 1.8em; width:36%" /><p class="dest-con-word" >http://tapgo.cc/tw/</p>
              </div>
               <div class="flex h-info">
              <q-icon class="q-pt-xs icon-con" name="email" style=" font-size: 1.8em; width:36%" /><p class="dest-con-word" >mikewu@tapgo.cc</p>
              </div>
               <div class="flex h-info">
              <q-icon class="q-pt-xs icon-con" name="phone" style=" font-size: 1.8em; width:36%" /><p class="dest-con-word"  >+886-937-949-515</p>
              </div>
               <div class="flex h-info">
              <q-icon class="q-pt-xs icon-con-l" name="directions_car" style=" font-size: 1.8em; width:36%" /><p class="dest-con-word"  >台北市大安區辛亥路一段50號4樓</p>
              </div>
             
             
              
            </div>
            
          </div>


           
          </q-banner>
        
           
             
    </q-page>
 
</template>
<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'


export default {
data () {
    return {
      model: null,
      options: [
        '10000-50000', '50000-100000', '100000-150000', 
      ]
    }
  },


  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
        name,
        age,
        accept,
        selection: ref([ 'teal', 'red' ]),
        text: ref(''),
        email: ref(''),
        phone: ref(null),
    

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      },
     
    
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
       slide: 1,
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
 

}



</script>


