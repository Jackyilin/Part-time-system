<template>
  <div>
    <Row class="container" v-for="item in employerList"  :key="item.Objectid">
      <Row>
        <Col span="5">
          <h2>
            岗位：{{item.jobname}}
          </h2>
        </Col>
        <Col span="19">
          <h2>
            应聘者：{{item.name}}
          </h2>
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="7">
          学校：{{item.shool}}
        </Col>
        <Col span="7">
          学院：{{item.academy}}
        </Col>
        <Col span="10">
          联系电话：{{item.tell}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>兼职经历：</span>
        </Col>
        <Col span="22">
          {{item.parttime}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>获得荣誉：</span>
        </Col>
        <Col span="22">
          {{item.honor}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>实习经历：</span>
        </Col>
        <Col span="22">
          {{item.exercitation}}
        </Col>
      </Row>
      <Row style="margin-top: 15px;">
        <Button type="primary" @click="likes(item.Objectid)" style="margin-right: 40px;" :ref="item.Objectid">拒绝</Button>
        <Button type="primary" @click="deliver(item.Objectid)">同意应聘</Button>
      </Row>
    </Row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      employerList: [
        {
          jobname: '初中家庭辅导老师',
          name: '小明',
          shool: '黑龙江大学',
          academy: '新闻传播学院',
          tell: '18845898833',
          parttime: '2017/6-2017-10: 飞翔教育初中生家庭学业辅导老师',
          honor: '一等奖学金',
          exercitation: '2018/4-2018/7: 湖南卫视电视编导'
        },
        {
          jobname: '初中家庭辅导老师',
          name: '小明',
          shool: '黑龙江大学',
          academy: '新闻传播学院',
          tell: '18845898833',
          parttime: '2017/6-2017-10: 飞翔教育初中生家庭学业辅导老师',
          honor: '一等奖学金',
          exercitation: '2018/4-2018/7: 湖南卫视电视编导'
        },
        {
          jobname: '初中家庭辅导老师',
          name: '小明',
          shool: '黑龙江大学',
          academy: '新闻传播学院',
          tell: '18845898833',
          parttime: '2017/6-2017-10: 飞翔教育初中生家庭学业辅导老师',
          honor: '一等奖学金',
          exercitation: '2018/4-2018/7: 湖南卫视电视编导'
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
    background: #c3c3c3;
  }
  .unit{

  }
</style>


