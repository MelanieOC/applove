var allFigures=[{project:"TAYMAN GROUP", alt:"tayman"}, {project:"NALIA ORGANICS", alt:"nalia"},
                {project:"BRASS COQ", alt:"brass"},{project:"SUNGENRE", alt:"sungenre"},
                {project:"LIVING BOTANICS", alt:"living"},{project:"FOAM KING", alt:"foam"},
                {project:"VOLITION", alt:"volition"},{project:"INK", alt:"ink"},
                {project:"GILKON", alt:"gilkon"},{project:"OUTS APPLES", alt:"apples"},
                {project:"SHERWOOD", alt:"sherwood"},{project:"PLATINUM", alt:"platinum"}];


function WorkSection(figure){
    this.allFigures=figure;
    this.addImages=function(){
      this.figures.push({
        project:project,
        alt:alt
      })
    };
}

var figures=new WorkSection(allFigures);
