function changeWeather(type, btn) {
    const fx = document.getElementById('fx-layer');
    const sun = document.getElementById('sun-box');
    const label = document.getElementById('weather-label');
    
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    fx.innerHTML = '';
    sun.style.display = (type === 'sun') ? 'block' : 'none';

    if (type === 'rain') {
        label.innerText = "HEAVY RAIN";
        for(let i=0; i<100; i++) createPart('rain-drop'); // رجعنا المطر القديم
    } else if (type === 'snow') {
        label.innerText = "SNOWFALL";
        for(let i=0; i<60; i++) createPart('snow-flake');
    } else if (type === 'bolt') {
        label.innerText = "THUNDERSTORM"; 
        const lightning = setInterval(() => {
            if (!btn.classList.contains('active')) {
                clearInterval(lightning);
                document.body.style.backgroundColor = "";
                return;
            }
            // وميض ضوئي فقط بدون أي أشكال
            document.body.style.backgroundColor = "rgba(255,255,255,0.8)";
            setTimeout(() => {
                document.body.style.backgroundColor = "";
            }, 50);
        }, 3000);
    } else {
        label.innerText = "CLEAR SKY";
    }
}

function createPart(cls) {
    const p = document.createElement('div');
    p.className = cls;
    
    if(cls === 'snow-flake') {
        p.innerHTML = '❄️';
        p.style.animationDuration = (Math.random() * 2 + 4) + 's'; 
    } else {
        // سرعة مطر هادئة جداً (حتى ما تدور عيونج)
        p.style.animationDuration = (Math.random() * 1 + 2) + 's'; 
    }
    
    p.style.left = Math.random() * 100 + 'vw';
    p.style.opacity = Math.random() * 0.5 + 0.5;
    document.getElementById('fx-layer').appendChild(p);
}

function toggleWhite() {
    document.body.classList.toggle('light-theme');
    const icon = document.getElementById('t-icon');
    icon.className = document.body.classList.contains('light-theme') ? 'fas fa-sun' : 'fas fa-moon';
}
