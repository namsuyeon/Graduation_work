<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <h2>NOTICE</h2>
                <p>SSINEMA의 소식을 알려드립니다.</p><br>
                <table class="table_80">
                    <colgroup>
                        <col style="width: 7%" />               
                        <col style="width: 10%" />
                        <col style="width: 63%" /> 
                        <col style="width: 20%" />                                
                    </colgroup>
                    <thead>
                        <th>번호</th><th>구분</th><th>제목</th><th>등록일</th>
                    </thead>
                    <tbody>
                        <tr class="height_50p">
                            <td>09</td>
                            <td>[극장]</td>
                            <td>
                                <a href="#" style="color: black;">[CGV부천] 10/21~26 BIAF(부천 애니페스티벌) 진행</a>
                            </td>
                            <td>21.10.18 </td>
                        </tr>
                        <tr class="height_50p">
                            <td>08</td>
                            <td>[극장]</td>
                            <td>
                                <a href="#" style="color: black;">현대 모빌리티 아멕스카드 현대블루멤버스 포인트 사용 일부 제한 안내</a>
                            </td>
                            <td>21.10.06 </td>
                        </tr>
                        <tr class="height_50p">
                            <td>07</td>
                            <td>[극장]</td>
                            <td>
                                <a href="#" style="color: black;">[CGV센텀시티]21.10.07~21.10.14 부산국제영화제 상영안내</a>
                            </td>
                            <td>21.10.03</td>
                        </tr>
                        <tr class="height_50p">
                            <td>06</td>
                            <td>[극장]</td>
                            <td>
                                <a href="#" style="color: black;">CGV대구 영업 종료 안내</a>
                            </td>
                            <td>21.09.23</td>
                        </tr>
                        <tr class="height_50p">
                            <td>05</td>
                            <td>[기타]</td>
                            <td>
                                <a href="#" style="color: black;">[기적] 스피드 쿠폰 2차 일부 CJ ONE 포인트 미적립 발생에 따른 조치 안내</a>
                            </td>
                            <td>21.09.15</td>
                        </tr>
                        <tr class="height_50p">
                            <td>04</td>
                            <td>[기타]</td>
                            <td>
                                <a href="#" style="color: black;">포토플레이 과거 제작 이미지 삭제 안내</a>
                            </td>
                            <td>21.09.13</td>
                        </tr>
                        <tr class="height_50p">
                            <td>03</td>
                            <td>[기타]</td>
                            <td>
                                <a href="#" style="color: black;">22년 VIP 선정 기준 변경 및 추가 기준 관련 안내</a>
                            </td>
                            <td>21.09.01</td>
                        </tr>
                        <tr class="height_50p">
                            <td>02</td>
                            <td>[극장]</td>
                            <td>
                                <a href="#" style="color: black;">문화가 있는 날 가격조정 안내</a>
                            </td>
                            <td>21.07.30</td>
                        </tr>
                        <tr class="height_50p">
                            <td>01</td>
                            <td>[극장]</td>
                            <td>
                                <a href="#" style="color: black;">수도권 사회적 거리두기 4단계 격상에 따른 영화관 이용 안내</a>
                            </td>
                            <td>21.07.13</td>
                        </tr>
                    </tbody>
                </table>
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

<script>
export default {
    
}
</script>

<style scoped>
* {
    color: #222;
}
thead {
    font-size : 1.5vw;
    border-bottom: 2px solid rgb(190, 59, 49);
}
.table_80 {
    border-top: 2px solid rgb(190, 59, 49);
    border-bottom: 2px solid rgb(190, 59, 49);
    border-collapse: collapse;
    margin: 0px auto;
    width: 100%;
    font-size: 0.9vw;
    table-layout: fixed;
}
.height_50p {
    height: 6vh;
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

</style>