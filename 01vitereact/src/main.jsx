import { createRoot } from 'react-dom/client'
import {React} from 'react'
import App from './App.jsx'
// function MyApp() {
//   return (
//     <div><h1>coding skills</h1></div>
//   )
// }
// const anotherElement=(
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )
// const anotherUser="reactjs"
// const ReactElement = React.createElement(
//   'a',
//   {href: 'https.//google.com',target:  '_blank'},
//   'Click me to visit google!!',
//   anotherUser
// )

createRoot(document.getElementById('root')).render(
   <App/>
)