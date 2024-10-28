import React from 'react'

const DirectivesinTailwind = () => {
  return (
    <div>
      <pre>
Directives in Tailwind CSS
• What is Directives CSS
• Understand @tailwind directive in Tailwind CSS
• Change default style of html elements with @layer
• Understand @apply directive
      </pre>
    

    <h1>amarrht</h1>
    <h2>amarth</h2>

     <button>amarth</button>

    </div>
  )
}

export default DirectivesinTailwind

// directive = at rule 
// Directives in Tailwind CSS

// • What is Directives CSS

// • Understand @tailwind directive in Tailwind CSS

// • Change default style of html elements with @layer

// • Understand @apply directive


// index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

/* @layer base{
h1{
    font-size: 100px;
    color: red;
}
h2{
    font-size: 50px;
    color: blue;
}
button{
    background-color: green;
    color: white;
    padding: 10px;
}
} */


/************************ tailwind****************** */
// @layer base{
//     h1{
//         @apply text-5xl text-yellow-300;

//     }
//     botton{
//         @apply bg-red-300 text-2xl p-10;
//     }
// }
// whenever you use the h1 and h2 in anywhere in project . 