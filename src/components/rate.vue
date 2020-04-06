<template>
  <div class="rate" :class="{'disabled':disabled}">
    <i
      v-for="i in 5"
      class="fa"
      @mouseenter="disabled?'':curScore=i"
      @mouseleave="disabled?'':curScore=''"
      @click="disabled?'':setScore(i)"
      :class="getClass(i)"
    ></i>

    <span v-if="showText" class="text">{{curScore||score}}分</span>
  </div>
</template>

<script>
export default {
  name: "MyRate",
  props: {
    score: {
      type: Number,
      default: 0
      //required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      curScore: "",
      decimal: ""
    };
  },
  created: function() {
    this.getDecimal();
  },
  methods: {
    getClass(i) {
      if (this.curScore === "") {
        if (i <= this.score) {
          return "fa-star";
        } else {
          return i - this.score < 1 ? "fa-star-half-o" : "fa-star";
        }
      } else {
        return i <= this.curScore ? "fa-star" : "fa-star-o";
      }
    },
    getDecimal() {
      this.decimal = Number(this.score * 100 - Math.floor(this.score) * 100);
    },
    setScore(i) {
      this.$emit("update:score", i); //使用`.sync`修饰符，对score 进行“双向绑定
    }
  }
};
</script>
<style lang="scss">
.fa-star {
  color: rgb(226, 226, 0);
}
.fa-star-half-o {
  color: rgb(226, 226, 0);
}
.fa-star-o {
  color: rgb(173, 173, 173);
}
</style>