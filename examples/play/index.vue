<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-date-picker
      v-model="value1"
      value-format="yyyy-MM-dd HH:mm"
                  format="yyyy-MM-dd HH:mm"
                  type="datetime"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!',
        value1: '2019-08-14T13:49:00'
      };
    }
  };
</script>
