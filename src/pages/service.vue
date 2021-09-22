<template>
 
    <q-layout>
    <q-page>
    

    <q-parallax class="s-para" :height="400" :speed="0.5">
      <template class="s-para-img" v-slot:media>
       <img src="~assets/bg-try2.png" width="100%" style="margin-top: -50px!important;
      top: 0 !important;" > 
      </template>

      <div class="img-contain-service relative-position q-my-lg">
              
               <p class="absolute  q-pb-sm title-main" >我們的服務</p>
               <p class="color-border absolute" ></p>
               <p class="title-eng absolute  "
               > ours service</p>
            </div>
    </q-parallax> 
     
           
           <div class="paper-container-ser " >
            <!-- <img class="paper-bg"  src="~assets/paper2.jpg" style="height:1000px ;"> -->
             <div class="q-my-md  text-center q-mx-auto" >
               <div class=" flex flex-center text-center q-mx-lg" style="font-size:20px;">
            <p class="title-style ">我們提供什麼？</p>
          </div>
              
            </div>
            <div class="card-container q-my-lg" >
            <div class="contain-about-member flex  no-wrap justify-center"  >
              <q-card class="my-card my-card-ser transparent  text-center " style="max-width: 300px;" flat >
                <q-card-section class="block service-img1 ">
                  <img src="~assets/icons1.png">
                <p class="q-my-md text-bold text-b2 service-t 
                ">行動 APP 設計/開發</p>
                <p class="text-blue-grey-13 text-bold">• iOS/Android App 設計開發<br>
                    • UI/UX 設計<br> 
                    • SDK開發</p>
                </q-card-section>
              </q-card>
              <q-card class="my-card my-card-ser  transparent  text-center" style="max-width: 300px" flat >
                <q-card-section class="block  ">
                  <img src="~assets/icons2.png" >
                <p class="q-my-md text-bold text-b2 service-t">系統程式開發設計</p>
                <p class="text-blue-grey-13 text-bold">• 即時通訊平台開發<br>
                    • 伺服器軟體開發<br>                    
                    • 工作流程系統開發</p>
                </q-card-section>
              </q-card>
              <q-card class="my-card my-card-ser  transparent  text-center" style="max-width: 300px" flat >
                <q-card-section class="block  ">
                  <img src="~assets/icons3.png">
                <p class="q-my-md service-t text-bold text-b2 service-t">系統規劃</p>
                <p class="text-blue-grey-13 text-bold">• 系統架構<br>
                    • 系統服務<br> 
                    • Middleware</p>
                </q-card-section>
              </q-card>
          </div>
            <div class="contain-about-member flex flex-center no-wrap justify-cente" >
              <q-card class="my-card my-card-ser flat transparent text-center" style="max-width: 300px" flat>
                <q-card-section class="block flex-center  ">
                  <img src="~assets/icons4.png">
                <p class="q-my-md text-bold text-b2 service-t">後台整合</p>
                <p class="text-blue-grey-13 text-bold">• App 後台 API <br>
                  • 伺服器整合<br> 
                  • 資料庫整合</p>
                </q-card-section>
              </q-card>
              <q-card class="my-card my-card-ser flat transparent text-center" style="max-width: 300px" flat>
                <q-card-section class="block flex-center  ">
                  <img src="~assets/icons5.png" style="margin-bottom: 14px;">
                <p class="q-my-md text-bold text-b2 service-t">技術顧問</p>
                <p class="text-blue-grey-13 text-bold ">• 架構設計 <br>
                • Library Porting <br>
                • 效能提升  教育訓練<br>
                • 演算法設計
                </p>
                </q-card-section>
              </q-card>
              <q-card class="my-card my-card-ser flat transparent text-center" style="max-width: 300px" flat>
                <q-card-section class="block flex-center ">
                  <img src="~assets/icons6.png">
                <p class="q-my-md text-bold text-b2 service-t">緊急救援</p>
                <p class="text-blue-grey-13 text-bold"> 
                    • 緊急除錯 <br> 
                    • 維持系統運作 <br>
                    • 改善使用經驗與效能<br>
                    </p>
                </q-card-section>
              </q-card>
            </div>

            
          
    
          </div> 
          </div>

           <!-- <q-banner class="transparent text-center">
            <p class=" text-h3 q-my-xl  text-bold text-center text-b2">TAPGO PROMISE</p>
            <p class="q-my-xl text-center" >
              除了現有技術以外，Tapgo也跨足IoT，演算法、機器學習等應用領域，因應未來趨勢所需。 我們期許自己不畏挑戰，做客戶最好的後盾。
            </p>
         
            <div class="flip-card-container flex q-my-xl q-mx-lg justify-center">
            <div class="card-container3 q-mx-xl">
              <div class="card3">
                <div class="side3 q-pt-md"><img src="~assets/icon1.png" alt="Jimmy Eat World">
                <p>緊急救援</p></div>
                <div class="side3 back3 q-pt-md">即使是很棘手的緊急案件，我們都會盡力支援，讓您在最短時間內得到適合的解決方案。</div>
              </div>
            </div>
           
             <div class="card-container3 q-mx-xl">
              <div class="card3">
                <div class="side3 q-pt-md"><img src="~assets/icon2.png" alt="Jimmy Eat World">
                <p>溝通順利</p></div>
                 <div class="side3 back3 q-pt-md">我們非常重視與客戶有良好的溝通，讓您感受如家人朋友般的友善親切，在歡樂的氛圍完成專案。</div>
              </div>
            </div>
             <div class="card-container3 q-mx-xl">
              <div class="card3">
                <div class="side3 q-pt-md"><img src="~assets/icon3.png" style="width:60px" alt="Jimmy Eat World">
                <p>技術專業</p>
                </div>
                <div class="side3 back3 q-pt-md">技術專業是我們的核心，我們總是能夠快速掌握客戶需求，轉化為可執行的行動計劃。</div>
              </div>
            </div>
            </div>
            <div class="flip-card-container flex q-my-xl q-mx-lg justify-center">
             <div class="card-container3 q-mx-xl">
              <div class="card3">
                <div class="side3 q-pt-lg"><img src="~assets/icon4.png" alt="Jimmy Eat World">
                <p>品質穩定</p></div>
                 <div class="side3 back3 q-pt-md">我們重視品質，對每一個產出都會做到一定的驗證把關，是您可信賴的長期夥伴。</div>
              </div>
            </div>
             <div class="card-container3 q-mx-xl">
              <div class="card3">
                <div class="side3 q-pt-lg"><img src="~assets/icon5.png"  alt="Jimmy Eat World">
                <p>配合度高</p></div>
                 <div class="side3 back3 q-pt-md">沒有大公司的繁瑣流程，我們講求彈性及效率，不論案子大小，我們都會全力以赴。</div>
              </div>
            </div>
             <div class="card-container3 q-mx-xl">
              <div class="card3">
                <div class="side3 q-pt-lg"><img src="~assets/icon6.png" alt="Jimmy Eat World">
                <p>價格合理</p></div>
                 <div class="side3 back3 q-pt-md">價格是非常重要的因素，在有限的預算中，我們仍貼心為您尋求最佳的解決方案。</div>
              </div>
            </div>
            </div>
            </q-banner> -->

           
          <!-- </q-banner> --> -->

          <q-banner>

<div class="page-content">
    <div class="card">
      <div class="content">
        <h2 class="title">緊急救援</h2>
        <button class="btn"><img src="~assets/icon1.png"></button>
        <p class="copy">即使是很棘手的緊急案件，我們都會盡力支援，讓您在最短時間內得到適合的解決方案。</p>
        
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">溝通順利</h2>
        <button class="btn"><img src="~assets/icon2.png"></button>
        <p class="copy">我們重視與客戶有良好的溝通，讓您感受如家人朋友般的友善親切，在歡樂的氛圍完成專案。</p>
        
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">技術專業</h2>
        <button class="btn"><img src="~assets/icon3.png"></button>
        <p class="copy">技術專業是我們的核心，我們總是能夠快速掌握客戶需求，轉化為可執行的行動計劃。</p>
        
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">品質穩定</h2>
        <button class="btn"><img src="~assets/icon4.png"></button>
        <p class="copy">我們重視品質，對每一個產出都會做到一定的驗證把關，是您可信賴的長期夥伴。</p>
        
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">配合度高</h2>
        <button class="btn"><img src="~assets/icon5.png"></button>
        <p class="copy">有大公司的繁瑣流程，我們講求彈性及效率，不論案子大小，我們都會全力以赴。</p>
        
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">價格合理</h2>
        <button class="btn"><img src="~assets/icon6.png"></button>
        <p class="copy">價格是非常重要的因素，在有限的預算中，我們仍貼心為您尋求最佳的解決方案。</p>
        
      </div>
    </div>
  </div>






          </q-banner>
        
           
         
  

  

     
    </q-page>

   
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    

    return {
     
       slide: 1,
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
 

}



</script>


