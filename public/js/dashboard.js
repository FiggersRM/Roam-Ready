const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#itinerary-name").value.trim()
    const description = document.querySelector("#itinerary-desc").value.trim()

    if (title && description) {
        const response = await fetch(`/api/itineraries`, {
            method: "POST",
            body: JSON.stringify({ title, description }),
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