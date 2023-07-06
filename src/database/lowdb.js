import { LowSync } from "lowdb";
import { LocalStorage } from "lowdb/browser";

const adapter = new LocalStorage("db");
const db = new LowSync(adapter);

const loadDb = () => {
  db.read();
  db.data ||= {
    user: [
      {
        username: "test1",
        password: "test1",
        email: "random1@gmail.com",
        id: 0,
      },
      {
        username: "random2",
        password: "random456",
        email: "random2@gmail.com",
        id: 1,
      },
      {
        username: "random3",
        password: "random789",
        email: "random3@gmail.com",
        id: 2,
      },
    ],
  };
};

export const getUsers = () => {
  loadDb();
  return db.data.user;
};

export const getUser = (identifier, password) => {
  const users = getUsers();

  const user = users.find(
    (user) => user.email === identifier || user.username === identifier
  );

  if (user && user.password === password) {
    return user;
  }

  return null;
};

export const updateUserPassword = (username, newPassword) => {
  loadDb();
  const users = getUsers();
  const user = users.filter((user) => user.username === username);
  if (user) {
    user.password = newPassword;
    db.write();
    return true;
  }

  return false;
};

export const createUser = (username, password, email) => {
  const userId = db.data.user.length;

  loadDb();
  db.data.user.push({
    username,
    password,
    email,
    id: userId,
  });
  db.write();

  return userId;
};

export const getUserByEmail = (email) => {
  const users = getUsers();
  const user = users.filter((user) => user.email === email);
  return user[0];
};

export const getUserByUsername = (username) => {
  const users = getUsers();
  const user = users.filter((user) => user.username === username);
  return user[0];
};

export const deleteUser = (id) => {
  loadDb();
  const users = getUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    db.write();
    return true;
  }
  return false;
};