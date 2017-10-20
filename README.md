# Running the app

- Clone this repository
- Navigate to /build
- Serve this folder

Alternatively, try it live at https://alltime-albums.firebaseapp.com/

# Design Considerations and Limitations

- I used iDangerous Swiper, but I didn't want to use a react-adapted version as I often find these wrappers unreliable and I wanted to get a more indepth understanding of how React works by integrating it myself.

- I have bound the search bar to an onchange event for better user experience.

- If I was spending more time on the project, I'd disable links on inactive slides as this can be irritating when trying to scroll.

- I decided to clear the search results when a user clicks on an album, I'm unsure whether this is the best possible UX. I tried it both ways and preferred it the way it is, personally. I think the current pattern suits mobile better than desktop.

- It's possible to add duplicate albums, this would be the first thing I'd change if I was spending more time on the project.

- Unfortunately the iTunes API doesn't include high resolution album art, which detracts somewhat from the style I have chosen.

- The albums save to localStorage so that they survive page reloads and navigation.

- If I was building this app for production I would split it into more components to clean up the render functions on both types of Slide components.

- The app doesn't handle errors, in production I consider this hugely important.

- This is the first complete project I've built with React and I'll definitely use it again, especially for smaller projects/single components.

