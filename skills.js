let skills = document.querySelectorAll('.skill');

for(skill of skills){
    let value = parseInt(skill.querySelector('.number span').innerText);
    let valueStrokeDashoffset = 314 - (314 * (value / 100));
    skill.querySelector('circle').style["stroke-dashoffset"] = valueStrokeDashoffset;
}