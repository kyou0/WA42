<template>
  <div class="card">
    <div class="row">
      <div class="col s3 image">
        <img src="http://placehold.it/300x300" class="responsive-img" />
      </div>
      <div class="col s9 content">
        <ul>
          <li class="left"><i class="material-icons left">business</i>ホテル名</li>
          <li class="left"><i class="material-icons left">payment</i>10000円〜</li>
        </ul>
        <p class="clearfix">プラン名</p>
        <a href="#" class="btn btn-block blue">地図で確認する</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .card .row {
    margin: 0 -0.75rem;
  }
  .card .row img.responsive-img {
    vertical-align: bottom;
    height: 100%;
    max-width: none;
  }
  .card .row .image {
    overflow: hidden;
  }
  .card .row .content {
    padding: 10px;
    padding-right: 25px;
  }
  .card .row ul {
    margin: 0;
    overflow: hidden;
  }
  .card .row ul li {
    margin-left: 10px;
  }
  .card .row ul li:first-child {
    margin-left: 0px;
  }
  .card .row ul i.left {
    margin-left: 8px;
  }

</style>