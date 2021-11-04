<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <div>
                    <h2>고객센터</h2>
                    <p>문의사항을 아래에 적어주세요.</p><br>

                    <div class="searchWrap">
                        <input type="text" v-model="keyword" @keyup.enter="fnSearch" /><a href="javascript:;" @click="fnSearch" class="btnSearch btn">검색</a>
                    </div>

                    <div class="listWrap">
                        <table class="tbList">
                            <colgroup>
                                <col width="5%" />
                                <col width="55%" />
                                <col width="20%" />
                                <col width="20%" />
                            </colgroup>
                            <tr>
                                <th>no</th>
                                <th>제목</th>
                                <th>아이디</th>
                                <th>날짜</th>
                            </tr>
                            <tr v-for="(row, idx) in list" :key="idx">
                                <td>{{no-idx}}</td>
                                <td class="txt_left"><a href="javascript:;" @click="fnView(`${row.num}`)">{{row.subject}}</a></td>
                                <td>{{row.id}}</td>
                                <td>{{row.regdate.substring(0,10)}}</td>
                            </tr>
                            <tr v-if="list.length == 0">
                                <td colspan="4">데이터가 없습니다.</td>
                            </tr>
                        </table>
                    </div>

                    <div class="pagination" v-if="paging.totalCount > 0">
                        <a href="javascript:;" @click="fnPage(1)" class="first">&lt;&lt;</a>
                        <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"  class="prev">&lt;</a>
                        <template v-for=" (n,index) in paginavigation()">
                            <template v-if="paging.page==n">
                                <strong :key="index">{{n}}</strong>
                            </template>
                            <template v-else>
                                <a href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{n}}</a>
                            </template>
                        </template>
                        <a href="javascript:;" v-if="paging.total_page > paging.end_page" @click="fnPage(`${paging.end_page+1}`)"  class="next">&gt;</a>
                        <a href="javascript:;" @click="fnPage(`${paging.total_page}`)" class="last">&gt;&gt;</a>
                    </div>

                    <div class="btnRightWrap">
                        <a @click="fnAdd" class="btn">글쓰기</a>
                    </div>
                </div>
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
   data() { //변수생성
      return{
            password: "",
            isStatusOn : false,
         body:'' //리스트 페이지 데이터전송
         ,board_code:'news' //게시판코드
         ,list:'' //리스트 데이터
         ,no:'' //게시판 숫자처리
         ,paging:'' //페이징 데이터
         ,start_page:'' //시작페이지
         ,page:this.$route.query.page ? this.$route.query.page:1
         ,keyword:this.$route.query.keyword
         ,paginavigation:function() { //페이징 처리 for문 커스텀
            var pageNumber = [];
            var start_page = this.paging.start_page;
            var end_page = this.paging.end_page;
            for (var i = start_page; i <= end_page; i++) pageNumber.push(i);
            return pageNumber;
         }
      }
   }
   ,mounted() { //페이지 시작하면은 자동 함수 실행
      this.fnGetList();
   }
   , methods:{
      fnGetList() { //데이터 가져오기 함수
         this.body = { // 데이터 전송
            board_code:this.board_code
            ,keyword:this.keyword
            ,page:this.page
         }
         this.$http.get('/api/list',{params:this.body})
         .then((res)=>{
            if(res.data.success) {
               this.list = res.data.list;
               this.paging = res.data.paging;
               this.no = this.paging.totalCount - ((this.paging.page-1) * this.paging.ipp);
            } else {
               alert("실행중 실패했습니다.\n다시 이용해 주세요.");
            }
         })
         .catch((err)=>{
            console.log(err);
         })
      }
      ,fnAdd() {
         this.$router.push("./write");
      }
      ,getList() {
         this.$http.get("/api/list")
         .then((res)=>{
            console.log(res);
         })
         .then((err)=>{
            console.log(err);
         })
      }
      ,fnSearch() { //검색
         this.paging.page = 1;
         this.fnGetList();
      }
      , fnPage(n) {//페이징 이
         if(this.page != n) {
            this.page = n;
            this.fnGetList();
         }
      }
        ,fnView(num) {
        this.body.num = num;
        const password = window.prompt("게시물의 비밀번호를 입력하세요.")
        this.body.password = password

         this.$http.get('/api/view'+this.body.num,{params:this.body})
            .then((res) => {
                if(res.data.success) this.$router.push({path:'./view',query:this.body});
                else {
                    alert('비밀번호가 틀렸습니다. 다시 입력해주세요.');
                }
            }) //추가한 상세페이지 라우터
        }



   }
}
</script>

<style scoped>
* {
    color : #222;
}
.btn-modal {
    background-color: rgb(190, 59, 49);
    color: #fff;
    border: 1px solid rgb(190, 59, 49);
    display: inline-block;
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
.searchWrap{border:1px solid #888; border-radius:5px; text-align:center; padding:20px 0; margin-bottom:40px;}
.searchWrap input{width:60%; height:36px; border-radius:3px; padding:0 10px; border:1px solid #888;}
.searchWrap .btnSearch{display:inline-block; margin-left:10px;}
.tbList th{border-top:1px solid #888;}
.tbList th, .tbList td{border-bottom:1px solid #eee; padding:5px 0;}
.tbList td.txt_left{text-align:left;}
.btnRightWrap{text-align:right; margin:10px 0 0 0; }

.pagination{margin:20px 0 0 0; text-align:center;}
.first, .prev, .next, .last{border:1px solid #666; margin:0 5px;}
.pagination span{display:inline-block; padding:0 5px; color:#333;}
.pagination a{text-decoration:none; display:inline-block; padding:0 5px; color:#666;}
h2{color:#222;}
table{width:200%; margin-left: -50%; border-collapse:collapse;}
.wrap{width:100%;}
.container{width:800px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:rgb(190, 59, 49); color:#fff;}
</style>