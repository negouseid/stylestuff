initMap=function(){var a={lat:47.6205588,lng:-122.3212725},b=new google.maps.StyledMapType([{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#a6a6a0"}]},{featureType:"all",stylers:[{saturation:-80},{lightness:20}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{hue:"#f6f6f6"},{saturation:0}]},{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]}],{name:"Custom Style"}),c="custom_style",d=new google.maps.Map(document.getElementById("map"),{zoom:15,center:a,scrollwheel:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,c]}});d.mapTypes.set(c,b),d.setMapTypeId(c);var e='<div class="map-marker-custom"><div class="marker-img"> <img src="../assets/dist/img/company/map-info.jpg" alt=""/></div><div class="marker-info"><h4>Location</h4><p class="rq-address-text">79 Orchard St,New York<br>NY 10002, USA</p><p class="">(0096) 8645 234 438</p><div></div>',f=new google.maps.InfoWindow({content:e}),g="../assets/dist/img/company/map-marker.png",h=new google.maps.Marker({position:a,map:d,icon:g,title:"Hello World!"});h.addListener("click",function(){f.open(d,h);var a=$(".gm-style-iw"),b=a.prev();b.children(":nth-child(2)").css({display:"none"}),b.children(":nth-child(4)").css({display:"none"});var c=a.next();c.css({opacity:"1",right:"40px",top:"25px"})})}();