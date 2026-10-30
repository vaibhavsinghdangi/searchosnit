var D=[["Frameworks and directories", [["OSINT Framework", "https://osintframework.com", "Clickable tree of tools by category", ""], ["Bellingcat Toolkit", "https://bellingcat.gitbook.io/toolkit", "Curated investigation tools with notes", ""], ["Cyber Detective", "https://github.com/cipher387/osint_stuff_tool_collection", "Large categorized collection", ""], ["Start.me OSINT", "https://start.me/p/DPYPMz/the-ultimate-osint-collection", "Dashboard of hundreds of links", ""]]], ["Search engines and archives", [["Wayback Machine", "https://web.archive.org", "See archived versions of web pages", ""], ["Archive.today", "https://archive.ph", "Snapshot and view saved pages", ""], ["Google Dorks (GHDB)", "https://www.exploit-db.com/google-hacking-database", "Advanced search query examples", ""], ["Yandex", "https://yandex.com", "Alternative search, strong for images", ""]]], ["Images and video", [["Google Lens", "https://lens.google.com", "Reverse image search", ""], ["TinEye", "https://tineye.com", "Reverse image search and image origins", ""], ["Yandex Images", "https://yandex.com/images", "Reverse image search, good for faces and places", ""], ["InVID-WeVerify", "https://www.invid-project.eu/tools-and-services/invid-verification-plugin/", "Video and image verification", ""], ["FotoForensics", "https://fotoforensics.com", "Error level analysis of images", ""], ["Jeffrey's EXIF Viewer", "https://exif.tools", "Read image metadata", ""]]], ["Usernames and email", [["WhatsMyName", "https://whatsmyname.app", "Find where a username exists", ""], ["Namechk", "https://namechk.com", "Username and domain availability", ""], ["Epieos", "https://epieos.com", "Email and phone lookup", ""], ["Have I Been Pwned", "https://haveibeenpwned.com", "Check your email in data breaches", ""], ["Hunter.io", "https://hunter.io", "Find company email formats", "login"]]], ["Domains, IP and networks", [["Who.is", "https://who.is", "WHOIS lookups", ""], ["ViewDNS.info", "https://viewdns.info", "DNS, reverse IP and more", ""], ["SecurityTrails", "https://securitytrails.com", "DNS history and subdomains", "login"], ["crt.sh", "https://crt.sh", "Certificate transparency search", ""], ["URLScan.io", "https://urlscan.io", "Scan and inspect a URL safely", ""], ["DNSDumpster", "https://dnsdumpster.com", "Map DNS records and hosts", ""], ["BuiltWith", "https://builtwith.com", "Technologies a site uses", ""]]], ["Devices and infrastructure", [["Shodan", "https://www.shodan.io", "Search internet-connected devices", "login"], ["Censys", "https://search.censys.io", "Hosts, certificates and services", "login"], ["GreyNoise", "https://viz.greynoise.io", "Check if an IP is internet noise", ""], ["VirusTotal", "https://www.virustotal.com", "Scan files, URLs and domains", ""]]], ["Maps, geolocation and tracking", [["Google Earth", "https://earth.google.com/web", "Satellite imagery with history", ""], ["Sentinel Hub EO Browser", "https://apps.sentinel-hub.com/eo-browser", "Free satellite imagery", ""], ["Overpass Turbo", "https://overpass-turbo.eu", "Query OpenStreetMap data", ""], ["SunCalc", "https://www.suncalc.org", "Sun position for dating photos", ""], ["FlightRadar24", "https://www.flightradar24.com", "Live flight tracking", ""], ["MarineTraffic", "https://www.marinetraffic.com", "Live ship tracking", ""]]], ["Social media and people", [["Social Searcher", "https://www.social-searcher.com", "Search public social posts", ""], ["Wigle", "https://wigle.net", "Wi-Fi network map", "login"], ["OpenCorporates", "https://opencorporates.com", "Company registry search", ""], ["OCCRP Aleph", "https://aleph.occrp.org", "Documents and public records", ""]]], ["Verification and fact-checking", [["Google Fact Check Explorer", "https://toolbox.google.com/factcheck/explorer", "Search published fact checks", ""], ["Hoaxy", "https://hoaxy.osome.iu.edu", "Visualize how claims spread", ""], ["Snopes", "https://www.snopes.com", "Fact-check database", ""]]]];
(function(){
var cat="All",tabs=document.getElementById("tabs"),out=document.getElementById("out"),q=document.getElementById("q");
function el(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n}
function safe(u){return /^https:\/\//.test(u)}
function drawTabs(){
tabs.textContent="";
["All"].concat(D.map(function(d){return d[0]})).forEach(function(n){
var b=el("button",null,n);b.type="button";b.setAttribute("aria-pressed",String(n===cat));
b.addEventListener("click",function(){cat=n;drawTabs();draw()});tabs.appendChild(b)})}
function draw(){
var s=q.value.trim().toLowerCase().slice(0,60),n=0;out.textContent="";
D.forEach(function(d){
if(cat!=="All"&&cat!==d[0])return;
var items=d[1].filter(function(t){return !s||(t[0]+" "+t[2]+" "+d[0]).toLowerCase().indexOf(s)>-1});
if(!items.length)return;n+=items.length;
out.appendChild(el("h2",null,d[0]));
var g=el("div","grid");
items.forEach(function(t){
if(!safe(t[1]))return;
var a=el("a","t");a.href=t[1];a.target="_blank";a.rel="noopener noreferrer nofollow";
var b=el("b",null,t[0]);if(t[3])b.appendChild(el("i",null,t[3]));
a.appendChild(b);a.appendChild(el("span",null,t[2]));g.appendChild(a)});
out.appendChild(g)});
if(!n)out.appendChild(el("p","none","No tools match. Try a shorter word like email or image."))}
q.addEventListener("input",draw);
var m=document.getElementById("mail");
if(m){var u="vaibhavsinghdangi34",h="gmail.com",a=el("a",null,u+"@"+h);a.href="mailto:"+u+"@"+h;m.textContent="";m.appendChild(a)}
drawTabs();draw()})();
