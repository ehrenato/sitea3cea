var hash = window.location.hash,
    current = 0,
    demos = Array.prototype.slice.call(document.querySelectorAll('#codrops-demos > a'));

if (hash === '') hash = '#set-1';
setDemo(demos[parseInt(hash.match(/#set-(\d+)/)[1]) - 1]);

demos.forEach(function(el, i) {
    el.addEventListener('click', function() {
        setDemo(this);
    });
});

function setDemo(el) {
    var idx = demos.indexOf(el);
    if (current !== idx) {
        var currentDemo = demos[current];
        currentDemo.className = currentDemo.className.replace(new RegExp("(^|\\s+)" + 'current-demo' + "(\\s+|$)"), ' ');
    }
    current = idx;
    el.className = 'current-demo';
}