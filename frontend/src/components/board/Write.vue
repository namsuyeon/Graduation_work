<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <div>
					<h2>문의사항 {{num ? '수정':'등록'}}</h2> <!-- num 값에 따라 제목 변경 -->

					<div class="AddWrap">
						<form>
							<table class="tbAdd">
								<colgroup>
									<col width="15%" />
									<col width="*" />
								</colgroup>
								<tr>
									<th>제목</th>
									<td>
									<!-- v-model 양뱡향데이터전송으로 상세 데이터 넣어준다 -->
									<input type="text" v-model="subject" ref="subject" /></td>
								</tr>
								<tr>
									<th>내용</th>
									<td><textarea v-model="cont" ref="cont"></textarea></td>
								</tr>
								<tr>
									<th>비밀번호</th>
									<td><input id="password" name="password" type="password" ref="password" placeholder="비밀번호" v-model="password"/> </td>
								</tr>
							</table>
						</form>
					</div>

					<div class="btnWrap">
						<a href="javascript:;" @click="fnList" class="btn">목록</a>
						<a v-if="!num" href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
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
	data() {
		return{
			board_code:'news'
			,subject:''
			,cont:''
			,password:''
			,id: '익명'
			,body:this.$route.query 
			,form:'' //form 전송 데이터
			,num:this.$route.query.num
		}
	}
	,mounted() { //최초 로딩 시 실행
		if(this.num) { // num 값이 있으면 상세 데이터 호출한다.
			this.fnGetView();
		}
	}
	,methods:{
		fnList(){
			delete this.body.num;
			this.$router.push({path:'./list',query:this.body});
			
		}
		,fnGetView() {
			this.$http.get('/api/view'+this.body.num,{params:this.body})
			.then((res)=>{
				this.view = res.data.view[0];
				this.subject = this.view.subject;
				this.cont = this.view.cont;
				this.password = this.view.password;
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		,fnView() {
			this.$router.push({path:'./view',"query":this.body});
		}	
		,fnAddProc() {
			if(!this.subject) {
				alert("제목을 입력해 주세요");
				this.$refs.subject.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = {
				board_code:this.board_code
				,subject:this.subject
				,cont:this.cont
				,id:this.id
				,password:this.password
			} 
			
			this.$http.post('/api/write',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('등록되었습니다.');
					this.fnList();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
			
		}
		,fnModProc() {
			if(!this.subject) {
				alert("제목을 입력해 주세요");
				this.$refs.subject.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = {
				board_code:this.board_code
				,subject:this.subject
				,cont:this.cont
				,id:this.id
				,num:this.num
				,password:this.password
			} 
			
			this.$http.put('/api/mod',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('수정되었습니다.');
					this.fnView();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		}
	}	
}
</script>

<style scoped>
* {
    color : #222;
}
h2{color:#222;}
table{width:200%; margin-left: -50%; border-collapse:collapse;}
.wrap{width:100%;}
.container{width:800px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:rgb(190, 59, 49); color:#fff;}
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
.tbAdd{border-top:1px solid #888;}
.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0 10px;}
.btnAdd {background:rgb(190, 59, 49);}
.btnDelete{background:rgb(190, 59, 49);}
</style>