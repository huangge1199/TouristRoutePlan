<template>
  <div id="app">
    <el-container :style="'width:'+screenWidth+'px;height:'+screenHeight+'px;'">
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <el-menu :default-active="$route.path" background-color="#00142f"
            @select="handleSelect" text-color="#FFF" active-text-color="#FFD04B" :router="true">
            <el-menu-item :index="v.path" v-for="(v, i) in muneList" :key="i" @click="opening(v)"
              style="border-bottom-color:rgb(0, 20, 47)">
              <div :class="index === i ? 'open' : ''">
                <i :class="v.ioce"></i>
                <span slot="title">{{ v.name }}</span>
              </div>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        screenWidth: document.documentElement.clientWidth,
        screenHeight: document.documentElement.clientHeight,
        index: "",
        muneList: [{
            path: "/home",
            name: "首页",
            ioce: "el-icon-dessert"
          },
          {
            path: "/login",
            name: "用户登录",
            ioce: "el-icon-dessert"
          },
          {
            path: "/register",
            name: "用户注册",
            ioce: "el-icon-sugar"
          },
          {
            path: "/identity",
            name: "用户实名",
            ioce: "el-icon-receiving"
          },
          {
            path: "/goods",
            name: "货主发货",
            ioce: "el-icon-ice-cream"
          },
          {
            path: "/order",
            name: "成交单",
            ioce: "el-icon-grape"
          },
          {
            path: "/car",
            name: "司机发布空车",
            ioce: "el-icon-orange"
          },
          {
            path: "/invoice",
            name: "发票",
            ioce: "el-icon-cherry"
          },
          {
            path: "/msg",
            name: "推送",
            ioce: "el-icon-apple"
          },
          {
            path: "/sms",
            name: "短信下发",
            ioce: "el-icon-lollipop"
          }
        ]
      };
    },
    mounted() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.documentElement.clientWidth
          that.screenWidth = window.screenWidth;
          window.screenHeight = document.documentElement.clientHeight
          that.screenHeight = window.screenHeight;
        })()
      }
    },
    watch: {
      screenWidth(val) {
        if (!this.timer) {
          this.screenWidth = val - 30
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      },
      screenHeight(val) {
        if (!this.timer) {
          this.screenHeight = val - 35
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      }
    },
    methods: {
      inseteTopShow(val) {
        this.index = val;
      },
      handleSelect(key, keyPath) {
        this.keyPath = keyPath;
      },
      opening(val) {
        this.index = val.key;
      }
    }
  };

</script>

<style>
  .el-header {
    background-color: #00142f;
    color: #fff;
    line-height: 60px;
    width: 100%;
    padding: 0;
    top: 0;
  }

  .el-aside {
    width: 200px;
  }

  .el-footer {
    background-color: #00142f;
    color: #fff;
    line-height: 60px;
    width: 100%;
    bottom: 0;
  }

  .phono {
    position: absolute;
    width: 90px;
    top: 4px;
    left: 3%;
  }

  .el-menu {
    width: 90%;
    height: 100%;
    top: 0px;
    margin-top: 0px;

    .el-menu-item:first-child {
      margin-top: 60px;
    }
  }

  .el-menu-item {
    text-align: left;
    width: 100%;
  }

  .open {
    color: rgb(255, 208, 75);
    border-bottom-color: rgb(0, 20, 47);
  }

</style>
