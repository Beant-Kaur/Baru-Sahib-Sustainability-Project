console.log("JavaScript Connected Successfully!");
// /Hemberger/ 
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {menuBtn.onclick = function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = "✖";
        } else {
            menuBtn.innerHTML = "☰";
        }
    }
}

const form = document.getElementById("partnershipForm");
const typeCards = document.querySelectorAll(".type-card");

typeCards.forEach(function (card) {

    card.addEventListener("click", function () {

        typeCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        const radio = card.querySelector('input[type="radio"]');
        radio.checked = true;

    });

});

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const organisation = document.getElementById("organisation").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const goals = document.getElementById("goals").value.trim();

        const partner = document.querySelector('input[name="partnerType"]:checked');
        const partnerType = partner ? partner.value : "";

        const selectedProjects = [];

        document.querySelectorAll('input[name="projects"]:checked')
            .forEach(function (project) {
                selectedProjects.push(project.value);
           });

        const formData = {
            fullName,
            organisation,
            email,
            phone,
            partnerType,
            projects: selectedProjects,
            goals
        };

        console.clear();
        console.log("===== Registration Form Data =====");
        console.table(formData);
        console.log(formData);
        try {

            const response = await fetch("http://localhost:5000/api/partners/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            alert(data.message);

        } catch (error) {

            console.error(error);

            alert("Something went wrong!");

        }

        alert("Form submitted successfully! Check the console.");
        form.reset();

        typeCards.forEach(function (card) {
            card.classList.remove("selected");
        });
    });
}