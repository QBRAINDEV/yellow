import { handleAddUser } from './components/user_info_ui';

document.addEventListener('DOMContentLoaded', () => {
    const userRolesContainer = document.getElementById('user-roles-container') as HTMLElement;
    const userRoles = document.getElementById('user-roles') as HTMLElement;

    // Function to show the dropdown
    const showDropdown = () => {
        userRoles.classList.remove('hidden');
    };

    // Function to hide the dropdown
    const hideDropdown = () => {
        userRoles.classList.add('hidden');
    };

    // Show dropdown on hover or click
    userRolesContainer.addEventListener('mouseenter', () => {
        showDropdown();
    });

    userRolesContainer.addEventListener('click', (event) => {
        showDropdown();
    });

    // Hide dropdown when the mouse leaves the container and the dropdown
    userRolesContainer.addEventListener('mouseleave', (event) => {
        if (!userRoles.contains(event.relatedTarget as Node)) {
            hideDropdown();
        }
    });

    // Hide the dropdown when a dropdown item is clicked
    document.querySelectorAll("#user-roles .dropdown-item").forEach(item => {
        item.addEventListener("click", (event) => {
            handleAddUser(event);
            hideDropdown(); // Hide dropdown after selecting an item
        });
    });

    // Hide the dropdown if clicking anywhere outside of #user-roles-container and its children
    document.addEventListener('click', (event) => {
        const target = event.target as Node;

        // Check if the click is outside the container or its children
        if (!userRolesContainer.contains(target)) {
            hideDropdown();
        }
    });
});
