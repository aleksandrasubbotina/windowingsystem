// Define Size class with default property values and resize method
class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
        this.resize = function (newWidth, newHeight) {
            this.width = newWidth;
            this.height = newHeight;
        };
    }
}

// Define Position class with default values and move method
class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.move = function (newX, newY) {
            this.x = newX;
            this.y = newY;
        };
    }
}

// Define ProgramWindow class with default values
class ProgramWindow {
    constructor(screenSize, size, position) {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    };

    // method to resize window, while maintaining min window size and not exceeding screen size
    resize(newSize) {
        let newWidth = newSize.width;
        let newHeight = newSize.height;
        if (newSize.width < 1) newWidth = 1;
        if (newSize.height < 1) newHeight = 1;
        if (this.position.x + newWidth >= this.screenSize.width) newWidth = this.screenSize.width - this.position.x;
        if (this.position.y + newHeight >= this.screenSize.height) newHeight = this.screenSize.height - this.position.y;
        this.size.resize(newWidth, newHeight);
    }

    // method to move the window, while not exceeding screen size
    move(newPosition) {
        let newX = newPosition.x;
        let newY = newPosition.y;
        if (newPosition.x < 0) newX = 0;
        if (newPosition.y < 0) newY = 0;
        if (this.size.width + newX > this.screenSize.width) newX = this.screenSize.width - this.size.width;
        if (this.size.height + newY > this.screenSize.height) newY = this.screenSize.height - this.size.height;
        this.position.move(newX, newY);
    }
}

function changeWindow(newWindow) {
    newWindow.resize(new Size(400, 300));
    newWindow.move(new Position(100, 150));
    return newWindow;
}