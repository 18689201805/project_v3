<template>
  <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="请选择婚期"
      >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value1:""
    }
  }
}
</script>

<style>
.el-input__inner{
    width:16rem !important;
    height:2rem !important;
    font-size:1rem !important;
    margin-top:0.5rem !important;
    margin-left:0.2rem !important;
    background-color:#000 !important;
    color:#eee !important;
    border-radius: 2px !important;
    border:1px solid #000 !important;  
}
.el-input__inner:hover{
  border-color:#000;
}
</style>