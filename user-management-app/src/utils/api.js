export const exportUsersToCSV = async (users) => {
     const csvHeader = "First Name,Last Name,Email\n";
    const csvRows = users.map(user => `${user.firstName},${user.lastName},${user.email}`).join("\n");
    return csvHeader + csvRows;
  };
  