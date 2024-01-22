let moon=document.querySelector('.moon')
let body=document.querySelector('body')
let header=document.querySelector('header')
let socialIcons=document.querySelectorAll('.socialIcon')
let personalPic=document.querySelector('.personalPic')
let clouds=document.querySelectorAll('.cloud')
let stars=document.querySelectorAll('.star')
let themeType=document.querySelector('.themeType')

moon.onclick=(e)=>{
    body.classList.toggle('lightBody')
    // header.classList.toggle("lightHeader");

    socialIcons.forEach((icon)=>{
        if(body.classList[0]=='lightBody'){
            icon.src=replaceLightWithDark(icon.src)
        }else{
            icon.src=replaceDarkWithLight(icon.src)
        }
    })
    //sun to moon and reverse
    moon.classList.toggle('hide-element')
    moon.classList.toggle('sun')
    if(moon.classList[2]==='sun'){
        personalPic.style=`opacity:0.7;`
        moon.style="animation:glowingSun infinite 5s;"
        themeType.innerHTML=`
        <img src='./images/socials/dark/arrowCurved.svg'> CHANGE TO NIGHT`
        clouds.forEach(cloud=>{
            cloud.style.display='block'
        })
        stars.forEach(star=>{
            star.style.display='none'
        })
    }else{
        personalPic.style=`animation: darker 5s infinite;
                            opacity:0.25;`
        moon.style=`animation:glowing infinite 5s;`
        themeType.innerHTML=`
        <img src='./images/socials/light/arrowCurved.svg'> CHANGE TO DAY`
        clouds.forEach(cloud=>{
            cloud.style.display='none'
        })
        stars.forEach(star=>{
            star.style.display='block'
        })
    }
}


function replaceLightWithDark(str) {
    return str.replace(/light/g, 'dark');
}

function replaceDarkWithLight(str) {
    return str.replace(/dark/g, 'light');
}

//Navbar functionality

let menu=document.querySelector('.menu')
let menuSpans=document.querySelectorAll('.menu span')
let headerListing=document.querySelector('.headerListing')
let menuCircle=document.querySelector('.menuCircle')

menu.onclick=()=>{
    console.log('hi')
    menuSpans[0].classList.toggle('s1')
    menuSpans[1].classList.toggle('s2')
    menuSpans[2].classList.toggle('s3')

    headerListing.classList.toggle('popup')
    menuCircle.classList.toggle('menuCircleClick')
}

///////////////////////About section's Functionality//////////////////

let skill=document.querySelectorAll('.skill')
let skillSelect=document.querySelector('.skillSelect')
let moveClasses=['sk1','sk2','sk3','sk4','sk5','sk6','sk7']

skillSelect.onmouseover=()=>{
    for(let i=0;i<skill.length;i++){
        // skill[i].classList.toggle(moveClasses[i])
            skill[i].classList.remove('scaleToHide')
    }
}
skillSelect.onmouseout=()=>{
    skill.forEach((skills,index)=>{
        skills.classList.add('scaleToHide')
    })
}

let slider=document.querySelector('.slider')
let sliderDotsContainer=document.querySelector('.sliderDots.about')
let sliderElements=document.querySelectorAll('.mainContent.about')
let slideNext=document.querySelector('.slideRight.about')
let slidePrev=document.querySelector('.slideLeft.about')

sliderElements.forEach((ele,index)=>{
    let dot=document.createElement('span')
    sliderDotsContainer.appendChild(dot)
})
let sliderDots=document.querySelectorAll('.sliderDots.about span')
sliderDots[0].classList.add('activeDot')


slideNext.onclick=(e)=>{
    showNextSliderElement(sliderElements,sliderDots)
}
slidePrev.onclick=(e)=>{
    showPrevSliderElement(sliderElements,sliderDots)
}

function showNextSliderElement(elements,dots){
    for(let i=0;i<elements.length;i++){
        if(elements[i].classList.contains('active')){
            elements[i].classList.remove('active')
            dots[i].classList.remove('activeDot')
            if(i===(elements.length-1)){
                elements[0].classList.add('active')
                dots[0].classList.add('activeDot')
            }else{
                elements[i+1].classList.add('active')
                dots[i+1].classList.add('activeDot')
            }
            break
        }
    }
}

function showPrevSliderElement(elements,dots){

    for(let i=0;i<elements.length;i++){
        if(elements[i].classList.contains('active')){
            elements[i].classList.remove('active')
            dots[i].classList.remove('activeDot')
            if(i===(0)){
                elements[elements.length-1].classList.add('active')
                dots[elements.length-1].classList.add('activeDot')
            }else{
                elements[i-1].classList.add('active')
                dots[i-1].classList.add('activeDot')
            }
            break
        }
    }
}

//////////////////Projects Section's Functionality////////////////

let projectsSliederElements= document.querySelectorAll('.projectsContainer .sliderElement')
let sliderDotsContainerProjects= document.querySelector('.sliderDots.projects')
let slideNextProjects=document.querySelector('.slideRight.projects')
let slidePrevProjects=document.querySelector('.slideLeft.projects')

projectsSliederElements.forEach((ele,index)=>{
    let dot=document.createElement('span')
    sliderDotsContainerProjects.appendChild(dot)
})
let sliderDotsProjects=document.querySelectorAll('.sliderDots.projects span')
sliderDotsProjects[0].classList.add('activeDot')

slideNextProjects.onclick=(e)=>{
    showNextSliderElement(projectsSliederElements,sliderDotsProjects)
}
slidePrevProjects.onclick=(e)=>{
    showPrevSliderElement(projectsSliederElements,sliderDotsProjects)
}