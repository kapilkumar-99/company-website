const teamPlus = document.getElementById('plus-sign-1');
const teamPara = document.getElementById('service-detail-1');
var teamDisplay = 0;

const professionalPlus = document.getElementById('plus-sign-2');
const professionalPara = document.getElementById('service-detail-2');
var professionalDisplay = 0;

const supportPlus = document.getElementById('plus-sign-3');
const supportPara = document.getElementById('service-detail-3');
var   supportDisplay = 0;

const faqArrow1 = document.getElementById('skill-faq-arrow-1');
const faqAnswer1 = document.getElementById('skill-faq-answer-1');
const skillQuestionArrow1 = document.getElementById('skill-faq-question-1');
var answerDisplay1 = 0;

const faqArrow2 = document.getElementById('skill-faq-arrow-2');
const faqAnswer2 = document.getElementById('skill-faq-answer-2');
const skillQuestionArrow2 = document.getElementById('skill-faq-question-2');
var answerDisplay2 = 0;

const faqArrow3 = document.getElementById('skill-faq-arrow-3');
const faqAnswer3 = document.getElementById('skill-faq-answer-3');
const skillQuestionArrow3 = document.getElementById('skill-faq-question-3');
var answerDisplay3 = 0;

const softwareProduct = document.getElementById('software-product');
const title1 = document.getElementById('title');
const productDescription1 = document.getElementById('product-description');
const learnMore1 = document.getElementById('learn-more');

const softwareProduct2 = document.getElementById('software-product-2');
const title2 = document.getElementById('title-2');
const productDescription2 = document.getElementById('product-description-2');
const learnMore2 = document.getElementById('learn-more-2');

const softwareProduct3 = document.getElementById('software-product-3');
const title3 = document.getElementById('title-3');
const productDescription3 = document.getElementById('product-description-3');
const learnMore3 = document.getElementById('learn-more-3');


const softwareProduct4 = document.getElementById('software-product-4');
const title4 = document.getElementById('title-4');
const productDescription4 = document.getElementById('product-description-4');
const learnMore4 = document.getElementById('learn-more-4');

const reviewCard1 = document.getElementById('review-card-1');
const reviewCard2 = document.getElementById('review-card-2');
const reviewCard3 = document.getElementById('review-card-3');

const indicator1 = document.getElementById('indicator-1');
const indicator2 = document.getElementById('indicator-2');
const indicator3 = document.getElementById('indicator-3');

var reviewCard = 1;

const hamburger = document.getElementById('mobile-hamburger');
const mobileMenuItems = document.getElementById('hamburger-menu-items');
var mobileMenuDisplay = 0;

hamburger.addEventListener('click', function(){
    if(mobileMenuDisplay == 0){
        mobileMenuItems.style.display = 'block';
        hamburger.innerHTML = '&#10006';
        mobileMenuDisplay = 1;
    }
    else{
        mobileMenuItems.style.display = 'none';
        hamburger.innerHTML = '&#9776';
        mobileMenuDisplay = 0;
    }
})

setInterval(() => {
    if(reviewCard == 1){
        reviewCard1.style.display = 'flex';
        reviewCard2.style.display = 'none';
        reviewCard3.style.display = 'none';
        indicator1.style.color = '#624DE7';
        indicator2.style.color = '#9483FF';
        indicator3.style.color = '#9483FF';
        reviewCard++;
    }
    else if(reviewCard == 2){
        reviewCard1.style.display = 'none';
        reviewCard2.style.display = 'flex';
        reviewCard3.style.display = 'none';
        indicator1.style.color = '#9483FF';
        indicator2.style.color = '#624DE7'
        indicator3.style.color = '#9483FF';
        reviewCard++;
    }
    else if(reviewCard == 3){
        reviewCard1.style.display = 'none';
        reviewCard2.style.display = 'none';
        reviewCard3.style.display = 'flex';
        indicator1.style.color = '#9483FF';
        indicator2.style.color = '#9483FF';
        indicator3.style.color = '#624DE7'
        reviewCard = 1;
    }
}, 5000);

var product;
var title;
var description;
var learnMore;
var hover;


var plus;
var para;
var displayPara;





function hoverOnProduct(){
    if(hover == 1){
        description.style.color = "white";
        learnMore.style.color = "white";
        title.style.color = "white";
    }
    else{
        description.style.color = "black";
        learnMore.style.color = "black";
        title.style.color = "#4733c9";
    }
    console.log("hello");
}


softwareProduct.addEventListener('mouseenter', function(){
    description = productDescription1;
    learnMore = learnMore1;
    title = title1;
    hover = 1;
    hoverOnProduct();

})

softwareProduct.addEventListener('mouseleave', function(){
    hover = 0;
    hoverOnProduct();

})


softwareProduct2.addEventListener('mouseenter', function(){
    description = productDescription2;
    learnMore = learnMore2;
    title = title2;
    hover = 1;
    hoverOnProduct();

})

softwareProduct2.addEventListener('mouseleave', function(){
    hover = 0;
    hoverOnProduct();

})


softwareProduct3.addEventListener('mouseenter', function(){
    description = productDescription3;
    learnMore = learnMore3;
    title = title3;
    hover = 1;
    hoverOnProduct();

})

softwareProduct3.addEventListener('mouseleave', function(){
    hover = 0;
    hoverOnProduct();

})


softwareProduct4.addEventListener('mouseenter', function(){
    description = productDescription4;
    learnMore = learnMore4;
    title = title4;
    hover = 1;
    hoverOnProduct();

})

softwareProduct4.addEventListener('mouseleave', function(){
    hover = 0;
    hoverOnProduct();

})


function displayMsg(){
    para.style.display = "none";
    // plus.addEventListener('click', function(){
    para.classList.add('service-detail');
    if(displayPara == 0){
        para.style.display = "block";
        displayPara = 1;
    }
    else{
        para.style.display = "none";
        displayPara = 0;
    }
// })
console.log(displayPara);
}

supportPara.style.display = "none";
supportPlus.addEventListener('click', function(){
    plus = supportPlus;
    para = supportPara;
    displayPara = supportDisplay;
    if (supportDisplay == 0){
        displayMsg();
        supportDisplay = 1;
    }
    else{
        displayMsg();
        supportDisplay = 0;
    }
})

teamPara.style.display = "none";
teamPlus.addEventListener('click', function(){
    plus = teamPlus;
    para = teamPara;
    displayPara = teamDisplay;
    if (teamDisplay == 0){
        displayMsg();
        teamDisplay = 1;
    }
    else{
        displayMsg();
        teamDisplay = 0;
    }
})


professionalPara.style.display = "none";
professionalPlus.addEventListener('click', function(){
    plus = professionalPlus;
    para = professionalPara;
    displayPara = professionalDisplay;

    if (professionalDisplay == 0){
        displayMsg();
        professionalDisplay = 1;
    }
    else{
        displayMsg();
        professionalDisplay = 0;
    }
})


faqAnswer1.style.display = "none";
faqArrow1.addEventListener('click', function(){
    plus = faqArrow1;
    para = faqAnswer1;
    displayPara = answerDisplay1;

    if (answerDisplay1 == 0){
        displayMsg();
        faqArrow1.innerHTML = "&#8593";
        answerDisplay1 = 1;
    }
    else{
        displayMsg();
        faqArrow1.innerHTML = "&#8595";
        answerDisplay1 = 0;
    }
})

faqAnswer2.style.display = "none";
faqArrow2.addEventListener('click', function(){
    plus = faqArrow2;
    para = faqAnswer2;
    displayPara = answerDisplay2;

    if (answerDisplay2 == 0){
        displayMsg();
        faqArrow2.innerHTML = "&#8593";
        answerDisplay2 = 1;
    }
    else{
        displayMsg();
        faqArrow2.innerHTML = "&#8595";
        answerDisplay2 = 0;
    }
})

faqAnswer3.style.display = "none";
faqArrow3.addEventListener('click', function(){
    plus = faqArrow3;
    para = faqAnswer3;
    displayPara = answerDisplay3;

    if (answerDisplay3 == 0){
        displayMsg();
        faqArrow3.innerHTML = "&#8593";
        answerDisplay3 = 1;
    }
    else{
        displayMsg();
        faqArrow3.innerHTML = "&#8595";
        answerDisplay2 = 0;
    }
})