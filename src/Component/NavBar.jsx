import React , {useState,useEffect} from 'react'
import { Link ,useSearchParams,useNavigate} from 'react-router-dom'


export default function NavBar() {
    let[search,setSearch]=useState()
let[q,setQ]=useState("All")
let[language,setLanguage]=useState("hi")
let[searchParams]=useSearchParams()

let navigate = useNavigate()

function postSearch(e){
    e.preventDefault()
    navigate(`/?q=${search}&language=${language}`)
    setSearch()
}

useEffect(()=>{

(()=>{

setQ(searchParams?.get("q")??"All")
setLanguage(searchParams?.get("language")??"hi")

})
},[searchParams])


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
            <div className="container-fluid">

                <Link className="navbar-brand" to={`/?q=All&language=${language}`}>News App</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={`/?q=All&language=${language}`}>All</Link>
                        </li>

                        <li className="nav-item"> <Link className="nav-link" to={`/?q=Politics&language=${language}`}>Politics</Link> </li>
                     

                        <li className="nav-item"> <Link className="nav-link" to={`/?q=Education&language=${language}`}>Education</Link> </li>

                        <li className="nav-item"> <Link className="nav-link" to={`/?q=Crime&language=${language}`}>Crime</Link> </li>

                        <li className="nav-item"> <Link className="nav-link" to={`/?q=Entertainmnet&language=${language}`}>Entertainment</Link> </li>

                        <li className="nav-item"> <Link className="nav-link" to={`/?q=Science&language=${language}`}>Science</Link> </li>

                        <li className="nav-item"> <Link className="nav-link" to={`/?q=Technology&language=${language}`}>Technology</Link> </li>

                        <li className="nav-item"> <Link className="nav-link" to={`/?q=Economic&language=${language}`}>Economic</Link> </li>


                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Other
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={`/?q=Sports&language=${language}`}>Sports</Link></li>
                                <li><Link className="dropdown-item" to={`/?q=Cricket&language=${language}`}>Cricket</Link></li>
                                <li><Link className="dropdown-item" to={`/?=World&language=${language}`}>World</Link></li>
                                <li><Link className="dropdown-item" to={`/?=India&language=${language}`}>India</Link></li>
                                <li><Link className="dropdown-item" to={`/?=Jokes&language=${language}`}>Jokes</Link></li>

                            </ul>
                        </li>


 <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                            Language
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={`/?q=${q}&language=hi`}>Hindi</Link></li>
                                <li><Link className="dropdown-item" to={`/?q=${q}&language=en`}>English</Link></li>
                                <li><Link className="dropdown-item" to={`/?q=${q}&language=es`}>Spanish</Link></li>
                                <li><Link className="dropdown-item" to={`/?q=${q}&language=fr`}>French</Link></li>
                                <li><Link className="dropdown-item" to={`/?q=${q}&language=ja`}>Japanese</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                               
                            </a>
                        </li>

                    </ul>

                    <form className="d-flex" onSubmit={postSearch}>
                        <input
                            className="form-control me-2" onChange={(e)=>setSearch(e.target.value)} value={search}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-dark" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
