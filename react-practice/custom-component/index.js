/*
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
*/
// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)
/*
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)

function MainContent() {
    return (
        <p>
            <h1>
                here is the title
                </h1>
            here is the MainContent
        </p>
        
    )
}
*/
// Challenge: 

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now
/*
const navbar = (
    <nav>
        <h1>
            My Website
        </h1>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
)

const root = document.getElementById("root")

ReactDOM.render(navbar, root)
*/

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const page = (
//     <p>
//         <h1>
//             here is the title
//         </h1>
//         <p>
//             heres the main content
//         </p>
//         <ul>
//             <li>item1</li>
//             <li>item2</li>
//             <li>item3</li>
//         </ul>
//         <footer>
//             contact US
//         </footer>
//     </p>
// )

// const root = document.getElementById("root")

// root.append(page)

// ReactDOM.render(page, root)
// let firstName = "Snake"

// function Why (){
//  return (
//    <div>
//     <h1>
//         <nav>
//             <img src="ReactJSicon.png" width="60px"/>
//         </nav>
//     </h1>
//         <h1>Why Learn React</h1>
//         <ul>
//             <li>To build awesome apps.</li>
//             <li>Make a pile of money.</li>
//             <li>its fascinating</li>
//         </ul>
//         <small>© 2023 {firstName} development. All rights reserved.</small>
//     </div>
//  )
// }

// const root = document.getElementById("root")

// ReactDOM.render(<Why/>, root)



function Footer() {
    return (
        <footer>
            <small>© 2023 Snake development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className="main">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))