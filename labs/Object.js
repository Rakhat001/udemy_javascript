const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};


function showProgrammingLangs(plan) {
    let programmingLangs = personalPlanPeter.skills.programmingLangs;
    let res = '';
    for(language  in programmingLangs){
        res += `Язык ${language} изучен на ${programmingLangs[language]} \n`;
    }
    console.log(res);
}

showProgrammingLangs(personalPlanPeter);