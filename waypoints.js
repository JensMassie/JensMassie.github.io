var waypoint = new Waypoint({
    element: document.getElementById('comp'),
    handler: function() {
        removeAllActive();
        $("#compnav").attr("class", "active")
    }
});
new Waypoint({
    element: document.getElementById('home'),
    handler: function() {
        removeAllActive();
        $("#homenav").attr("class", "active")
    }
});
new Waypoint({
    element: document.getElementById('proj'),
    handler: function() {
        removeAllActive();
        $("#projnav").attr("class", "active")
    }
});
new Waypoint({
    element: document.getElementById('cv'),
    handler: function() {
        removeAllActive();
        $("#cvnav").attr("class", "active")
    }
});

new Waypoint({
    element: document.getElementById('contact'),
    handler: function() {
        removeAllActive();
        $("#contnav").attr("class", "active")
    }
});

function removeAllActive() {
    $("#homenav").removeAttr("class", "active");
    $("#compnav").removeAttr("class", "active");
    $("#projnav").removeAttr("class", "active");
    $("#cvnav").removeAttr("class", "active");
    $("#contnav").removeAttr("class", "active");
}

