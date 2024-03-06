export const MAX_LEVEL = 5;


// Retrieve the username or email from localStorage/sessionStorage
const getUserIdentifier = () => {
  // Example: Assuming you store username or email in localStorage after login
  return localStorage.getItem('username'); // or 'email', depending on what you use as a unique identifier
};


// Update getCurrentLevel to use the user identifier
export const getCurrentLevel = () => {
    const userIdentifier = getUserIdentifier();
    const levelKey = `userLevel_${userIdentifier}`; // Create a dynamic key based on the username or email
    const level = localStorage.getItem(levelKey);
    return level ? parseInt(level, 10) : 0;
};


// Update setCurrentLevel to use the user identifier
export const setCurrentLevel = (newLevel) => {
  const userIdentifier = getUserIdentifier();
  const levelKey = `userLevel_${userIdentifier}`;
  localStorage.setItem(levelKey, newLevel.toString());
};


// Function to handle task completion and level up
export const completeTaskAndUpdateLevel = (currentLevel, completedTasks) => {
    let tasksNeededForNextLevel = currentLevel; // Assuming one task needed per current level
    let newLevel = currentLevel;
   
    if (completedTasks >= tasksNeededForNextLevel && currentLevel < MAX_LEVEL) {
      newLevel = currentLevel + 1;
      setCurrentLevel(newLevel); // Update the level in localStorage
    }
   
    return newLevel; // Return the new level
  };
