<template>
    <div id="App" class="body">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        </head>
        <main class="display">
            <div class="background"> 
                <div class="display1">          
                    <div class="left">
                        <div class="poster"> <img src="../assets/poster1.jpg" class="poster_0"></div>
                        <div class="reserve_button"><router-link to="/reserve">예매하기</router-link></div>
                    </div>                    
                    <div class="right">
                        <div class="detail">
                            <div class="info0">
                                <h2>
                                    내전으로 고립된 낯선 도시, 모가디슈<br>
                                    지금부터 우리의 목표는 오로지 생존이다!<br>
                                </h2>
                            </div>
                            <i @click="toggleOnOff" class="fas fa-chevron-down fold"></i>                           
                            <div class="info2" v-if="isStatusOff">
                                <p>
                                    대한민국이 UN가입을 위해 동분서주하던 시기<br> 
                                    1991년 소말리아의 수도 모가디슈에서는<br>
                                     일촉즉발의 내전이 일어난다.<br> <br>
                                    통신마저 끊긴 그 곳에 고립된 대한민국 대사관의 직원과 가족들은  
                                    총알과 포탄이 빗발치는 가운데, <br>살아남기 위해 하루하루를 버텨낸다.<br><br>  
                                    그러던 어느 날 밤, <br>북한 대사관의 일행들이 도움을 요청하며 <br>문을 두드리는데…<br><br><br>
                                    <b>목표는 하나, 모가디슈에서 탈출해야 한다!</b>
                                </p>
                            </div>
                            <div class="fold_info" v-if="isStatusOn">
                                <p>
                                    1991년 소말리아 내전<br>
                                    고립된 사람들의 생사를 건 탈출<br>
                                    2021년 모두가 경험하면 좋을 영화 예고!<br><br>

                                    '모가디슈'는 1991년 소말리아의 수도 모가디슈에서 내전으로 인해 고립된 사람들의 생사를 건 탈출을 그린 영화다.<br><br>
                                    
                                    영화의 시대 배경이 되는 1991년은 대한민국이 아직 UN 회원국에 가입하지 못했던 시기였다. 86년 아시안게임과 88년 서울올림픽을 거치며 세계화를 부르짖던 대한민국은 국제 사회에 인정받기 위해 UN 가입을 시도한다. UN 회원국의 투표로 가입여부가 결정되기 때문에 소말리아의 한 표가 어느 나라를 향할지가 매우 중요했던 상황. 대한민국과 북한은 각자 지지를 호소하기 위해 외교 총력전을 펼친다. 당시 북한은 아프리카 국가들과는 우리나라보다 20년 앞서 대외 외교를 시작했기에, 외교적 우세에 있을 수밖에 없었다. 소말리아에는 훗날 걷잡을 수 없는 내전이 될 시민 시위가 싹트기 시작한다.
                                    <br>
                                    <br>
                                    '모가디슈'의 초반은 대한민국 대사관 한신성 대사(김윤석)와 안기부 출신의 정보 요원 강대진 참사관(조인성)을 필두로 대사 부인 김명희(김소진), 서기관 공수철(정만식), 사무원 조수진(김재화), 막내 사무원 박지은(박경혜)의 맨 땅에 헤딩하듯 대한민국을 홍보하는 과정을 그린다. 이들이 하루빨리 대한민국으로 돌아갈 날만을 기다리며 머나 먼 타국 생활을 이어오고 있던 그때, 바레 독재 정권에 대한 불만으로 시민 시위는 들불처럼 내전으로 번지기 시작한다. 전쟁을 방불케 하는 상황이 이어지자 대한민국 대사관은 전기, 식량 등 기본적인 자원부터 이웃나라와의 연락마저 끊긴 상태에 놓인다. 그러던 어느 날 밤, 북한의 림용수 대사(허준호)와 태준기 참사관(구교환) 및 북한 대사관 직원들이 구조를 요청하면서 긴장감이 감도는 동행이 시작된다. 이들은 국가와 이념을 뛰어넘어 오직 고향으로 돌아가기 위한 자구책을 마련하기 시작한다. '모가디슈'는 이 거짓말 같은 상황에서 오직 생존을 위해 혼신의 힘을 다했던 사람들의 이야기를 담아냈다.
                                    <br>
                                    <br>
                                    한편 실화라고는 믿기지 않는 스토리를 영화화 할 때 제작진들은 최우선적으로 리얼리티를 살리기 위해 노력했다. 문화적으로는 너무나 거리가 먼 아프리카이고 더욱이나 소말리아는 현재 여행금지 국가이기 때문에 한정된 접근성으로 인해 사전 자료 조사가 더욱 중요했다. 당시 소말리아 국영TV 사장의 서적 자료, 종군 기자의 사진, 한국 교환 학생으로 와 있는 소말리아 대학생, 군사전문가, 아프리카 관련 학과 교수 등 다양한 계층의 자문은 '모가디슈'의 프리 프로덕션에 큰 도움이 됐다. 이러한 사전 작업들은 실화를 바탕으로 한 영화이기에 큰 도움이 됐다. 이러한 작업을 통해 '모가디슈'는 관객들로 하여금 마치 내전의 한 가운데에 있는 것 같은 느낌을 불러일으킨다.
                                    <br>
                                    <br>
                                    마침내 올여름 만나게 되는 1991년 소말리아의 수도 <br>모가디슈에 고립된 이들의 극적인 이야기는 <br>관객들이 꼭 한번 경험해보면 좋을 기회를 제공할 것이다.
                                </p>
                            </div>
                        </div>
                        <div class="detail_button">
                            <div class="trailler">
                                <router-link to="/trailler_1">예고편/스틸컷</router-link>
                            </div>
                            <div class="audience">
                                <router-link to="/star-rating">평점/누적관객수</router-link>
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
a {
    text-decoration: none;
    color: white;
}
* {
    color: #222;
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
    color: #222;
}
.info0 h2{
    font-family: 'solmee-Medium M';
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
font-family: 'solmee-Medium L';
}
.info2 b{
font-family: 'solmee-Medium L';
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

