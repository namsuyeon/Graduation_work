<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <div class="stars">
                    <div class="star">&nbsp;</div>
                    <div class="graph0 stack0">
                        <span style="width:100%">&nbsp;</span>
                    </div>
                </div>

                <div class="graphs">
                    <div style="color:rgb(99, 99, 99);float: left; margin: 30px 0px 0px 0px;"> 10대</div>
                    <div class="graph stack1">
                    <span style="width:2%">2%</span>
                    </div>
                     <div style="color:rgb(99, 99, 99);float: left; margin: 10px 0px 0px 0px;"> 20대</div>
                    <div class="graph stack2">
                    <span style="width:29%">29%</span>
                    </div>
                    <div style="color:rgb(99, 99, 99);float: left; margin: 10px 0px 0px 0px;"> 30대</div>
                    <div class="graph stack3">
                    <span style="width:37%">37%</span>
                    </div>
                    <div style="color:rgb(99, 99, 99);float: left; margin: 10px 0px 0px 0px;"> 40대</div>
                    <div class="graph stack4">
                    <span style="width:24%">24%</span>
                    </div>
                    <div style="color:rgb(99, 99, 99);float: left; margin: 10px 0px 0px 0px;"> 50대</div>
                    <div class="graph stack5">
                    <span style="width:8%">8%</span>
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
    
}
</script>

<style scoped>

.display {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    padding : 1% 12%;
    
}
.background {
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 75%;
    padding: 3% 4%;
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}

.stars{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;


}

/* 가운데 정렬 코드 시작 / 이부분은 브라우저의 가운데 정렬을 위해 사용 (이 소스를 사용하시려면 이 부분을 지우고 사용하세요)*/
.star {
   position:absolute;
}
/* -- 가운데 정렬 코드 종료 -- */
.star {
   padding-left:0px;
   background:url('../assets/emptystar.png')  0 0 / 250px no-repeat;
   line-height:55px;
    margin-left: 34%;
    margin-top: 0.3%;
    margin-right: 0.6%;}

    

.star{
    display:block; width:50%;
}

.graph0{
   width:60%;
    height:50px; margin: 30px 50px; background: rgb(211, 211, 211);; border-radius: 0px;
}
.graph0 span {
    display:block; padding:0 10px; height:50px; line-height: 50px;
    text-align: right; border-radius: 0px; 
    box-sizing:border-box; color: #fff; animation: stack 2s 1;
}
.graph0.stack0 span {background:rgb(255, 214, 33); animation: stack0 1.5s 1;}

@keyframes stack0{
    0% {width:0;color:rgba(255,255,255,0);}
    40% {color:rgba(255,255,255,1);}
    100% {width:100%}
}




.graphs{
    display:block; width:50%;
}

.graph{
    height:40px; margin: 20px 50px; background: #ccc;; border-radius: 40px;
}
.graph span {
    display:block; padding:0 10px; height:40px; line-height: 40px;
    text-align: right; border-radius: 40px; 
    box-sizing:border-box; color: #fff; animation: stack 2s 1;
}
.graph.stack1 span {background:rgb(185, 55, 55); animation: stack1 3s 1;}
.graph.stack2 span {background:rgb(255, 217, 49); animation: stack2 3s 1;}
.graph.stack3 span {background:rgb(45, 73, 196); animation: stack3 3s 1;}
.graph.stack4 span {background:rgb(92, 56, 43); animation: stack4 3s 1;}
.graph.stack5 span {background:rgb(43, 43, 43); animation: stack5 3s 1;}

@keyframes stack1{
    0% {width:0;color:rgba(255,255,255,0);}
    40% {color:rgba(255,255,255,1);}
    100% {width:2%}
}
@keyframes stack2{
    0% {width:0;color:rgba(255,255,255,0);}
    40% {color:rgba(255,255,255,1);}
    100% {width:29%}
}
@keyframes stack3{
    0% {width:0;color:rgba(255,255,255,0);}
    40% {color:rgba(255,255,255,1);}
    100% {width:37%}
}
@keyframes stack4{
    0% {width:0;color:rgba(255,255,255,0);}
    40% {color:rgba(255,255,255,1);}
    100% {width:24%}
}
@keyframes stack5{
    0% {width:0;color:rgba(255,255,255,0);}
    40% {color:rgba(255,255,255,1);}
    100% {width:8%}
}

</style>