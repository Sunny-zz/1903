<template>
  <div>
    <div>homework 轮播图</div>
    <div v-if="!imgArr.length">等一哈</div>
    <div v-else class="wrap">
      <!-- 页面刚进来的时候图片显示第一张 -->
      <!-- 如何找到第几张图片 -->
      <!-- :class="index===0?'img active':'img'" -->
      <!-- :class="{img: true,active: index===0}" -->
      <img
        :class="['img',index=== activeNum ?'active':'']"
        v-for="(img,index) in imgArr"
        :src="img.src"
        alt
        :key="img.id"
      >
      <div @click="prev" class="prev"></div>
      <div @click="next" class="next">></div>
      <ul class="list">
        <!-- 对象的属性名不能加中线 加了就得用引号引上 -->
        <!-- 点击(划过) li 只要能获取对应的索引值 -->
        <!-- 事件的传参    @click=xxx(实参)  对应的 methods 里面的方法需要定义形参 -->
        <!-- 划入  mouseenter    划出  mouseleave -->
        <li
          :class="{'btn-active':index === activeNum}"
          @mouseenter="change(index)"
          v-for="(img,index) in imgArr"
          :key="img.id"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
// 把图片当作模块导入 去使用导入的变量代表这个模块
// import pic1 from "./assets/1.jpg";
export default {
  name: "app",
  data() {
    return {
      imgArr: [
        {
          id: "asd12",
          src:
            "https://img1.360buyimg.com/pop/s590x470_jfs/t1/74968/5/2279/89229/5d099f35Ebe5a520b/087f15f48ca7ae85.jpg!q90!cc_590x470.webp"
        },
        {
          id: "asd45",
          src:
            "https://img1.360buyimg.com/da/s590x470_jfs/t1/36245/31/3760/74214/5cb977faE395fad2a/12fb585482d10d93.jpg!q90!cc_590x470.webp"
        },
        {
          id: "asd78",
          src:
            "https://imgcps.jd.com/ling/7758131/5qCh5Zut5a625bGF5ZiJ5bm05Y2O/5a2m55Sf5Lu35L2O6IezOS45/t-5bf3e19274deafaac430e806/dd4e8ddb.jpg"
        },
        {
          id: "a3412",
          src:
            "https://img1.360buyimg.com/da/s590x470_jfs/t1/41562/26/5842/75482/5cf74d86Ef511239a/10bbe3159740bf0b.jpg!q90!cc_590x470.webp"
        }
      ],
      activeNum: 0
    };
  },
  // vue 组件内 script 内的 this 指的就是这个组件，this 下有哪些属性:  data 函数内返回值对象下的属性，methods 对象内的属性

  methods: {
    log() {
      console.log("xxxxxxx");
    },
    next() {
      // 修改 data  ---  activeNum
      this.activeNum++; //this.activeNum = this.activeNum*1 + 1
      if (this.activeNum >= this.imgArr.length) {
        this.activeNum = 0;
      }
      this.log();
    },
    prev() {
      this.activeNum--;
      if (this.activeNum < 0) {
        this.activeNum = this.imgArr.length - 1;
      }
    },
    change(ind) {
      // 只要能获取到 li 内的 index
      console.log(ind);
      this.activeNum = ind;
    }
  }
};
</script>

<style>
.wrap {
  width: 590px;
  height: 470px;
  position: relative;
  margin: 100px auto;
}
.wrap .img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s;
}
.wrap .img.active {
  z-index: 1;
  opacity: 1;
}
.wrap .list {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  z-index: 2;
  margin: 0;
  padding: 0;
  display: flex;
}
.wrap .list li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
}
.wrap .list li.btn-active {
  background-color: teal;
}
.wrap .list li:last-child {
  margin-right: 0;
}
.wrap .next,
.wrap .prev {
  width: 50px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  user-select: none;
}
.wrap .next {
  right: 0;
}
.wrap .prev {
  left: 0;
}
</style>



