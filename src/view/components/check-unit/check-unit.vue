<template>
    <div>
      <Row class="container" v-for="item in unitList"  :key="item.Objectid">
        <Row>
          <Col span="22">
          <h2>
            招聘单位名称：{{item.name}}
          </h2>
          </Col>
        </Row>
        <Row class="big-text">
          <Col span="2">
            <span>社会信用代码：</span>
          </Col>
          <Col span="6">
            {{item.companyid}}
          </Col>
          <Col span="1">
            地址：
          </Col>
          <Col span="8">
            {{item.addr}}
          </Col>
          <Col span="2">
            联系电话：
          </Col>
          <Col span="5">
            {{item.tell}}
          </Col>
        </Row>
        <Row class="big-text">
          <Col span="1">
            <span>法人：</span>
          </Col>
          <Col span="7">
            {{item.stander}}
          </Col>
          <Col span="2">
            身份证号码：
          </Col>
          <Col span="7">
            {{item.id}}
          </Col>
        </Row>
        <Row class="big-text">
          <Col span="2">
            <span>营业执照：</span>
          </Col>
          <Col span="20">
            <img :src="item.workimg" alt="" style="height: 300px;">
          </Col>
        </Row>
        <Row style="margin-top: 15px;">
          <Col span="2"> </Col>
          <Col span="22">
            <Button type="primary" @click="likes(item._id, item.unitid)" style="margin-right: 40px;" :ref="item.Objectid">通过</Button>
            <Button type="primary" @click="deliver($event, item._id, item.unitid)">驳回</Button>
          </Col>
        </Row>
      </Row>
  </div>
</template>

<script>
export default {
    data(){
      return {
        unitList: [
          {
            name: "飞翔教育",
            companyid: '5888888888888',
            addr: '哈尔滨南岗区学府路74号',
            tell: '0759-77256025',
            stander: '陈明',
            id: '230812345678912345',
            workimg: 'http://www.aidaijia.com/img/img1.jpg'
            // workimg: '@/assets/images/yingye.jpg'
          },
          {
            name: "嘉怡超市",
            companyid: '5666666666666',
            addr: '哈尔滨道里区前进路74号',
            tell: '0759-56485225',
            stander: '李力',
            id: '230812345678912345',
            workimg: 'http://www.aidaijia.com/img/img1.jpg'
            // workimg: '@/assets/images/yingye.jpg'
          }
        ]
      }
    }
}
</script>

<style scoped>
  .container{
    border: 1px solid #c3c3c3;
    padding: 20px;
    margin-top: 8px;
    position: relative;
  }
  /* .reject{
    position: absolute;
    right: 0;
    top: 0;
  } */
  .big-text{
    font-size: 13px;
    margin-top: 8px;
    font-weight: 800;
  }
  .active{
    background-color: #c3c3c3;
    border-color: #c3c3c3;
  }
</style>

