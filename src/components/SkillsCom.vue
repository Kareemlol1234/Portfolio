<template>
  <link rel="stylesheet" href="css/Skills.css">
  <div class="Skills">
    <h1>Skills</h1>
    <div class="container">
      <div class="bars">
        <label for="Html">Html</label>
        <div id="Html" style="height: 35px;" class="progress" role="progressbar bar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-danger " style="width: 90%">90%</div>
        </div>
        <label for="Css">Css</label>
        <div id="Css" style="height: 35px;" class="progress" role="progressbar bar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-info " style="width: 75%">75%</div>
        </div>
        <label for="JavaScript">JavaScript</label>
        <div id="JavaScript" style="height: 35px;" class="progress" role="progressbar bar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning " style="width: 80%">80%</div>
        </div>
        <label for="Vue">Vue</label>
        <div id="Vue" style="height: 35px;" class="progress bar" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-success " style="width: 80%">80%</div>
        </div>
        <label for="Bootstrap">Bootstrap</label>
        <div id="Bootstrap" style="height: 35px;" class="progress bar" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
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
