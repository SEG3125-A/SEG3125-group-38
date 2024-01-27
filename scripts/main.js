//Code inspired by https://www.w3schools.com/howto/howto_js_tabs.asp


function openInfo(event, tabName) {
    // Using querySelectorAll for broader selection and forEach for iteration
    document.querySelectorAll(".tabcontent").forEach(tabcontent => {
        tabcontent.style.display = "none"; // Hides all tab contents
    });

    // Simplifying the removal of 'active' class using forEach
    document.querySelectorAll(".tablinks").forEach(tablink => {
        tablink.classList.remove("active"); // Removes 'active' from all tab links
    });

    // Displaying the active tab content and adding 'active' class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}
