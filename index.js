const progressBar = document.querySelector('#scroll-progress-bar');
const section = document.querySelector('#app');

window.addEventListener('scroll', () => {
    let scrollDistance = -(section.getBoundingClientRect().top);
    let progressPercentage = (scrollDistance / (section.getBoundingClientRect().height -  document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);
    progressBar.style.width = val + '%';

    if (val < 0) {
        progressBar.style.width = '0%';
    }
});
