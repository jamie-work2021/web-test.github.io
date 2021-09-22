<template>

    <q-layout>
    <q-page>         
      <q-parallax :height="700" :speed="0.5">
      <template v-slot:media>
        <img src="~assets/bg-line.jpg" style="opacity:.8">
      </template>

      <div class=" about-bannerbox container " >
                    <div class="w1 q-mx-xl">
                      <p class="about-title text-bold text-deep"  >關於Tapgo</p>
                      <br>
                      <p class="text-h6 text-main"  >2012年成立於台北，Tapgo團隊由專業的軟體開發、視覺設計人員所組成，擁有豐富的技術經驗，提供行動App開發、網站設計、後台規劃整合...等相關軟體服務。</p> 
                    </div>
                    <div class="w2">
                      <q-img class="about-banner-img"    src="~assets/about-1.jpg"></q-img>
                    </div>
                  </div>
    </q-parallax> 
   

       <div class="text-center q-mx-auto q-my-xl text-subtitle1 about-contentbox" >
          <p class="about-subtitle q-mb-lg text-b2" >Tapgo理念</p>
         <span class="content-word">秉持Co-design的原則，我們將保持著微調彈性，幫助產品更為準確與效率的完成。將「限制」當作遊戲，把伴隨的問題視為挑戰，克服挑戰讓創意落實於「限制」，成為產品亮點。</span><br>
         <br><br>
         <p class="about-subtitle q-mb-lg">Tapgo願景</p>
         <span class="content-word">成為最貼近客戶需求的資料整合，系統開發的最佳夥伴，並實現對客戶的每一個承諾。</span><br>
       </div>
        <div class="img-container-about-2 q-mx-auto" >
       <q-img class="text-center contain" src="~assets/about-2.jpg" ></q-img>
       </div>

<q-parallax :height="700" :speed="0.7" class="q-my-xl">
      <template v-slot:media>
        <img src="~assets/room-80.png" >
      </template>
      <p class="title-style text-center">團隊能力</p>
   <div style="background-color:transparent;"  >
     
      <div class=" about-parallax  q-my-lg"     
>
                  <q-card class="my-card-a" flat style="background-color:#ffffffad">
      <img src="~assets/ability1.jpg" >

      <q-card-section class="card-a-word">
        <div class="card-a-title text-center">專業技術</div>
        <div class="card-a-content ">以堅強的實力，迅速完成客戶的需求</div>
      </q-card-section>

    </q-card>
       <q-card class="my-card-a" flat style="background-color:#ffffffad">
      <img src="~assets/ability4.jpg" >

      <q-card-section class="card-a-word">
       <div class="card-a-title text-center">良好溝通</div>
        <div class="card-a-content q-my-lg"> 成為客戶最佳的後盾，溝通有效，
        並深入瞭解客戶開發理念</div>
      </q-card-section>

    </q-card>
       <q-card class="my-card-a" flat style="background-color:#ffffffad">
      <img src="~assets/ability3.jpg" >

      <q-card-section class="card-a-word">
       <div class="card-a-title text-center">創新能力</div>
        <div class="card-a-content q-my-lg"> 硬實力結合軟實力，不僅完美還要創新
        </div>
      </q-card-section>
    </q-card>
           
           
            </div>
      
     
        

              

           
           
            
      </div>
      
    </q-parallax> 
     

     

      <q-banner>
        <div class=" flex flex-center text-body1 q-my-md text-center">
                <p class="title-style">我們的據點</p>
        </div>
        <p class="text-center q-my-xl content-word">我們的員工在此為您服務，並始終樂於為您提供建議。</p>
        <iframe class="q-mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.407364486562!2d121.526875515383!3d25.020245944995775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98e596b4a89%3A0xeeee920255b63d69!2z5Y-w6Zu75aSn5qiT56uZ!5e0!3m2!1szh-TW!2stw!4v1629254577994!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        
        <div class="btn-line text-center q-my-xl">
          <q-btn class="q-mx-auto text-center" outline rounded color="$main" label="聯絡我們" />
        </div>
      </q-banner>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    

    return {


   
      
       slide: 1,
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
 

}



</script>
