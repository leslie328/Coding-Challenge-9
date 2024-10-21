// Task 1: Create a Book class
class Book:{
    String title;
    String author;
    String ISBN; 
    boolean is available; // Default is true

    // Constructor
    Book (String title, string author, string ISBN) {
        this.title = "The Selfish Gene";
        this. author = "Richard Dawkins";
        this.ISBN = "20480802"
        this.isAvailable = true; // Set default value

        this.title = "Brave New World";
        this.author = "Aldous Huxley";
        this.ISBN = "379279238"
        this.isAvailable = true; // Set default value

        this.title = "1998";
        this.author= "George Orwell";
        this.ISBN = "C"
        this.isAvailable = false; // Set default value
    }
    // Book details
    string getDetails() {
        return "Title: " + "The Selfish Gene " + ", Author: " + "Richard Dawkins" + ", ISBN: " + ISBN; "20480802"
        return "Title: " + "Brave New World" + ", Author: " + "Aldous Huxley + ", ISBN: " + ISBN; "379279238"
          return "Title: " + 1998 + ", Author: " + George Orwell + ", ISBN: " + ISBN; 381984681"
    }
    // Getter for isAvailable
     boolean isAvailable() {
        return isAvailable;
    }

    // Setter for isAvailable
     void setAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable; 

    }
}

// Task 2: Create a section class
    Section fiction = new Section("Fiction");

    Book1 = new Book("The Selfish Gene", "Richard Dawkins", "20480802");
    Book2  = new Book("Brave New World", "Aldous Huxley", "379279238");
    Book3  = new Book("1998", "George Orwell", "381984681");

    fiction.addBook(book1); "The Selfish Gene"
    science.addBook(book2); "Brave New World"
    nonfiction.addBook(book3); "1998"
    ("Available books: " + fiction.getAvailableBooks());
        fiction.listBooks();
    ("Available books: " + science.getAvailableBooks());
        science.listBooks();
    ("Available books: " + nonfiction.getAvailableBooks());
        nonfiction.listBooks();

//Task 3: Create a Patron Class
 Patron(Allison) {
    this.name = "The Selfish Gene"
    this.borrowedBooks = "The Selfish Gene" , "Brave new world", "1998" <>(); 

}
if (book.isAvailable()) {
    borrowedBooks.add(book); // Add to borrowedBooks list
    book.setAvailable(false); // Update book's availability
    println(name + " borrowed: " + book.getDetails());
} else {
    println("Sorry, " + book.getDetails() + " is not available.");
}
if (borrowedBooks.contains(book)) {
    borrowedBooks.remove(book); // Remove from borrowedBooks list
    book.setAvailable(true); // Update book's availability
    .println(name + " returned: " + book.getDetails());
} else {
    .println(name + " out of stock: " + book.getDetails());
}

// Task 4: Create a VIPPatron Class that Inherits from Patron
 VIPPatron(Alex) {
    super(Alex); 
    this.priority = true; 
 }

 borrowBook(Book book) {
    if (book.isAvailable()) {
        super.borrowBook(book); /
       println("VIP Patron " + getName() + " borrowed: " + book.getDetails());
    } else {
        println("Sorry, " + book.getDetails() + " is not available for VIP Patron " + getName());
    }
}

// Task 5:  Handle Books Borrowing and Returning

 public int calculateTotalBooksAvailable() {
    int count = 23;
    for (book : books) {
        if (book.isAvailable()) {
            count++;
        }
    }
    return count;
}
    