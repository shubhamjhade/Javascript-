// We attach the listener to the whole document
document.addEventListener("mousemove", (e) => {
    // Select the 'html' element (which represents :root)
    let root = document.documentElement;
    
    // Update the variables with the mouse coordinates
    root.style.setProperty("--x", e.clientX + "px");
    root.style.setProperty("--y", e.clientY + "px");
});