import { Individual } from "../types/user";
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
			"sh4",
			"py-2",
			"px-3",
			"flex-col"
		);

		// Assign a unique data attribute to track users
		const userId = users.length - 1; // The index in the users array
		userItem.setAttribute("data-user-id", userId.toString());

		userItem.innerHTML = `
         <div class=" flex items-center justify-normal w-full space-x-5 ">
            
            <div class="roles flex items-center justify-normal w-full space-x-5">
				<div class="flex items-center justify-center px-4 py-2 text-white text-xs rounded-sm border sh5 border-hot">CEO</div>
				<div class="flex items-center justify-center px-4 py-2 text-white text-xs rounded-sm border sh5 border-hot">CEO</div>
				<div class="flex items-center justify-center px-4 py-2 text-white text-xs rounded-sm border sh5 border-hot">CEO</div>
			</div>
                <div class="remove-user-from-list hover:bg-darker w-6 h-6 mx-5 rounded-full flex items-center justify-center cursor-pointer mb-2 ml-auto" data-user-id="${userId}">
                        <img src="icons/remove.png" alt="remove icon" class="w-5 h-5" />
                </div>
        </div>

        <div class="flex items-center justify-center w-full mt-5">
        
                <div class="user-name flex items-center justify-center text-white text-sm mr-auto"><span class="mx-3 text-xs text-bluehok">Role</span>${user.name}</div>
                
                
                <div class="remove-user-from-list hover:bg-darker w-6 h-6 ml-5 rounded-full flex items-center justify-center cursor-pointer" data-user-id="${userId}">
                    <img src="icons/approve.png" alt="remove icon" class="w-5 h-5" />
                </div>
            </div>
            
            <div class="flex items-center justify-self-auto w-full mt-5 text-white text-xs  ">
                
            <div class="flex itece justify-start w-full> 
            ${user.symbolism}
                
                </div>   
            </div>
             <div class="text-xs text-greenhok w-full items-center justify-start ml-auto">${user.tarot}</div>
                     
        `;

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
		updateUserList();
	} else {
		console.error("User item not found.");
	}
}

// Function to update the DOM's data-user-id attributes after a user is removed
function updateUserList() {
	const userItems = document.querySelectorAll(".user-info");
	userItems.forEach((item, index) => {
		item.setAttribute("data-user-id", index.toString());
		const removeBtn = item.querySelector(
			".remove-user-from-list"
		) as HTMLElement;
		removeBtn.setAttribute("data-user-id", index.toString());
	});
}
