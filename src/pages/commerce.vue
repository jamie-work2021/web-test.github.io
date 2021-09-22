<template>
    <q-page>
      
        
        <div class="bg relative-position"> 
            <div class="imgCotain-comm" style="width:100%; height:400px;">
          <img style=" width: 100%; height:100%; object-fit:cover; opacity: .8;" src="~assets/bg-line-deep.png">
          </div>

          <div class="container-cbanner  ">
            <div class="w1-c q-ma-lg" >
              <p class="text-h5 text-bold text-deep" >電商開發與整合</p>
              <br>
              <p class="text-h6"  >為您解決跨系統之間操作的痛點，將系統資料、功能整合至您的網站，高度客製化技術服務、讓網站再次進化，提升工作效率，加速電子商務的發展。</p> 
            </div>
            <div class="w2-cbanner">
              <q-img class="cbanner-img" src="~assets/commerce-main2.jpg"></q-img>
            </div>
          </div>

        </div>
        <q-banner>
            <div class="container q-mx-auto" style="max-width:1200px">
             <p class="text-center title-style-nob-d q-pb-xl " style="margin:100px auto 10px auto" >服務項目</p>
            <div class="comm-main-service row q-mx-auto justify-center" >
                <q-card class="col-md-4 text-center q-ma-lg q-py-lg bg-grey-1 card-cc  card-c" flat >
                    
                    <i class="far fa-comments q-my-lg" style = "font-size: 85px;" ></i>
                   
                    <p class="text-h6">提供電商諮詢</p>
                    <p class="q-mx-auto" style="width:60%">身為合作夥伴，事前了解客戶所需要的目標，及評估功能需求，以幫助客戶實現更有發展的電商環境。</p>
                </q-card>
                <q-card class="col-md-4 text-center q-ma-lg q-py-lg bg-grey-1 card-c" flat >
                    <i class="fas fa-users q-my-lg" style = "font-size: 85px;"></i>
                     <p class="text-h6">會員系統整合</p>
                    <p class="q-mx-auto" style="width:60%">幫助客戶整合多品牌多載具會員資料，並導入會員數據中心，進行會員洞察/數據分析等功能，提供會員更方便ㄉ的互動行銷服務。
                    </p>
                </q-card>
            </div>
            <div class="comm-main-service row q-mx-auto justify-center" >
                <q-card class="col-md-4 text-center q-ma-lg q-py-lg bg-grey-1  card-c" flat >
                  
                 
                   <i class="far fa-list-alt q-my-lg" style = "font-size: 85px;" ></i>
                    <p class="text-h6">訂單系統優化</p>
                    <p class="q-mx-auto" style="width:60%">有效幫助賣家管理賣場，提升訂單管理效率、加速檢貨與寄件單處理時程。</p>
                    
                </q-card>
                <q-card class="col-md-4 text-center q-ma-lg q-py-lg bg-grey-1 card-c" flat >
                    <i class="far fa-chart-bar q-my-lg" style = "font-size: 85px;" ></i>
                     <p class="text-h6">電商數據中台</p>
                    <p class="q-mx-auto" style="width:60%">儀表板是重要業務和性能數據的核心，幫助您能夠獲取業務的快速視圖，並深入了解重要的數據，顯示有關電商所需的所有訊息。
                    </p>
                </q-card>
            </div>
            </div>
        </q-banner>

         <q-banner>
        <p class=" text-center q-pb-xl title-style-nob-com " style="margin:200px auto 10px auto" >告訴我們您電商整合的需求</p>
       <p class="text-center content-word ">請透過表單詢問案件<br>
我們會以Email回覆或是直接與您電話聯絡</p>
    </q-banner>    


        <div class=" q-mx-auto" style="max-width: 800px">


    <q-form style="border:1px solid #11325ec9; border-radius:20px"
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-md q-ma-lg "
    >
    
      <q-input
        class="q-mx-md"
        v-model="company_name"
        label="公司名稱 *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

    
      <q-input
        
        class="q-mx-md"
        v-model="email"
        type="email" 
       label="郵件 *"
        hint="請填寫郵件"
        
        
       
      />
      <q-input
        
        class="q-mx-md"
        v-model="name"
        label="聯絡姓名 *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

   
    <q-input
        
        class="q-mx-md"
        v-model="phone"
        label="聯絡電話 *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    <q-input
        
        class="q-mx-md"
        v-model="qa"
        label="問題描述 *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


   


  <q-input
      v-model="text"
      outlined
      label="期望結果"
      type="textarea"
    />
  <q-input
      v-model="text1"
      outlined
      label="目標時程"
      type="textarea"
    />

      

      <div class="text-center q-my-lg">
        <q-btn label="Submit" type="submit" color="blue-grey-13"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
        
       
        
            
       
        
       
      

     


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
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  },


  setup () {
    
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
        text1: ref(''),
        qa: ref(''),
        company_name: ref(''),
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
     
    
     
       slide: 1,
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
 

}



</script>
