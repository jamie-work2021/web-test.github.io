<template>
    <q-layout>
        <q-page>
            <div class="case-1-content flex">
                <div class="case-1-img shadow-6 q-ma-lg" style="width:1000px;height:auto;border:1px dashed gray ">
                    <q-img src="~assets/muji.png" style="object-fit:contain;width:100%;height:100%"></q-img>
                </div>
                <div class="case-1-word q-ma-xl"  style="width:25%; ">
                    <p>網站名稱-無印良品</p>
                    <p>網站概念</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <q-btn outline to="/case-1" color="black" label="前往網頁" />
                    
                    <p class="q-mt-xl">建置項目</p>
                    <div class="item-container flex">
                    <q-btn class="q-ma-sm " size="sm" outline rounded color="light-gray-10">官網設計</q-btn>
                    <q-btn class="q-ma-sm " size="sm" outline rounded color="light-gray-10">ＲＷＤ響應式網站</q-btn>
                    <q-btn class="q-ma-sm " size="sm" outline rounded color="light-gray-10">購物車系統</q-btn>
                    </div>

                    
                    
                    <p class="q-my-xl">網站功能</p>
                    <p><q-badge color="light-blue-8" size="xs" class="q-mr-sm" />最新消息</p>
                    <p><q-badge color="light-blue-8" size="xs" class="q-mr-sm" />門市活動</p>
                    <p><q-badge color="light-blue-8" size="xs" class="q-mr-sm" />大眾採購</p>
                    
                </div>
            </div>
        </q-page>
    </q-layout>
</template>