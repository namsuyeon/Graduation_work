<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <main>
                    <div class="btn-shape-moviechart">
                        <p class="main"><img class="img" src="../assets/player.png" width= "150vw"></p>
                        <p class="main">{{ myInfor.name }}님 안녕하세요</p>
                    </div>
                    <h2>Account</h2>
                    <div class="border multi">
                        <p class="br">ID. {{ myInfor.userid }} <br><br>
                        Mail. {{ myInfor.email }}</p>
                        <p><br><br><br>TEL. {{ myInfor.tel }} <br><br>
                        Address. {{ myInfor.address }}</p>
                    </div><br>
                    <h2>My ticket</h2><br>
                    <div class="ticket bgcolor" v-for="(movie, index) in myInfor.my_seat" key="index">
                        <p class="moviename">{{ movie.movieName }}</p>
                        <p class="box"></p><br>
                        <div v-for="(seat, index2) in movie.seatArr" key="index2">
                            <span>좌석번호 : {{ seat }}</span><br>
                        </div><br>
                        <span>상영관 : 1관</span>
                    </div>
                    <h2>Recommand</h2>
                    <p>{{ myInfor.name }}님이 선호하는 장르인 <b>{{myInfor.genre}}</b>와 관련된 영화는</p>
                    <div id="movie-container" v-show="myInfor.genre=='액션' | myInfor.genre=='드라마'">
                        <ul>
                            <li> <!--액션/드라마-->
                                <a href="#"><img class="img" src="../assets/poster1.jpg" width="100%"></a>
                                <div class="margin-top">
                                    <router-link to="/detail_1"><a class="btn-shape-button">상세보기</a></router-link>
                                </div>
                            </li>
                            <li> <!--액션/드라마-->
                                <a href="#"><img class="img" src="../assets/poster4.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <router-link to="/detail_3"><a class="btn-shape-button">상세보기</a></router-link>
                                </div>
                            </li>
                            <li> <!--액션/드라마-->
                                <a href="#"><img class="img" src="../assets/poster3.jpg" width="100%"></a>
                                <div class="margin-top">
                                    <router-link to="/detail_4"><a class="btn-shape-button">상세보기</a></router-link>
                                </div>
                            </li>
                            <li> <!--액션/드라마--> <!--액션/드라마,공포/스릴러-->
                                <a href="#"><img class="img" src="../assets/112.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="movie-container" v-show="myInfor.genre=='애니메이션'">
                        <ul>
                            <li> <!--애니메이션-->
                                <a href="#"><img class="img" src="../assets/poster2.jpg" width="100%"></a>
                                <div class="margin-top">
                                    <router-link to="/detail_2"><a class="btn-shape-button">상세보기</a></router-link>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img class="img" src="../assets/105.jpg" width="100%"></a>
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="movie-container" v-show="myInfor.genre=='로맨스' | myInfor.genre=='멜로'">
                        <ul>
                            <li> <!--로맨스-->
                                <a href="#"><img class="img" src="../assets/114.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                            <li> <!--로맨스-->
                                <a href="#"><img class="img" src="../assets/116.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                            <li> <!--로맨스-->
                                <a href="#"><img class="img" src="../assets/117.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="movie-container" v-show="myInfor.genre=='공포' | myInfor.genre=='스릴러'">
                        <ul>
                            <li> <!--공포/스릴러-->
                                <a href="#"><img class="img" src="../assets/109.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <router-link to="/detail_5"><a class="btn-shape-button">상세보기</a></router-link>
                                </div>
                            </li>
                            <li> <!--미스터리/스릴러-->
                                <a href="#"><img class="img" src="../assets/103.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                            <li> <!--공포-->
                                <a href="#"><img class="img" src="../assets/110.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                            <li> <!--공포-->
                                <a href="#"><img class="img" src="../assets/111.jpg" width="100%"></a> 
                                <div class="margin-top">
                                    <a class="btn-shape-button" href="#">상세보기</a>
                                </div>
                            </li>
                        </ul>
                    </div><br>
                    <p>{{ myInfor.name }}님에게 추천드리는 <b>좌석위치</b>는</p>
                    <img class="imgcss myinfor" src="../assets/seat.png">
                    <div class="myinfor balloon_03">
                        <div v-for="(movie, index) in myInfor.my_seat" key="index">
                            <div v-for="(seat, index2) in movie.seatArr" key="index2">
                                <div v-if="seat == 'A1' | seat == 'A2' | seat == 'A3' | seat == 'A4' | seat == 'A5'">
                                    <p class="seatname"> A1, A2, A3, A4, A5</p>
                                </div>
                                <div v-if="seat == 'B1' | seat == 'B2' | seat == 'B3' | seat == 'B4' | seat == 'B5'">
                                    <p class="seatname"> B1, B2, B3, B4, B5</p>
                                </div>
                                <div v-if="seat == 'C1' | seat == 'C2' | seat == 'C3' | seat == 'C4' | seat == 'C5'">
                                    <p class="seatname"> C1, C2, C3, C4, C5</p>
                                </div>
                                <div v-if="seat == 'D1' | seat == 'D2' | seat == 'D3' | seat == 'D4' | seat == 'D5'">
                                    <p class="seatname"> D1, D2, D3, D4, D5</p>
                                </div>
                                <div v-if="seat == 'E1' | seat == 'E2' | seat == 'E3' | seat == 'E4' | seat == 'E5'">
                                    <p class="seatname"> E1, E2, E3, E4, E5</p>
                                </div>
                            </div>
                        </div>
                        <p class="end">입니다.</p>
                    </div>
                </main>
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
* {
    color: #222;
    text-align : left;
}
.balloon_03 {
    border: 2px dashed #ccc;
    border-radius: 10px;
    margin-left: 3%;
    margin-top: -5%;
}

.end {
    text-align: right;
    font-size: 0.9vw;
}
#movie-container ul {list-style-type: none;}
#movie-container li{
    display: inline-block;
    width: 23%;

    margin : 0.7%;
}
.seatname {
    font-size: 0.9vw;
}
.imgcss {
    width : 38vw;
    height : 48vh;
    
}
.myinfor {
    display: inline-block;
}
.title {
    font-size: 1.03vw;
}

.margin-top {
    margin-top: 42%;
}
.btn-shape-button { 
    text-align: center;
    margin-left: 27%;
    font-size : 1.03vw;
    color : #222;
    border: 2px solid #ccc;
    background-color: #ccc;
}
span { 
    color : white;
    font-size : 1.2vw;
    margin-left: 4%;
}
.box {
    border-bottom: 6px dashed white;
    background-color: #1b63e900;
    width: 85%;
    margin-left: 6%;
}
.moviename {
    font-size : 1.5vw;
    color : white;
    margin-left: 4%;
}
.ticket {
    
    border : 1px solid rgb(247, 186, 54);
    display: inline-block;
    width : 40%;
    height: 35vh;
    margin-bottom : 3%;
    border-radius : 10px;
    background-color : rgb(247, 186, 54);
    margin-left: 5%;
}
.bgcolor:nth-child(odd) {
  background-color : #222383;
  border : 1px solid #222383;
  text-align : left;
}
.br {
    margin-top: 16.5%;
    margin-bottom: 25%;
    margin-left: 2%;
}
.multi {
    column-count: 2;  
    column-rule : 5px dashed #ccc;
}
.img {
    margin-bottom : -37%;
}
.main {
    display: inline-block;
    color: #222;
    margin-left: -3%;
}
.border {
    border-radius:100px; 
    border: 4px solid transparent; 
    background-image: linear-gradient(#fff, #fff), linear-gradient(#ec615f, #1b63e9,#1b63e9,#ec615f, #1b63e9); 
    background-origin: border-box; 
    background-clip: content-box, border-box;
}

.btn-shape-moviechart {
    margin: 0px auto;
    width: 100%;
    margin-top : -7%;
    padding: 5px;
    background-color: #fff;
    border-bottom: 8px solid #ccc;
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.7vw;
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
</style>

<script>
export default {
    data: function() {
        return {
            myInfor: {
                address: "",
                email: "",
                my_seat: "[]",
                name: "",
                password: "",
                genre: "",
                pk: 0,
                tel: "",
                user_level: null,
                userid: "",
            }
        }
    },
    mounted() {
        function indexToChar(index) {
            const first = String.fromCharCode(65 + parseInt(index / 5))
            const second = index % 5;
            return first + second
        }
        
        this.$http.get("/api/myprofile/"+this.$store.state.userPk).then((res) => {
            this.myInfor = res.data.data[0][0];
            this.myInfor.my_seat = JSON.parse(this.myInfor.my_seat);
            this.myInfor.my_seat = this.myInfor.my_seat.map((val) => {
                return {
                    ...val,
                    seatArr: val.seatArr.map((seat) => indexToChar(seat))
                }
            })
        })
    },
    methods: {
    }
};
</script>
