<template>
    <div id="App" class="body">
        <div class="black-bg" v-if="modal1 == true">
            <div class="white-bg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3V-SWIEEM_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
                <button class="btn-modal" @click="modal1=false">닫기</button>
            </div>
        </div>
        <div class="black-bg" v-if="modal2 == true">
            <div class="white-bg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lxE2JI6MgEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>                
                <button class="btn-modal" @click="modal2=false">닫기</button>
            </div>
        </div>
        <div class="black-bg" v-if="modal3 == true">
            <div class="white-bg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OMFHBSz0Nk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
                <button class="btn-modal" @click="modal3=false">닫기</button>
            </div>
        </div>
        <div class="black-bg" v-if="modal4 == true">
            <div class="white-bg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BOEVQSprNv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>                
                <button class="btn-modal" @click="modal4=false">닫기</button>
            </div>
        </div>
        <div class="display-movie">
            <div class="background-main">
                <main>
                    <section>
                    <!--상영영화 동영상 슬라이드-->
                        <div class="slide">
                            <ul>
                                <li><a href="#"><img src="../assets/Inzil.jpg" width="110%"></a></li>
                                <li><a href="#"><img src="../assets/Sence.jpg" width="110%"></a></li>
                                <li><a href="#"><img src="../assets/Squad.jpg" width="110%"></a></li>
                            </ul> 
                        </div>
                        <div id="container">
                            <ul class="movie-list">
                                <li>
                                    <a href="#"><img src="../assets/poster1.jpg" width="230vw"></a>
                                    <div class="caption">
                                        내전으로 고립된 낯선 도시, 모가디슈<br>
                                        지금부터 우리의 목표는 오로지 생존이다!<br>
                                        대한민국이 UN가입을 위해 동분서주하던 시기<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                        <br>
                                        <button @click="modal1=true" class="btn-shape2">예고편</button><br>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/poster2.jpg" width="230vw"></a>
                                    <div class="caption">
                                        가족 같은 회사로 모십니다<br>
                                        베이비 주식회사의 레전드 보스 베이비에서 인생 만렙 CEO가 된 ‘테드’.<br>
                                        베이비인 줄 알았던 조카 ‘티나’가 알고 보니 베이비 주식회사<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                        <br>
                                        <button @click="modal2=true" class="btn-shape2">예고편</button><br>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/poster3.jpg" width="230vw" style="z-index:2"></a>
                                    <div class="caption">
                                        디즈니 제작! 이번엔 아마존이다! 미지의 세계 아마존에서 관광객들에게 최고의 스릴을 선사하는 재치 넘치는 크루즈 선장 프랭크(드웨인 존슨). 고대 아마존의 전설을 쫓아 영국에서 온 식물 탐험가<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                        <br>
                                        <button @click="modal3=true" class="btn-shape2">예고편</button><br>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/poster4.jpg" width="230vw"></a> 
                                    <div class="caption">
                                        "모든 것을 바꾼 그녀의 선택” 어벤져스의 운명을 바꾼 블랙 위도우, 그녀의 진짜 이야기가 시작된다! 어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는 자신의 과거와...<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                        <br>
                                        <button @click="modal4=true" class="btn-shape2">예고편</button><br>
                                    </div>
                                </li>
                            </ul>
                            <div class="more">
                                <router-link to="/movie">더보기&gt;</router-link>
                            </div>
                        </div>
                    </section> 
                </main>               
            </div>
        </div>
        <!--공지사항-->
        <div class="display-movie">            
            <div class="background-notice">
                <h1>공지사항</h1>
                <div class="notice_more">
                    <router-link to="/notice">+</router-link>
                </div>
                <table class="table_80">
                    <colgroup>
                        <col style="width: 80%" />               
                        <col style="width: 20%" />                               
                    </colgroup>
                    <thead>
                    </thead>
                    <tbody>
                        <tr class="height_50p">
                            <td>
                                <a href="#" style="color: black;">[극장] [CGV부천] 10/21~26 BIAF(부천 애니페스티벌) 진행</a>
                            </td>
                            <td>21.10.18 </td>
                        </tr>
                        <tr class="height_50p">
                            <td>
                                <a href="#" style="color: black;">[극장] 현대 모빌리티 아멕스카드 현대블루멤버스 포인트 사용 일부 제한 안내</a>
                            </td>
                            <td>21.10.06 </td>
                        </tr>
                        <tr class="height_50p">
                            <td>
                                <a href="#" style="color: black;">[극장] [CGV센텀시티]21.10.07~21.10.14 부산국제영화제 상영안내</a>
                            </td>
                            <td>21.10.03</td>
                        </tr>
                        <tr class="height_50p">
                            <td>
                                <a href="#" style="color: black;">[극장] CGV대구 영업 종료 안내</a>
                            </td>
                            <td>21.09.23</td>
                        </tr>
                        <tr class="height_50p">
                            <td>
                                <a href="#" style="color: black;">[기타] [기적] 스피드 쿠폰 2차 일부 CJ ONE 포인트 미적립 발생에 따른 조치 안내</a>
                            </td>
                            <td>21.09.15</td>
                        </tr>
                        <tr class="height_50p">
                            <td>
                                <a href="#" style="color: black;">[기타] 포토플레이 과거 제작 이미지 삭제 안내</a>
                            </td>
                            <td>21.09.13</td>
                        </tr>
                        <tr class="height_50p">
                            <td>
                                <a href="#" style="color: black;">[기타] 22년 VIP 선정 기준 변경 및 추가 기준 관련 안내</a>
                            </td>
                            <td>21.09.01</td>
                        </tr>
                        
                    </tbody>
                </table><br>
                <h1>이벤트</h1><br>
                <div>
                    <li><a href="#"><img src="../assets/event1.jpg" width="100%"></a></li>
                </div>
            </div>      
            <!--지도-->
            <div class="background-map">
                <h1>찾아오시는길</h1><br>
                <GmapMap
                ref="mapRef"
                :center="center"
                :zoom="16"
                style="width:100%; height: 67.5vh;"
                >   
                <GmapMarker
                :key="index"
                v-for="(m,index) in markers"
                :position="m.position"
                />
                </GmapMap>                           
            </div>
        </div>
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

<style scoped>
.event {
    display : inline-block;
}
h1 {
    font-size: 1.4vw;
    text-align: center;
    margin: auto;
    padding: 10px;
    color: #fff;
    background: rgb(190, 59, 49);
    border-radius: 25px;
}

.table_80 {
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    border-collapse: collapse;
    margin: 0px auto;
    width: 100%;
    font-size: 0.9vw;
    table-layout: fixed;
}

.height_50p {
    height: 30px;
}

.table_80 td {   
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    color: black;
}


img {
    z-index:2;
}
.black-bg {
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
    box-sizing: border-box;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.white-bg {
    width: 70%; height: 70%; background: white;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#container {text-align: center;}
#container ul {list-style-type: none; margin-left: -5%; margin-top: -2%;}
#container li {
    display: inline-block;
    width: 230px;
    position: relative;
    overflow: hidden;
    margin: 10px;
    
}

.white-font {
    color: #fff;
}
.movie-list {
    margin-left: 50px;
}

.movie-list .caption {
    color: white;
    font-size: 1vw;
    position: absolute;
    top: 200px;
    width: 230px;
    height: 70%;
    padding-top: 50%;
    background-color: rgba(0,0,0,0.6);
    
    opacity: 0;
    z-index: 10;
    transition: all 0.5s ease-in-out;
}

.movie-list li:hover .caption {
    opacity: 1;
    transform: translateY(-220px);
    z-index: 10;
}

.slide {
    height:100%; overflow:hidden;
}
.slide ul{width:300%;display:flex;animation:slide 8s infinite;}
.slide li {width:40%; height: 100%;}

@keyframes slide {
    0% {margin-left: -3%;}
    15% {margin-left: -3%;}
    30% {margin-left:-103.5%;}
    45% {margin-left:-103.5%;}
    65% {margin-left: -203.5%}
    85% {margin-left: -203.5%;}
    100% {margin-left: -3%;}
}

.caption button[type=submit] {
    border-radius: 0px;
    width: 100px;
    border: none;
    font-size: 1.1vw;
}
.btn-modal {
    background-color: rgb(190, 59, 49);
    color: #fff;
    border: 1px solid rgb(190, 59, 49);
}
.btn-shape {
    margin: 0px auto;
    width: 100px;
    padding: 5px;
    background-color: #fff;
    border-radius: 25px;
    text-align: center;
    margin-bottom: 10px;
}
.btn-shape2 {
    margin: 0px auto;
    width: 70px;
    padding: 5px;
    background-color: #fff;
    font-size: 1vw;
    border-radius: 25px;
    text-align: center;
    margin-bottom: 10px;
}
.notice_more{
    margin-left: 90%;
    text-align: right;
    font-size: 1.2vw;
}
.more {
    text-align: right;
    margin-top: -5%;
    font-size: 1vw;
}

.display-movie {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; 
    width: 100%;
    padding : 1% 0%;
    z-index: 10;
}
.background-main {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    width: 75%;
    padding: 1% 1%;
    
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255, 0.3);
    border-radius: 2ex;
    overflow: hidden;
}

.background-notice {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5%;
    margin-top: -1.5%;
    flex-direction: column; 
    width: 21%;
    
    padding: 1% 1%;
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255, 0.3);
    border-radius: 2ex;
    overflow: hidden;
}
.background-map {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: -1.5%;
    width: 51.5%;
    flex-direction: column;
    padding: 1% 1%; 
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255, 0.6);
    border-radius: 2ex;
    overflow: hidden; 
}

</style>

<script>
export default {
    name: "App",
    data() {
        return {
            modal1 : false,
            modal2 : false,
            modal3 : false,
            modal4 : false,
            center : {
                lat: 36.6290439,
                lng: 127.4541514,
            },
            markers: [
                {
                    position: {
                        lat: 36.6290439,
                        lng: 127.4541514,
                    },
                },
            ],
        }
    }
    

};
</script>