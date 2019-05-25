<template>
    <div>
      <Row class="container" v-for="item in jobList">
      <h2>
        {{item.name}}
      </h2>
      <Row class="big-text">
        <Col span="2">
          <span>工作内容：</span>
        </Col>
        <Col span="20">
          {{item.content}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>任职要求：</span>
        </Col>
        <Col span="20">
          {{item.request}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>工作地点：</span>
        </Col>
        <Col span="20">
          {{item.addr}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>工作时间：</span>
        </Col>
        <Col span="20">
          {{item.time}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>薪酬：</span>
        </Col>
        <Col span="20">
          {{item.salary}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          招聘单位：
        </Col>
        <Col span="22">
          {{item.unitname}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span class="unit">单位简介：</span>
        </Col>
        <Col span="22">
          {{item.introduction}}
        </Col>
      </Row>
    </Row>
    </div>
</template>
<script>
export default {

}
</script>
<style>

</style>


