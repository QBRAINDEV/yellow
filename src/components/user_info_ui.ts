import { CompatibilityResult, Individual } from "../types/user";
import { capitalizeFirstLetter } from "../utils/capitalize";
import { useYellowCore } from "./core";

let users: Individual[] = []; // Array to keep track of users

export function handleAddUser(event: Event) {
	const userNameInput = document.getElementById(
		"user-name"
	) as HTMLInputElement;
	const roleDropdown = document.getElementById("user-roles") as HTMLElement;

	if (userNameInput && roleDropdown) {
		const name = userNameInput.value.trim();

		// Check if the clicked element is a dropdown item
		const clickedItem = (event.target as HTMLElement).closest(".dropdown-item");

		if (!clickedItem) {
			console.error("Clicked element is not a dropdown item.");
			return; // Exit if the clicked element is not a dropdown item
		}

		// Get the role from the clicked item
		const selectedRole = clickedItem.getAttribute("data-role") || "";

		if (name && selectedRole) {
			const user = { name, role: selectedRole } as Individual;
			users.push(user); // Add user to the array
			users = useYellowCore(users);

			renderUser(users[users.length - 1]); // Render the user
		} else {
			console.error("No role selected or name missing.");
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

// Function to render a user in the list
export function renderUser(user: Individual) {
    const usersList = document.getElementById("users-list") as HTMLElement;

    if (usersList) {
        const userItem = document.createElement("div");
        userItem.classList.add(
            "user-info",
            "flex",
            "w-full",
            "items-center",
            "justify-start",
            "sh19",
            "py-2",
            "px-3",
            "flex-col"
        );

        // Assign a unique data attribute to track users
        const userId = users.length - 1; // The index in the users array
        userItem.setAttribute("data-user-id", userId.toString());

        // Function to render a single role
        const renderRole = (role: string) => {
            const container = document.createElement("div");
            container.classList.add(
                "flex",
                "items-center",
                "justify-center",
                "px-4",
                "py-2",
                "text-white",
                "text-xs",
                "rounded-sm",
                "border",
                "border-hot",
                "sh19",
                "p-3"
            );
            container.textContent = role;
            return container;
        };

        // Function to render all roles
        const renderAllRoles = (roles: string[]) => {
            const rolesContainer = document.createElement("div");
            rolesContainer.classList.add(
                "flex",
                "items-center",
                "justify-center",
                "space-x-3"
            );
            roles.forEach((role) => {
                const roleElement = renderRole(role);
                rolesContainer.appendChild(roleElement);
            });
            return rolesContainer;
        };

        // Create the user item HTML with roles rendered
        userItem.innerHTML = `
            <div class="flex items-center justify-normal w-full space-x-5">
                <div class="roles flex items-center justify-normal w-full space-x-5">
                    <!-- The roles will be rendered here -->
                </div>
                <div class="remove-user-from-list hover:bg-darker w-6 h-6 mx-5 rounded-full flex items-center justify-center cursor-pointer mb-2 ml-auto" data-user-id="${userId}">
                    <img src="icons/remove.png" alt="remove icon" class="w-5 h-5" />
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-5">
                <div class="user-name flex items-center justify-center text-white text-sm mr-auto">
                    <span class="mx-3 text-xs text-bluehok">Client: </span>${user.name}
                </div>
                <div class="user-name flex items-center justify-center text-white text-sm mr-auto">
                    <span class="mx-3 text-xs text-bluehok">Requested role: </span>${user.temporaryRole}
                </div>
                
                <div class="remove-user-from-list hover:bg-darker w-6 h-6 ml-5 rounded-full flex items-center justify-center cursor-pointer" data-user-id="${userId}">
                    ${
                        user.match
                            ? `<img src="icons/validated.png" alt="approve icon" class="w-5 h-5 rotate-180" />`
                            : `<img src="icons/rejected.png" alt="rejected icon" class="w-5 h-5 rotate-180" />`
                    }
                </div>
            </div>

            <div class="flex items-center justify-self-auto w-full mt-5 text-white text-sm flex-col">
                <div class="text-greenhok w-full items-center justify-start ml-auto">${user.symbolism}</div>
                <div class="text-white w-full items-center justify-start ml-auto">${user.tarot}</div>
            </div>`;

        // Append roles to the corresponding container
        const rolesContainer = userItem.querySelector(".roles");
        if (rolesContainer && user.idealRoles) {
            const allRolesElement = renderAllRoles(user.idealRoles);
            rolesContainer.appendChild(allRolesElement);
        }

        // Render compatibility analysis
       // Render compatibility analysis
const compatibilityContainer = document.createElement("div");
compatibilityContainer.classList.add("client-analysis", "flex", "flex-col", "w-full", "space-y-5", "bg-darken", "rounded-full", "text-sm", "text-white", "mt-10");

user.compatibility.forEach((client: CompatibilityResult) => {
    // Create a new div for each client's analysis
    const clientAnalysisDiv = document.createElement("div");
    clientAnalysisDiv.classList.add("client-analysis-item", "flex", "items-center", "justify-between", "p-3", "bg-darker", "rounded", "space-x-3"); // Add space-x-3 for horizontal spacing
    const clientAnalysis = `
        <div class="flex items-center space-x-2 w-full"> <!-- Ensure space between name and icon -->
            <div class="individual-match flex items-center space-x-2">
                ${
                    client.match
                        ? `<img src="icons/validated.png" alt="approve icon" class="w-5 h-5 rotate-180" />`
                        : `<img src="icons/rejected.png" alt="rejected icon" class="w-5 h-5 rotate-180" />`
                }
            </div>
            <div class="flex-grow">${capitalizeFirstLetter(client.individualB)}</div>
        </div>
        <div class="client-match-score flex items-center space-x-2" style="min-width: 80px;">
            <img src="icons/rank.png" alt="dropdown icon" class="w-5 h-5" />
            <div class="text-yellow">${client.score}</div>
        </div>
        <div class="client-score flex items-center space-x-2" style="min-width: 80px;">
            <div>Harmony</div>
            ${
                client.factors.symbolismMatch
                    ? `<img src="icons/harmony.png" alt="dropdown icon" class="w-5 h-5" />`
                    : `<img src="icons/trouble.png" alt="dropdown icon" class="w-5 h-5" />`
            }
        </div>
        <div class="client-matching-compatibility flex items-center space-x-2" style="min-width: 80px;">
            <div class="roleCompatibility">Hire</div>
            ${
                client.factors.roleCompatibility
                    ? `<img src="icons/ai.png" alt="dropdown icon" class="w-5 h-5" />`
                    : `<img src="icons/error.png" alt="dropdown icon" class="w-5 h-5" />`
            }
        </div>
        <div class="client-score flex items-center space-x-2" style="min-width: 80px;">
            <img src="icons/team.png" alt="team" class="w-5 h-5" />
            <div class="text-white">${client.factors.valueDifference}</div>
        </div>
    `;

    // Set the inner HTML of the client analysis div
    clientAnalysisDiv.innerHTML = clientAnalysis;

    // Append the client analysis div to the compatibility container
    compatibilityContainer.appendChild(clientAnalysisDiv);
});



        userItem.appendChild(compatibilityContainer);

        usersList.appendChild(userItem);

        // Add event listener to remove the user when the remove icon is clicked
        const removeBtn = userItem.querySelector(
            ".remove-user-from-list"
        ) as HTMLElement;
        if (removeBtn) {
            removeBtn.addEventListener("click", () => removeUser(userId));
        }
    }
}

// Function to remove a user from the list and the DOM
export function removeUser(userId: number) {
	const userItem = document.querySelector(
		`[data-user-id="${userId}"]`
	) as HTMLElement;

	if (userItem) {
		userItem.remove(); // Remove the user from the DOM
		users = users.filter((_, index) => index !== userId); // Remove the user from the array

		// Optionally: reassign data-user-id attributes to keep them in sync with the array
		updateUserIds();
	}
}

// Function to update user IDs after a user is removed
function updateUserIds() {
	const userItems = document.querySelectorAll(".user-info") as NodeListOf<HTMLElement>;

	userItems.forEach((userItem, index) => {
		userItem.setAttribute("data-user-id", index.toString());
	});
}
