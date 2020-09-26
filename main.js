const navLinks = document.querySelectorAll("nav ul li a");
const content = document.querySelectorAll(".content");
let activeLink = navLinks[0]; // Home

navLinks.className = "";

navLinks.forEach(function(navLink) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].className = "hover";
  }

  //active home page in begin
  activeLink.className = "hover-active";
  document.getElementById(activeLink.href.split("#").pop()).className =
    "active content";
  navLink.addEventListener("click", function(event) {
    // Deactivate current page
    activeLink.className = "hover";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "content";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "hover-active";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "active content";

    event.preventDefault();
  });
});
