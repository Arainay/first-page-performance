This is a small example of improving first page load performance.<br/>
There are two options for rendering the **h1** tag - native JS and React. In the case of using native JS, the react application is preloaded using the `<link rel = "prefetch" />` tag. This speeds up the loading of the first page by about half a second.
