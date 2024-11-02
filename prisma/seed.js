// prisma/seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data in the User and Book tables
  await prisma.user.deleteMany();
  await prisma.book.deleteMany();

  console.log("Existing data cleared!");

  // Seed data for users
  await prisma.user.createMany({
    data: [
      { name: "Admin User", email: "admin@example.com", password: "adminpass", role: "admin" },
      { name: "Alice Reader", email: "alice@example.com", password: "alicepass", role: "user" },
      { name: "Bob Explorer", email: "bob@example.com", password: "bobpass", role: "user" },
      { name: "Charlie Adventurer", email: "charlie@example.com", password: "charliepass", role: "user" },
    ],
  });

  // Seed data for books
  await prisma.book.createMany({
    data: [
      {
        title: "The Great Adventure",
        author: "John Doe",
        price: 15.99,
        description: "An epic journey through unknown lands.",
        genre: "Adventure",
        imageUrl: "https://via.placeholder.com/150/0000FF/808080?text=The+Great+Adventure",
        content: "<h1>Chapter 1: The Beginning</h1><p>Once upon a time, in a land far, far away...</p><h2>Chapter 2: The Journey</h2><p>The adventure continued through mountains and valleys...</p>",
      },
      {
        title: "Mysteries of the Deep",
        author: "Jane Smith",
        price: 12.99,
        description: "A deep dive into the mysteries of the ocean.",
        genre: "Mystery",
        imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Mysteries+of+the+Deep",
        content: "<h1>Prologue</h1><p>The ocean held secrets unknown...</p><h2>Chapter 1</h2><p>The adventure begins at sea...</p>",
      },
      {
        title: "Lost in the Forest",
        author: "Alice Johnson",
        price: 10.99,
        description: "A thrilling tale of survival in the wilderness.",
        genre: "Thriller",
        imageUrl: "https://via.placeholder.com/150/008000/FFFFFF?text=Lost+in+the+Forest",
        content: "<h1>Introduction</h1><p>The forest was dense and full of unknown dangers...</p><h2>Chapter 1: Lost</h2><p>She ventured deeper into the woods, unaware of what lay ahead...</p>",
      },
      {
        title: "The Science of Tomorrow",
        author: "Dr. William Davis",
        price: 20.00,
        description: "Exploring the scientific advancements that shape our future.",
        genre: "Science",
        imageUrl: "https://via.placeholder.com/150/FFA500/000000?text=The+Science+of+Tomorrow",
        content: "<h1>Introduction</h1><p>Science is evolving rapidly, pushing the boundaries of what we know...</p><h2>Chapter 1: The Future of Technology</h2><p>Technological advancements are reshaping society...</p>",
      },
      {
        title: "History Uncovered",
        author: "Emily Brown",
        price: 18.50,
        description: "A journey through forgotten eras and civilizations.",
        genre: "History",
        imageUrl: "https://via.placeholder.com/150/FFD700/000000?text=History+Uncovered",
        content: "<h1>Ancient Civilizations</h1><p>The stories of ancient civilizations are fascinating and complex...</p><h2>Chapter 1: Lost Kingdoms</h2><p>There are kingdoms that existed long before our time...</p>",
      },
      {
        title: "Cooking with Passion",
        author: "Chef Anne Lee",
        price: 9.99,
        description: "Delicious recipes and cooking tips for food enthusiasts.",
        genre: "Cooking",
        imageUrl: "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Cooking+with+Passion",
        content: "<h1>Introduction</h1><p>Cooking is an art form that brings joy and flavor to life...</p><h2>Recipe 1: Pasta Perfection</h2><p>Learn how to make pasta from scratch...</p>",
      },
    ],
  });

  console.log("Database has been seeded with users and books!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
