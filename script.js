document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const problemInput = document.getElementById("problem");
    const doctorList = document.getElementById("doctorList");

    searchButton.addEventListener("click", () => {
        const problem = problemInput.value;
        if (problem) {
            // Here you would make an API call to retrieve doctor information based on the problem.
            // For now, let's simulate some dummy data.
            const dummyDoctors = ["Doctor A", "Doctor B", "Doctor C"];

            // Clear previous results
            doctorList.innerHTML = "";

            // Display doctors
            dummyDoctors.forEach(doctor => {
                const li = document.createElement("li");
                li.textContent = doctor;
                doctorList.appendChild(li);
            });
        }
    });
});
