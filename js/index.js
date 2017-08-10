$(function () {
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#C83061', '#BD46EE', '#A52A2A'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('.section2').find('h3').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }
            if (index == 3) {
                $('.section3').find('h3').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
//////////////////////////////////////////////////////////////////////
                let canvas = document.querySelectorAll('canvas');
                for (let i = 0; i < canvas.length; i++) {
                    let ctx = canvas[i].getContext("2d");
                    if (i == 0) {
                        skill('HTML5/CSS3', ctx, 90, 'deepskyblue', 10)
                    } else if (i == 1) {
                        skill('JAVASCRIPT', ctx, 88, 'red', 10)
                    } else if (i == 2) {
                        skill('JQUERY', ctx, 90, 'yellow', 10)
                    } else if (i == 3) {
                        skill('PHP', ctx, 80, 'deeppink', 10)
                    } else if (i == 4) {
                        skill('PS/AI', ctx, 90, 'orange', 10)
                    } else if (i == 5) {
                        skill('REACT', ctx, 60, 'lime', 10)
                    } else if (i == 6) {
                        skill('VUE', ctx, 70, 'purple', 10)
                    } else if (i == 7) {
                        skill('NODE', ctx, 60, 'blue', 10)
                    }
                }

                function skill(xx, ctx, size, color, speed) {
                    let t;
                    let num = size;
                    let n = 0;
                    ctx.lineWidth = 10;
                    ctx.lineCap = 'round';
                    ctx.strokeStyle = color;
                    t = setInterval(move, speed);
                    function move() {
                        n++;
                        if (n == num) {
                            clearInterval(t);
                        }
                        ctx.clearRect(0, 0, 200, 200);
                        ctx.beginPath();
                        let angle = (n * 360 / 100) * Math.PI / 180;
                        ctx.arc(100, 100, 60, 0, angle, false);
                        ctx.stroke();
                        ctx.fillStyle = color;
                        ctx.font = `20px 微软雅黑 bold`;
                        ctx.fillText(`${n}%`, 80, 110);
                        ctx.font = `15px 微软雅黑 bold`;
                        ctx.fillText(xx, 60, 20);
                    }
                }
///////////////////////////////////////////////////////////////////////
            }
            if (index == 4) {
                $('.section4').find('h3').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }
        },
        onLeave: function (index, direction) {
            if (index == '2') {
                $('.section2').find('h3').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if (index == '3') {
                $('.section3').find('h3').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if (index == '4') {
                $('.section4').find('h3').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
            }
        }
    });


});