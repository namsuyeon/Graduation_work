<template>        
    <div class="body">
        <div class="display">
            <div class="background">

                <h1> 예고편 & 스틸컷 </h1>

                <div class="slidebox">
                    <input type="radio" name="slide" id="slide01" checked>
                    <input type="radio" name="slide" id="slide02">
                    <input type="radio" name="slide" id="slide03">
                    <input type="radio" name="slide" id="slide04">
                    <ul class="slidelist">
                        <li class="slideitem">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dm3gThvkgto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                        <li class="slideitem">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VOdDMmSjle0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                        <li class="slideitem">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3V-SWIEEM_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                        <li class="slideitem">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-CvOFYB-w08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                        
                    </ul>
                    <div class="slide-control">
                        <div class="control01">
                            <label for="slide04" class="prev"></label>
                            <label for="slide02" class="next"></label>
                        </div>
                        <div class="control02">
                            <label for="slide01" class="prev"></label>
                            <label for="slide03" class="next"></label>
                        </div>
                        <div class="control03">
                            <label for="slide02" class="prev"></label>
                            <label for="slide04" class="next"></label>
                        </div>
                        <div class="control04">
                            <label for="slide03" class="prev"></label>
                            <label for="slide01" class="next"></label>
                        </div>
                    </div>
                </div>

                <br><br><hr width = "80%" size="14"><br><br>

                <div class="stillcutBOX">
                    <div class="stillcuts">
                        <img class="cut1" src="../assets/moga_stillcut1.jpg" alt="">
                        <img class="cut2" src="../assets/moga_stillcut2.jpg" alt="">
                        <img class="cut3" src="../assets/moga_stillcut3.jpg" alt="">
                        
                        <img class="cut4" src="../assets/moga_stillcut4.jpg" alt="">
                        <img class="cut5" src="../assets/moga_stillcut5.jpg" alt="">
                        <img class="cut6" src="../assets/moga_stillcut6.jpg" alt="">

                        <img class="cut7" src="../assets/moga_stillcut7.jpg" alt="">
                        <img class="cut8" src="../assets/moga_stillcut8.jpg" alt="">
                        <img class="cut9" src="../assets/moga_stillcut9.jpg" alt="">

                        <img class="cut10" src="../assets/moga_stillcut10.jpg" alt="">
                        <img class="cut11" src="../assets/moga_stillcut11.jpg" alt="">
                        <img class="cut12" src="../assets/moga_stillcut12.jpg" alt="">

                        <img class="cut13" src="../assets/moga_stillcut13.jpg" alt="">
                        <img class="cut14" src="../assets/moga_stillcut14.jpg" alt="">
                        <img class="cut15" src="../assets/moga_stillcut15.jpg" alt="">
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding : 1% 12%;
    
}

.background {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 100%;
    padding: 3% 4%;
    flex-direction: column; 
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}

h1 {color:#333;
margin: 0% 0% 2% 0%;
font-size:30px}
hr{background-color: rgb(175, 175, 175);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 1ex;
    overflow: hidden;}
* {margin:0;padding:0;box-sizing:border-box;}
ul, li {list-style:none;}


.slidebox {max-width:700px;margin:0 auto;position:relative;}
.slidebox .slidelist {position:relative;white-space:nowrap;font-size:0;overflow:hidden;}
.slidebox .slidelist .slideitem {position:relative;display:inline-block;vertical-align:middle;background-color:#fff;width:100%;transition:all 1s;}
.slidebox .slidelist .slideitem > a {display:block;width:auto;position:relative;}
.slidebox .slidelist .slideitem > a iframe {max-width:100%;}

.slidebox .slide-control [class*="control"] label {position:absolute;z-index:10;top:50%;transform:translateY(-50%);padding:20px;border-radius:50%;cursor:pointer;}
.slidebox .slide-control [class*="control"] label.prev {left:-30px;background:#333 url('../assets/left-arrow.png') center center / 50% no-repeat;}
.slidebox .slide-control [class*="control"] label.next {right:-30px;background:#333 url('../assets/right-arrow.png') center center / 50% no-repeat;}

[name="slide"] {display:none;}
#slide01:checked ~ .slidelist .slideitem {left:0;}
#slide02:checked ~ .slidelist .slideitem {left:-100%;}
#slide03:checked ~ .slidelist .slideitem {left:-200%;}
#slide04:checked ~ .slidelist .slideitem {left:-300%;}

.slide-control [class*="control"] {display:none;}
#slide01:checked ~ .slide-control .control01 {display:block;}
#slide02:checked ~ .slide-control .control02 {display:block;}
#slide03:checked ~ .slide-control .control03 {display:block;}
#slide04:checked ~ .slide-control .control04 {display:block;}


.stillcutBOX{
    display: flex;
    flex-direction: row;
    justify-content: center; 
    /* 스틸컷들 가운데정렬 */
}


img {
        max-width: 100%;
        display: block;
        border: 1px solid rgb(255, 255, 255);
        border-radius: 2ex;
        overflow: hidden;
        width: 250px;
        margin: 0px auto;
      }

.stillcuts {
        display: flex;
        max-width: 80%;
        flex-wrap: wrap;
        
      }


.cut1 {transition: all 0.2s linear;}
.cut1:hover {transform: scale(1.4);}
.cut2 {transition: all 0.2s linear;}
.cut2:hover {transform: scale(1.4);}
.cut3 {transition: all 0.2s linear;}
.cut3:hover {transform: scale(1.4);}
.cut4 {transition: all 0.2s linear;}
.cut4:hover {transform: scale(1.4);}
.cut5 {transition: all 0.2s linear;}
.cut5:hover {transform: scale(1.4);}
.cut6 {transition: all 0.2s linear;}
.cut6:hover {transform: scale(1.4);}
.cut7 {transition: all 0.2s linear;}
.cut7:hover {transform: scale(1.4);}
.cut8 {transition: all 0.2s linear;}
.cut8:hover {transform: scale(1.4);}
.cut9 {transition: all 0.2s linear;}
.cut9:hover {transform: scale(1.4);}
.cut10 {transition: all 0.2s linear;}
.cut10:hover {transform: scale(1.4);}
.cut11 {transition: all 0.2s linear;}
.cut11:hover {transform: scale(1.4);}
.cut12 {transition: all 0.2s linear;}
.cut12:hover {transform: scale(1.4);}
.cut13 {transition: all 0.2s linear;}
.cut13:hover {transform: scale(1.4);}
.cut14 {transition: all 0.2s linear;}
.cut14:hover {transform: scale(1.4);}
.cut15 {transition: all 0.2s linear;}
.cut15:hover {transform: scale(1.4);}
</style>