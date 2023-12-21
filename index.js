var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

const fancy = document.getElementById('fancy');
var charArr = ['Ф$#¢&Д¢)%)Д!?/', '/Ф=&¢&$Ф#$(%$¢', '¢&$Ф#Ф$#Д!?/$(', '?¢&=¢%$Ф/+Д$$(', '=¢¢&Д¢)%)%$Ф/+', '¢X¢Ф&Ф%Д&Д¢)%)', 'X¢Ф&%)ДФ$*(Ф%Д', '/¢==¢%$Ф/+&Д$Д', '¢&¢&Д¢)%)ДФ$*(', '¢&Д¢X¢Ф&Ф%Д)%)']
var charArr2 = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Website Developer']
var fontArr = ['Luminari, fantasy', 'Brush Script MT, Brush Script Std, cursive', '"Times New Roman", Times, serif', '"MV Boli", Times, serif', 'bradly hand, cursive', ' "Ink Free", Times, serif', 'marlett', 'Gabriola, Times, serif']

setInterval(() => {
    let inter = setInterval(() => {
        let randomnum = Math.floor((Math.random() * 6));
        fancy.innerHTML = charArr[randomnum]
    }, 60);
    setTimeout(() => {
        let randomnum = Math.floor((Math.random() * 4));
        clearInterval(inter)
        fancy.innerHTML = charArr2[randomnum]
    }, 1000);

}, 5000);

var dots = [];
for (var i = 0; i < 1; i++) {
    var node = document.createElement("div");
    node.className = "trail";
    document.body.appendChild(node);
    dots.push(node);

}

var currentDot = 0;
addEventListener("mousemove", function (event) {
    var dot = dots[currentDot];
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY + 8) + "px";
    currentDot = (currentDot + 1) % dots.length;

});

const downloadPDF = () => {
    var pdfFilePath = 'Assets/Resume.pdf';
    var link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'tejas_chavan_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const toggleNav = () => {
    if (document.getElementById('ul2').style.display === 'none') {
        document.getElementById('ul2').style.display = 'block'
    } else {
        document.getElementById('ul2').style.display = 'none'
    }
}

const readMore = (e) => {
    const id = e.parentElement.parentElement.getAttribute('name');
    if (document.getElementById(`${id}`).style.height === 'auto') {
        document.getElementById(`${id}`).style.height = '200px'
    } else {
        document.getElementById(`${id}`).style.height = 'auto'
    }
}
