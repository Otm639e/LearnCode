# Slideshow
> Creating a slideshow with the help of **CSS** and **JavaScript**

## Example:

[Project 2 Example Video](https://youtu.be/BpDlx-Zx4e0)

## Task:

- You are only **allowed to modify** `javascript/environment.js` and `styles.slideshow.css`
- You are **allowed to add any fonts** in the `fonts` folder
- You must add **at least 10** images into `images` folder
- When the page is **reloaded**, a **random image** must be selected
- You **must be able to navigate** through the images by **clicking** on either of the two arrows on the side
- You are **not allowed to use `onclick`**. You can use [`addEventListener(event, callback)`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
- You are **not allowed** to use **any [unit measurements](https://www.w3schools.com/cssref/css_units.asp) for pixels** except **`rem`** and **`%`**

## Note:

- **Animations** are used to display each image and their prospective name
  - The big **text in the middle** of the image **is the name** of the image
- **Transitions** are used to make the **arrows appear brighter** when you **hover** over them
- The images are in the same positions **relative to each other** even though reloading the page gives you a random image

## Helpful Links:

- [Adding **multiple classes** to an element](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Examples)
- [Adding custom fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [Hide the scrollbars](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [Preventing the user from highlighting any text](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
- [Vertically center elements](https://love2dev.com/blog/absolute-centering-css/)
- [Vertically **and** horizontally align elements](https://css-tricks.com/centering-percentage-widthheight-elements/)
- [Remove an element](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
- [Get a random number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Floor division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [Returning data from a function call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [Adding text shadow](https://developer.mozilla.org/en/docs/Web/CSS/text-shadow)
- [CSS Uppercase letters](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
- [Adding letter spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- [Center text](https://developer.mozilla.org/en/docs/Web/CSS/text-align)
- [Colors with opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
- [Changing the transparency of an element](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)

## Hints:

- Try adding in functions to **reduce copy and paste**

- Use **inline styles**

- Use an **array** to hold all the images and to be able to cycle through them. Pseudocode:

  ```javascript
  const some_array = [...];
  // If your current index < 0, wrap it to the end of the array
  // If your current index >= some_array.length, set the current index = (current index) % some_array.length
  ```

- You can use a **global variable** to **store the current index**

- Pseudocode to delete an element if it **exists**:

  ```javascript
  let reference_to_element = document.querySelector(...);
  if (reference_to_element) reference_to_element.remove(); // Single line format
  ```

- Try to not use `transform:filter`. Instead use `rgba()` and `opacity`.