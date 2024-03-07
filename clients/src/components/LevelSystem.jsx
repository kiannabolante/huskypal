export const MAX_LEVEL = 5;

const getUserIdentifier = () => "defaultUser";

export const getCurrentLevel = (componentKey) => {
    const userIdentifier = getUserIdentifier();
    const levelKey = `${componentKey}_userLevel_${userIdentifier}`; // Create a dynamic key based on the username or email
    const level = localStorage.getItem(levelKey);
    return level ? parseInt(level, 10) : 0;
};

export const setCurrentLevel = (level, componentKey) => {
  const userIdentifier = getUserIdentifier();
  const levelKey = `${componentKey}_userLevel_${userIdentifier}`;
  localStorage.setItem(levelKey, level.toString());
};

// Function to handle task completion and level up
export const completeTaskAndUpdateLevel = (currentLevel, completedTasks, componentKey) => {
  let tasksNeededForNextLevel = currentLevel; // One task per level
  let newLevel = currentLevel;
  
  if (completedTasks >= tasksNeededForNextLevel && currentLevel < MAX_LEVEL) {
    newLevel = currentLevel + 1;
    setCurrentLevel(newLevel, componentKey); // Updates the level in localStorage
  }
  return newLevel; // Return the new level
};
