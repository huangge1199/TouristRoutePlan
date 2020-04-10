<template>
  <div>
    <div>
      <div>
        dsffffffffffffffffffffff
        <!-- <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          size="small"
        >
          <el-form-item label="手机号">
            <el-input
              autocomplete
              v-model="mobile"
              placeholder="请输手机号"
            ></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"
              v-model="password"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="logon(formInline)"
              >登录</el-button
            >
          </el-form-item>
        </el-form> -->
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/net/request";
import api from "@/net/api";

export default {
  data() {
    return {
      formInline: {},
      mobile: "",
      password: ""
    };
  },
  methods: {
    //登录
    logon() {
      if (this.mobile == null || this.mobile == "") {
        alert("请输入手机号");
        return false;
      }
      if (this.password == null || this.password == "") {
        alert("请输入密码");
        return false;
      }
      request({
        url: api.goods.logon,
        method: "post",
        data: {
          mobile: this.mobile,
          password: this.password
        }
      }).then(res => {
        if (res.data.code == 0) {
          alert("登录成功");
        } else {
          alert(res.data.data);
        }
      });
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
xrequired:before {
  content: "* ";

  color: red;
}
</style>
