import { Link } from "react-router-dom"

const Pagination = ({productsPerPage,totalProducts}) => {
    const pageNumber = []
    for(let i =1; i<(totalProducts/productsPerPage); i++){
        pageNumber.push(i)
    }
    return ( <div>
        <ul>
            {pageNumber.map(number=>(
                <li key={number}>
                    <Link to='/'>{number}</Link>
                </li>
            ))}
        </ul>
    </div> )
}
 
export default Pagination