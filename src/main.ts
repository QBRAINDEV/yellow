import { handleAddUser, toggleDropdown } from './components/user_info_ui';

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll("#user-roles .dropdown-item").forEach(item => {
		item.addEventListener("click", handleAddUser);
	});
	
    const addButton = document.getElementById('add-user');
    if (addButton) {
        addButton.addEventListener('click', handleAddUser);
    } else {
        console.error('Add User button not found.');
    }

    // Attach event listeners for dropdown and role selection
    document.querySelector('#user-role')?.addEventListener('click', toggleDropdown);
    // document.querySelectorAll('#user-roles .role-item').forEach(item => {
    //     item.addEventListener('click', selectRole);
    // });
});
