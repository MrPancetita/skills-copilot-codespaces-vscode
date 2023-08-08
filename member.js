function skillsMembers() {
  const members = document.querySelectorAll('.member');
  members.forEach((member) => {
    const skills = member.querySelector('.skills');
    const memberName = member.querySelector('.member-name');
    const memberNameHeight = memberName.offsetHeight;
    const skillsHeight = skills.offsetHeight;
    if (skillsHeight > memberNameHeight) {
      memberName.style.height = `${skillsHeight}px`;
    }
  });
}