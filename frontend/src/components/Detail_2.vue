<template>
    <div id="App" class="body">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        </head>
        <main class="display">
            <div class="background"> 
                <div class="display1">          
                    <div class="left">
                        <div class="poster"> <img src="../assets/poster2.jpg" class="poster_0"></div>
                        <div class="reserve_button"><router-link to="/reserve">예매하기</router-link></div>
                    </div>                    
                    <div class="right">
                        <div class="detail">
                            <div class="info0">
                                <h2>
                                    가족 같은 회사로 모십니다.<br>
                                </h2>
                            </div>
                            <i @click="toggleOnOff" class="fas fa-chevron-down fold"></i>                           
                            <div class="info2" v-if="isStatusOff">
                                <p>베이비 주식회사의 레전드 보스 베이비에서 <br>인생 만렙 CEO가 된 `테드`.
                                베이비인 줄 알았던 조카 `티나`가 알고 보니 베이비 주식회사 소속 <br>임원으로 밝혀진다.<br> 
                                <br>뉴 보스 베이비 `티나`의 지시로 다시 베이비로 돌아간 `테드`와 형 `팀`에게 주어진 시간은 48시간!<br> 

                                세상을 구하기 위한 미션을 무사히 완수할 수 있을 것인가?<br>
                                </p>
                            </div>
                            <div class="fold_info" v-if="isStatusOn">
                                <p>
                                    <b>`가족 같은 회사로 모십니다` 패밀리 비즈니스 어드벤처<br>
                                    인생 만렙 보스 베이비 컴백부터 새로운 보스 베이비의 등장까지!</b><br>

                                    영화 '보스 베이비 2'는 `가족 같은 회사`를 표방하는 패밀리 비즈니스 어드벤처의 신세계를 보여줄 뿐만 아니라, 삼촌과 조카라는 관계를 통해 새로운 캐릭터 구도와 유쾌하면서도 다이내믹한 모험, 그리고 따뜻한 가족애를 보여줄 예정이다.<br>

                                    먼저 '보스 베이비'의 주인공이자 귀여움의 한도 초과 보스 베이비 `테드`는 인생 만렙 진짜 보스가 되지만 영원할 줄 알았던 그에게 뜻하지 않는 상황으로 다시 베이비로 돌아와야만 한다. 전편에서 귀여운 얼굴 뒤 숨겨진 반전 포스로 관객들을 사로 잡았던 `테드`가 컴백해 전 세계 영화 팬들의 뜨거운 관심을 받고 있다. 진짜 어른 CEO가 된 `테드`의 베이비 컴백이 다시 한번 귀여움 한도 초과의 모습으로 관객들의 마음을 사로잡을 예정.<br>

                                    CEO에서 중고 신입이 된 `테드`에게 새로운 파트너가 등장한다. 바로 형 `팀`의 딸이자 조카인 `티나`가 가족 같은 직장상사로 활약한다. '보스 베이비 2'는 `테드`의 조카 `티나`가 뉴 보스 베이비로 등장해 관객들에게 더욱 업그레이드된 매력과 재미를 보여줄 것으로 기대 된다. 특히 전편보다 업그레이드된 패밀리 비즈니스 어드벤처를 통해 `테드`와 `팀`, `티나`의 가족 케미스트리는 물론 더욱 유쾌하고 다이내믹해진 경험을 하게 될 것이다.<br>

                                    이처럼 `테드`와 `팀`, 그리고 `티나`의 `패밀리 비즈니스`를 통해 영화 '보스 베이비 2'는 세상을 위기에 빠트리려는 `암스트롱 박사`의 계략에 맞서 위험한 미션을 수행해 나간다. 재미와 매력은 물론 캐릭터까지 2배로 돌아온 '보스 베이비 2'는 어른이부터 패밀리까지 전 세대 취향 저격하는 즐거움을 선보이며 관객들을 사로잡을 예정이다.<br>
                                </p>
                            </div>
                        </div>
                        <div class="detail_button">
                            <div class="trailler">
                                <router-link to="/trailler_2">예고편/스틸컷</router-link>
                            </div>
                            <div class="audience">
                                <router-link to="/grade_2">평점/누적관객수</router-link>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>             
        </main>
        <div class="display-footer">
            <div class="background-footer">
                <p class="contact">CONTACT<br>
                충청북도 청주시 서원구 충대로1, 충북대학교 전자정보대학<br>
                대표번호 : 043-261-2480<br>
                TEL : 010-7647-0877 | 010-7935-2882<br>
                대표이사 : 남수연, 최서현<br>
                Copyright 2021 movie project (c) Allrights Reserved
                </p>
            </div>                
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{       
            isStatusOn: false,
            isStatusOff: true,            
    }},
    methods: {
        toggleOnOff: function() {
            this.isStatusOn = !this.isStatusOn;
            this.isStatusOff = !this.isStatusOff;
        }
    }
}
</script>

<style scoped>
* {
    color: #222;
}
a {
    text-decoration: none;
    color: white;
}

.background {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 75%;
    padding: 3% 4%;
    flex-direction: column; 
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}

.display {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    padding : 1% 12%;
    
}

.display1 {
    width: 100%;
    /* 가로길이기준, 플렉스박스의경우 세로는 내용물길이만큼 늘어남 */
    padding: 3% 4%;
    display: flex;  
}

.left{
    width: 50%;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-content: space-between; */
}

.poster{
    width: 100%; 
    height: auto;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}
.poster_0{
    width: 100%;
    height: 100%;
    object-fit:cover;
}

.reserve_button{
    width: 95%; 
    height: auto;
    background-color:rgb(201, 52, 52);
    padding:3%;
    margin: 10% 0px;
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}
.reserve_button:hover{
    background-color:rgb(255, 71, 71);
}


.right{
    width: 100%;
    padding: 0% 0% 0% 5%;
    margin: 0% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.detail{
    width: 90%;
    margin: 0% 0%;
    display: flex;
    flex-direction: column;
}
.info0{
    padding: 0% 0% 0% 2%;
    text-align:start;
}
.info0 h2{   
     font-family: 'AIR';
}

.fold{
    /* display: block; */
    color:rgb(201, 52, 52);
    text-align: center;
    padding: 0%;
}

.fold_info{
    text-align: center;
    padding: 1% 8% 1% 8%;
    
}
.fold_info p {
    font-family: 'esamanru-Medium L';
    
}

.info2{
    text-align: center;
    padding: 1% 15% 1% 15%;
    margin: 5% 0% 3% 0%;
    border: 3px dotted rgba(212, 212, 212, 0.815);
    color: #222;
}

.info2 p{
font-family: 'jammin L';
font-size: 25px;
}

.detail_button{
    width: 90%;
    margin: 3% 0%;
    display: flex;
}
.trailler{
    width: 40%; 
    height: auto;
    background-color:rgb(212, 212, 212);
    padding:3%;
    margin: 0% 3%;
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}
.trailler:hover{
    background-color:rgb(126, 126, 126);
}
.audience{
    width: 40%; 
    height: auto;
    background-color:rgb(212, 212, 212);
    padding:3%;
    margin: 0% 3%;
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}
.audience:hover{
    background-color:rgb(126, 126, 126);
}
</style>

