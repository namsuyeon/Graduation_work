<template>
  <div id="app">
    <div class="header">
        <div class="user_info" v-if="!this.$store.state.isLogined">
            <router-link to="/login">로그인&nbsp;|&nbsp;</router-link>
            <router-link to="/join_agree">회원가입</router-link>
        </div>
        <div class="user_info" v-else>
            <a @click="logout()" href="javascript:void(0)">로그아웃&nbsp;|&nbsp;</a>
            <router-link to="/mypage">마이페이지</router-link>
        </div>
        <div id="menu">
            <ul class="main1">
                <li><router-link to="/movie">영화</router-link></li>
                <li><router-link to="/reserve">예매</router-link></li>
                <li><router-link to="/"><b class="home">CINEMA</b></router-link></li>
                <li><router-link to="/notice">공지사항</router-link></li>
                <li><router-link to="/board/list">고객센터</router-link></li>
            </ul>
        </div>            

        <router-view/>
    </div>
  </div>
</template>

<script>
import { logout, qwe } from './api'

export default {
    computed: {
        cookie: function() {
            return this.$cookies.get("token")
        }
    },
    methods: {
        logout: function() {
            this.$store.state.isLogined = false
            logout();
            this.$router.push('/');
        },
        hell: function() {
            qwe()
        }
    }
}
</script>

<style>
@font-face {
    font-family: '210 Manbalchungchun L';
    src: url('./font/TTManbalchungchunL.woff2') format('woff2'),
        url('./font/TTManbalchungchunL.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: '210 Manbalchungchun B';
    src: url('./font/TTManbalchungchunB.woff2') format('woff2'),
        url('./font/TTManbalchungchunB.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}


@font-face {
    font-family: 'esamanru-Medium M';
    src: url('./font/esamanru-Medium.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'esamanru-Medium L';
    src: url('./font/esamanru-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'solmee-Medium M';
    src: url('./font/solmee-Medium.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'solmee-Medium L';
    src: url('./font/solmee-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'jammin L';
    src: url('./font/jammin.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'AIR';
    src: url('./font/Air_ttf.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

* {
  text-align : center;
  color: rgb(190, 59, 49);
  list-style-type: none;
  text-decoration: none;
  font-family: 'esamanru-Medium M';
}
.home {
    font-size : 2.5vw;
    margin-left: -10%;

}
.home {animation-duration: 3s; animation-name: rainbowLink; animation-iteration-count: infinite;}
@keyframes rainbowLink0 {     
 0% { color: #ff2a2a; }
 15% { color: #ff7a2a; }
 30% { color: #ffc52a; }
 45% { color: #43ff2a; }
 60% { color: #2a89ff; }
 75% { color: #202082; }
 90% { color: #6b2aff; } 
 100% { color: #e82aff; }
}
.body {
        background-image: url('./assets/back2-1.jpg');
        /* background-repeat: no-repeat; */
        background-size: cover;
        background-attachment: fixed;
}

.header {
  background-color: #222;
  align-items: center;
  text-align : center;
}

h1 {
    
    text-align: center;
    font-size: 3.45vw;
    color : rgb(190, 59, 49);
   
}
.user_info {
  float: right;
  padding: 4px;
  padding-top: 10px;
  font-size : 0.83vw;
    }


#menu {
    height: 8vh;
    
    margin-left: 4%;
}

.main1 {
    width: 50%;
    margin-left: -2.5%;
    display: inline-block;
    
    padding-bottom: 2%;
    list-style-type: none;
    font-size: 1.2vw;
  
}

.main1>li {
    float: left;
    width: 20%;
    line-height: 30px;
    text-align: center;
}

.main1>li:hover {
    left: 0;
}

.main1>li a {
    display: block;
}

/* .main1>li a:hover {
    background: rgba(255, 255, 255, 0);
    color: rgb(192, 0, 0);
    font-weight: bold;
} */
.main1>li a:hover { animation-duration: 3s; animation-name: rainbowLink; animation-iteration-count: infinite; } 
@keyframes rainbowLink {     
 0% { color: #ff2a2a; }
 15% { color: #ff7a2a; }
 30% { color: #ffc52a; }
 45% { color: #43ff2a; }
 60% { color: #2a89ff; }
 75% { color: #202082; }
 90% { color: #6b2aff; } 
 100% { color: #e82aff; }
}

.display-footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row; 
    width: 100%;
    padding : 1% 0%;
    
}
.background-footer {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    width: 35%;
    padding: 1% 1%;
    
    /* 모서리둥글게 */
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 2ex;
    overflow: hidden;
}
.contact {
    text-align: left;
    font-size : 0.9vw;
    text-align: left;
}
</style>
