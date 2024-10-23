
  // Add smooth hover effect for profile picture rotation
const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('mouseover', () => {
  profilePic.style.transform = 'rotate(15deg)';
});

profilePic.addEventListener('mouseout', () => {
  profilePic.style.transform = 'rotate(0deg)';
});
