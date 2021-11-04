<template>
    <div class="body">
        <main class="display">
            <div class="background">
                <h1>JOIN</h1>
                <p class="small-title">안녕하세요. CGV입니다.</p>
                <form @submit.prevent="submitForm">
                    <div id="signin">
                        <input id="photo" name="photo" type="file">
                    </div>
                    <div id="signin">
                        <label class="sign" for="userid">아이디 <span>&centerdot;</span></label><br>
                        <input id="userid" name="userid" type="text" placeholder="아이디" v-model="userid" @focus="checkFlag = false" /><br>
                        <span class="error_next_box" v-if="checkFlag && !userid">아이디를 입력하세요</span>
                    </div>
                    <div id="signin">
                        <label class="sign" for="password">비밀번호 <span>&centerdot;</span></label><br>
                        <input id="password" name="pass" type="password" placeholder="비밀번호" v-model="password" @focus="checkFlag = false" /><br>
                        <input id="pass2" type="password" placeholder="비밀번호 확인" v-model="passwordcheck" @focus="checkFlag = false">
                        <span class="error_next_box" v-if="checkFlag && !password">비밀번호를 입력하세요</span>
                    </div>
                    <div id="signin">
                        <label class="sign" for="name">이름 <span>&centerdot;</span></label><br>
                        <input id="name" name="name" type="text" placeholder="이름을(를) 입력하세요." v-model="name" @focus="checkFlag = false" maxlength="20" />
                        <span class="error_next_box" v-if="checkFlag && !name">이름을 입력하세요</span>
                    </div>
                    <div id="signin">
                        <label class="sign">성별 <span>&centerdot;</span></label><br>
                        <div class="gender">
                            <input id="man" name="gender" type="radio" value="man">
                            <label for="man">남자</label>
                            <input id="woman" name="gender" type="radio" value="woman">
                            <label for="woman">여자</label>
                        </div>
                    </div>

                    <div id="signin">
                        <label class="sign" for="phone">연락처 <span>&centerdot;</span></label><br>
                        <input id="phone" type="tel" placeholder="연락처" v-model="tel" maxlength="11" @focus="checkFlag = false" />
                        <span class="error_next_box" v-if="checkFlag && !tel">전화번호를 입력해주세요</span>
                    </div>

                    <div id="signin">
                        <label class="sign" for="email">이메일 <span>&centerdot;</span></label><br>
                        <input id="email" name="email" type="email" placeholder="이메일" v-model="email" @focus="checkFlag = false" />
                        <span class="error_next_box" v-if="checkFlag && !email">이메일을 입력해주세요</span>
                    </div>

                    <div id="signin">
                        <label class="sign" for="birthday">생년월일 <span>&centerdot;</span></label><br>
                        <select class="bir_yy" name="bir_yy" v-model="bir_yyyy">
                            <option value="">연</option>
                            <option
                                v-for="(item, index) in yyyyList"
                                :key="index"
                                :value="item.value"
                            >
                                {{ item.text }}
                            </option>                            
                        </select>
                        <select class="bir_mm" name="bir_mm" v-model="bir_mm">
                            <option value="">월</option>
                            <option
                                v-for="(item, index) in mmlist"
                                :key="index"
                                :value="item.value"
                                >
                                {{ item.text }}
                            </option>
                        </select>
                        <select class="bir_dd" name="bir_dd" v-model="bir_dd">>
                            <option value="">일</option>
                            <option
                                v-for="(item, index) in ddlist"
                                :key="index"
                                :value="item.value"
                                >
                                {{ item.text }}
                            </option>
                        </select>
                        <span class="error_next_box" v-if="checkFlag && (!bir_yyyy || !bir_mm || !bir_.dd)">생년월일을 입력하세요</span>
                    </div>

                    <div id="signin">
                        <label class="sign" for="address">주소 <span>&centerdot;</span></label><br>
                        <input id="address" type="text" placeholder="주소" v-model="address"  maxlength="100" @focus="checkFlag = false" /><br>
                        <span class="error_next_box" v-if="checkFlag && !address">주소를 입력해주세요</span>
                    </div>

                    <div id="signin">
                        <label class="sign" for="genre">선호하는 영화장르 한가지를 적어주세요.</label>
                        <p class='type'>(액션, 드라마, 스릴러, 공포, 애니메이션, 로맨스 中)</p>
                        <input id="genre" name="genre" type="text" v-model="genre" placeholder="장르" />
                    </div>
                    <div>
                        <input id="agree_terms" name="agree_terms" type="hidden">
                        <input id="user_info_agree" name="user_info_agree" type="hidden">
                        <input id="marketing_sms_agree" name="marketing_sms_agree" type="hidden">
                        <input id="marketing_email_agree" name="marketing_email_agree" type="hidden">
                        <button type="submit" class="btn-shape-border">가입하기</button>
                    </div>
                </form>
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
import { registerUser } from '@/api'

export default {
    name: 'SignupForm',
    filters: {
        comma(val) {
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
    props: {
        propSignupForm: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            checkFlag: false,
            userid : '',
            password : '',
            name : '',
            tel : '',
            email : '',
            genre : '',
            address : '',  
            bir_yyyy: "",
            bir_mm: "",
            bir_dd: "",   
            yyyyList: [],
            mmlist: [],
            ddlist: [],       
        }
    },

    created() {
        const nowYear = new Date().getFullYear();
        for (let i = 0; i < 100; i++) {
        let date = nowYear - i;
        this.yyyyList.push({ value: date, text: date });
        }

        for (let i = 1; i < 13; i++) {
        this.mmlist.push({
            value: i,
            text: i,
        });
        }

        for (let i = 1; i < 32; i++) {
        this.ddlist.push({
            value: i,
            text: i,
        });
        }
    },
    methods: {
        async submitForm() {
            //validation 생략
            const userData = {
                userid : this.userid,
                password : this.password,
                name: this.name,
                tel : this.tel,
                email: this.email,
                address : this.address,
                genre: this.genre,
            };
            
            const response = await registerUser(userData);

            if (response.status==200) {
                alert(response.data.message);
                this.$router.push('/login');
                
            } else {
                alert(response.data.message);
            }
        }
    },
}
</script>

<style scoped>
.type {
    font-size : 0.9vw;
    margin-left: -10%;
    margin-top: -1%;
}
.error_next_box {
  display: block;
  margin: 9px 0 -2px;
  font-size: 12px;
  line-height: 14px;
  color: red;
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
.small-title {
    text-align: center;
    margin-bottom: 4%;
    font-size : 1vw;
}
#signin {
    text-align: left;
    margin-top: 3%; 
    margin-left: -10%;
    padding : 2%;
}
#signin input {
    border: 1px solid rgb(190, 59, 49);
    border-radius: 3px;
    margin: -1px 10px;
    width: 100%;
    padding: 10px;
    text-align: left;
    
}
.gender {
    
    display : inline-block;
}
.sign {
    margin-left : 2.5%;
}
label {
    color : black;
}
.btn-shape-border{
    width: 100%;
    border: 1px solid rgb(190, 59, 49);
    padding: 2%;
    background-color: rgb(190, 59, 49);
    text-align: center;
    margin-top: 10px;
    font-size: 1.1vw;
    color: #fff;
    
}
.bir_dd,
.bir_mm,
.bir_yy {
  display: table-cell;
  table-layout: fixed;
  width: 31%;
  padding : 2%;
  vertical-align: middle;
  *display: block;
  *float: left;
}
.bir_yy,
.bir_mm + .bir_dd,
.bir_yy + .bir_mm {
  margin-left: 2%;
}
</style>
