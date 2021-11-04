<template>
  <div class="body">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
    </head>
    <div class="display">
      <div class="background">
        <div class="display1">
          <div class="poster">
            <!-- (왼쪽 디스플레이,) 선택한 영화 포스터(546x752) 출력 -->
            <img src="../assets/poster0.jpg" class="poster_0"/>
          </div>

          <div class="movie_info">
            <!-- (오른쪽 디스플레이) -->
              <div class="select_movie">
                <!-- 영화선택버튼 -->
                <span style="color:rgb(255, 255, 255)">Pick a movie </span>
                <select @change="setMoviePk($event)">
                  <option>select movie</option>
                  <option v-for="(movie, i) in movies" :key="movie.pk" :value="i">{{movie.movie_name}}</option>
                </select>
              </div>
              <div class="select_seat_list">
                <!-- 좌석색깔 설명 -->
                <div
                  style="padding: 3px 10px 3px 3px;"
                  class="select_seat_list1"
                >
                  <i class="fas fa-square">Avaliable</i>
                </div>
                <div
                  style="padding: 3px 10px 3px 3px;"
                  class="select_seat_list2"
                >
                  <i class="fas fa-square">Selected</i>
                </div>
                <div
                  style="padding: 3px 10px 3px 3px;"
                  class="select_seat_list3"
                >
                  <i class="fas fa-square">Occupied</i>
                </div>
              </div>
              <!-- 스크린 -->
              <div id="movie_info3"></div>
              <!-- 좌석 -->
              <div class="select_seat">
                <div
                  class="select_seat_line"
                  v-for="seat in this.seats"
                  :key="seat"
                >
                  <div
                    style="padding: 3px 10px 3px 3px;"
                    :class="check(seat + 1) ? 'select_seat_list1' : 'select_seat_list3'"
                    :id="seat + 1"
                  >
                    <i 
                    v-on:click="select" class="fas fa-square" :id="seat + 1"></i>
                  </div>
                  <div class="select_seat_line_center">
                    <div
                      style="padding: 3px 10px 3px 3px;"
                      :class="check(seat + 2) ? 'select_seat_list1' : 'select_seat_list3'"
                      :id="seat + 2"
                    >
                      <i 
                      v-on:click="select" class="fas fa-square" :id="seat + 2"></i>
                    </div>
                    <div
                      style="padding: 3px 10px 3px 3px;"
                      :class="check(seat + 3) ? 'select_seat_list1' : 'select_seat_list3'"
                      :id="seat + 3"
                    >
                      <i 
                      v-on:click="select" class="fas fa-square" :id="seat + 3"></i>
                    </div>
                    <div
                      style="padding: 3px 10px 3px 3px;"
                     :class="check(seat + 4) ? 'select_seat_list1' : 'select_seat_list3'"
                      :id="seat + 4" 
                    >
                      <i 
                      v-on:click="select" class="fas fa-square" :id="seat + 4"></i>
                    </div>
                  </div>
                  <div
                    style="padding: 3px 10px 3px 3px;"
                    :class="check(seat + 5) ? 'select_seat_list1' : 'select_seat_list3'"
                    :id="seat + 5"
                  >
                    <i 
                    v-on:click="select" class="fas fa-square" :id="seat + 5"></i>
                  </div>
                </div>
              </div>
              <p>you have selected ({{ this.selectSeat.length }})</p>
              <button v-on:click="ticketin" :id="1">예매하기</button>
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
  data: function() {
    return {
      userid: "",
      password: "",
      seats: ["A", "B", "C", "D", "E"],
      selectSeat: [],
      moviePk: 1,
      movies: [],
      movieSeats: [],
      currentMovie: 0,
    };
  },
  mounted() {
      this.$http
        .get("/api/movie/1")
        .then(res => {
          this.movies = res.data.message.result;
          console.log(res.data.message.result);
        })
        .catch(err => {
          alert(err);
        });
  },
  methods: {
    select: function(event) {
      if(!this.check(event.target.id)) return
      this.selectSeat.push(event.target);
      const seat = this.selectSeat.length;
      this.selectSeat.map((current, key) => {
        if (current.id === event.target.id && key !== seat - 1) {
          this.selectSeat[key].style.color = "";
          this.selectSeat.splice(key, 1);
          this.selectSeat.splice(-1, 1);
        } else {
          current.style.color = "rgb(190, 59, 49)";
        }
      });
    },
    getMovies: function() {
      this.$http
        .get("/api/movie/1")
        .then(res => {
          this.movies = res.data.message.result;
          this.movieSeats = JSON.parse(this.movies[this.currentMovie].seat)
          console.log(res.data.message.result);
        })
        .catch(err => {
          alert(err);
        });
    },
    setMoviePk: function(event) {
      this.currentMovie = event.target.value;
      this.moviePk = this.movies[event.target.value].pk;
      this.movieSeats = JSON.parse(this.movies[event.target.value].seat)
    },
    check: function(a) {
      if(this.movieSeats.length <= 0) return false;
      function chatToNumber(seat) {
        const first = (seat.charCodeAt(0) - 65) * 5;
        const second = Number(seat.slice(1));
        return first + second
      }
      const num = chatToNumber(a);
      if(this.movieSeats[num-1] != 0) return false;
      else return true
    },
    ticketin: function() {
      const seatNum = [];
      this.selectSeat.map(seat => seatNum.push(seat.id));
      this.$http
        .post("/api/ticketingmovie", {
          userPk: this.$store.state.userPk, //userPk
          seatNum: seatNum,
          moviePk: this.moviePk, //moviePk
        })
        .then(res => {
          this.getMovies()
          this.selectSeat.forEach((current, key) => {
            if (current.id === event.target.id && key !== seat - 1) {
              this.selectSeat[key].style.color = "";
              this.selectSeat.splice(key, 1);
              this.selectSeat.splice(-1, 1);
            } else {
              current.style.color = "rgb(156, 156, 156)";
            }
          });
          this.selectSeat = []
          alert(res.data.message);
        })
        .catch(err => {
          alert(err);
        });
    },
  },
};
</script>


<style scoped>
#movie_info3{
    
height: 0;
width: 100%;
border-top: 70px solid rgb(211, 211, 211);
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-radius: 4px;
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
  padding: 1% 12%;
}
.display1 {
  width: 100%;
  /* 가로길이기준, 플렉스박스의경우 세로는 내용물길이만큼 늘어남 */
  padding: 3% 4%;
  display: flex;
}
.poster {
  width: 50%;
  height: auto;
  border-radius: 3%;
  overflow: hidden;
  margin-right: 5%;
}
.poster_0 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 60%;
}

.select_movie {
  width: 400px;
  height: 30px;
  background-color: rgb(201, 52, 52);
  padding: 5px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 1ex;
  overflow: hidden;
}

/* 좌석색깔설명 배치 */
.select_seat_list {
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.2rem;
}
.select_seat_list1 i {
  color: rgb(247, 186, 54);
}
.select_seat_list2 i {
  color: rgb(190, 59, 49);
}
.select_seat_list3 i {
  color: rgb(156, 156, 156);
}

.select_seat {
  width: 412px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
}

.select_seat_line {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select_seat_line_center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

@media screen and (max-width: 1200px) {
  .movie_info {
    width: 500px;
  }
  .poster {
    display: none;
  }
}
</style>
