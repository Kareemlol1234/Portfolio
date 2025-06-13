<template>
  <div class="Skills">
    <h1>Skills</h1>
    <div class="container">
      <div class="bars">
        <label for="Html">Html</label>
        <div id="Html" style="height: 30px;" class="progress" role="progressbar bar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-danger " style="width: 90%">90%</div>
        </div>
        <label for="Css">Css</label>
        <div id="Css" style="height: 30px;" class="progress" role="progressbar bar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-info " style="width: 75%">75%</div>
        </div>
        <label for="JavaScript">JavaScript</label>
        <div id="JavaScript" style="height: 30px;" class="progress" role="progressbar bar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning " style="width: 80%">80%</div>
        </div>
        <label for="Vue">Vue</label>
        <div id="Vue" style="height: 30px;" class="progress bar" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-success " style="width: 80%">80%</div>
        </div>
        <label for="Bootstrap">Bootstrap</label>
        <div id="Bootstrap" style="height: 30px;" class="progress bar" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-purple " style="width: 70%">70%</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
    name: "SkillsCom"
}
</script>

<style>
.Skills {
  width: 100%;
  margin: 180px 0;
}

.Skills h1 {
  text-align: center;
  margin-bottom: 50px;
}
.bars{
    padding-bottom: 50px;
}
.progress{
    margin-bottom: 30px;
    color: #000;
}
.progress-bar{
    font-size: 18px;
}
.bg-purple {
  background-color: rgb(174, 7, 174)  !important;
  color: white;
}



</style>