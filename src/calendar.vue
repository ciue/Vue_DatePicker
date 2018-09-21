<template>
    <section class="calendar-box">
      <div class="top-btn">
        <div @click="changeDate">{{text}}</div>
        <div @click="changeMonth">上个月</div>
        <div @click="changeMonth">下个月</div>
      </div>


      <div class="week-range">
        <span v-for="item of weekRange" :key="item.id">{{item}}</span>
      </div>

      <div class="date-range">
        <span 
          :class="[{today : item.isToday}, {otherMonth : !item.isCurrM}]" 
          v-for="item of list" :key="item.id">{{item.num}}
        </span>
      </div>
    </section>
</template>

<script>
import calendar from "./utils.js";

let aaa = calendar.getList(new Date());
console.log(aaa);

export default {
  data: function() {
    return {
      list: [],
      text: undefined,
    };
  },
  props: {
    weekRange: {
      type: Array,
      default: () => ["一", "二", "三", "四", "五", "六", "日"]
    }
  },

  created: function() {
    this.init();
  },

  methods: {
    init() {
      this.list = calendar.getList(new Date());
      this.text = calendar.dateFormate(new Date())
    },
    changeDate() {},
    changeMonth() {}
  }
};
</script>


<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
$today: #4285f4;
$hover: #e0e0e0;
$otherM: #757575;
$otherM-hover: #f5f5f5;


.calendar-box {
  width: 100%;
  max-width: 480px;
  margin: auto;
  border: 1px solid;
  
  .top-btn {
    display: flex;

    div {
      flex: 1
    }
  }

  .week-range {
    display: flex;
    justify-content: space-between;
    text-align: center;

    span {
      flex: 1
    }
  }

  .date-range {
    margin-top: 1vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;

    span {
      height:14%;
      flex-basis: 14%;
      border-radius: 10% / 50%;
      cursor: pointer;
    }

    span:hover{
      background-color: $hover;
    }

     .today {
      background-color: $today !important;
    }

    .otherMonth { 
      color: $otherM;
    }

    .otherMonth:hover {
      background-color: $otherM-hover;
    }
  }
}





</style>