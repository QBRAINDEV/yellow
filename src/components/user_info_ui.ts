import { IUser } from "../types/user";
export function handleAddUser(event: Event) {
    const userNameInput = document.getElementById("user-name") as HTMLInputElement;
    const roleDropdown = document.getElementById("user-roles") as HTMLElement;

    if (userNameInput && roleDropdown) {
        const name = userNameInput.value.trim();

        // Remove 'selected' class from any previously selected item
        roleDropdown.querySelectorAll(".dropdown-item.selected").forEach((item: Element) => {
            item.classList.remove("selected");
        });

        // Find the closest .dropdown-item if the clicked element is nested
        let clickedItem = event.target as HTMLElement;
        while (clickedItem && !clickedItem.classList.contains("dropdown-item")) {
            clickedItem = clickedItem.parentElement as HTMLElement;
        }

        if (clickedItem && clickedItem.classList.contains("dropdown-item")) {
            // Add 'selected' class to the clicked item
            clickedItem.classList.add("selected");

            // Get the selected role from the dropdown
            const selectedRole = (roleDropdown.querySelector(".dropdown-item.selected") as HTMLElement)?.textContent?.trim() || "";

            if (name && selectedRole) {
                const user = { name, role: selectedRole } as IUser;
                renderUser(user);
            } else {
                console.error("No role selected or name missing. Name:", name, "Selected Role:", selectedRole);
            }
        } else {
            console.error("Clicked element is not a dropdown item. Element:", clickedItem);
        }
    } else {
        console.error("User name input or role dropdown not found.");
    }
}



// Function to toggle the dropdown menu
export function toggleDropdown() {
	const menu = document.getElementById("user-roles") as HTMLElement;
	if (menu) {
		menu.classList.toggle("hidden");
	} else {
		console.error("Dropdown menu not found.");
	}
}


// Initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
	// const roleDropdown = document.getElementById('user-role');
	// const dropdownMenu = document.getElementById('dropdownMenu');
	// if (roleDropdown) {
	//     roleDropdown.addEventListener('click', toggleDropdown);
	// } else {
	//     console.error('Role dropdown not found.');
	// }
	// if (dropdownMenu) {
	//     dropdownMenu.addEventListener('click', selectRole);
	// } else {
	//     console.error('Dropdown menu not found.');
	// }
});

// Function to render a user in the list
export function renderUser(user: { name: string; role: string }) {
	const usersList = document.getElementById("users-list") as HTMLElement;

	if (usersList) {
		const userItem = document.createElement("div");
		userItem.classList.add(
			"user-info",
			"flex",
			"w-full",
			"items-center",
			"justify-start",
			"sh4",
			"py-2",
			"px-3"
		);
		userItem.innerHTML = `
            <div class="user-name flex items-center justify-center text-bluehok text-xs mr-auto">${user.name}</div>
            <div class="user-role flex items-center justify-center text-xs text-hot">${user.role}</div>
        `;

		usersList.appendChild(userItem);
	}
}
