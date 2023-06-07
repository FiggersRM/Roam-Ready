const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#itinerary-name").value.trim();
    const description = document.querySelector("#itinerary-desc").value.trim();
    const startDate = document.querySelector("#startDate").value;
    const endDate = document.querySelector("#endDate").value;

    if (title && description && startDate && endDate) {
        const response = await fetch(`/api/itineraries`, {
            method: "POST",
            body: JSON.stringify({ title, description, startDate, endDate }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace("/dashboard")
        }
        else {
            alert("Failed to Create Itinerary")
        }
    }
}

document.querySelector(".button").addEventListener("click", newFormHandler);