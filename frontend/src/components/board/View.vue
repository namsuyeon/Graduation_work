<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <div>
                    <h2>상세보기</h2>

                    <div class="AddWrap">
                        <form>
                            <table class="tbAdd">
                                <colgroup>
                                    <col width="15%" />
                                    <col width="*" />
                                </colgroup>
                                <tr>
                                    <th>제목</th>
                                    <td>{{subject}}</td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td class="txt_cont" v-html="cont"></td>
                                </tr>
                            </table>
                        </form>
                    </div>

                    <div class="btnWrap">
                        <a href="javascript:;" @click="fnList" class="btn">목록</a>
                        <a v-if="num" href="javascript:;" @click="fnDeleteProc" class="btnDelete btn">삭제</a>
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
		return {
			body:this.$route.query
			,subject:''
			,cont:''
			,view:''
            ,id: ''
			,num:this.$route.query.num,
            password: ""
		}
	}
	,mounted() {
		this.fnGetView();
	}
	,methods:{
		fnGetView() {
			this.$http.get('/api/view'+this.body.num,{params:this.body})
			.then((res)=>{
				this.view = res.data.view[0];
				this.subject = this.view.subject;
				this.cont = this.view.cont.replace(/(\n)/g,'<br/>');
            })
			.catch((err)=>{
				console.log(err);
			})
		}
		,fnList(){
			delete this.body.num;
			this.$router.push({path:'./list',query:this.body});
		}
        ,fnMod() {
			this.$router.push({path:'./write',query:this.body}); //등록화면으로 이동하면서 파라미터를 넘겨준다.
		}
        ,fnDeleteProc() {
			if(confirm("삭제하시겠습니까?")) {
				this.$http.delete('/api/delete',{params:this.body})
				.then((res)=>{
					if(res.data.result) {
						alert("삭제되었습니다.");
						this.fnList();
					} else {
						alert("실행중 실패했습니다.\n다시 이용해 주세요.");
					}
				})
				.catch((err)=>{
					console.log(err);
				})
			}
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
.container{width:1000px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:rgb(190, 59, 49); color:#fff;}
.tbAdd{border-top:1px solid #888;}
.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
.tbAdd td.txt_cont{height:300px; vertical-align:top;}
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0 10px;}
.btnAdd {background:rgb(190, 59, 49);}
.btnDelete{background:rgb(190, 59, 49);}
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