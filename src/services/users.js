export const getUsersList = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const users = await response.json();

    // TODO: move to a mapper
    return users?.map((user) => ({
      id: user.id,
      name: user.name,
    }));
  } catch (e) {
    throw new Error("Error searching users");
  }
};

export const getUserDetails = async ({ id }) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();

    // TODO: move to a mapper
    return {
      name: user.name,
      user: user.username,
      email: user.email,
      city: user.address.city,
      website: user.website,
      company: user.company.name,
    };
  } catch (e) {
    throw new Error("Error searching user details");
  }
};
