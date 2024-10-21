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
        this.ISBN = "381984681"
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