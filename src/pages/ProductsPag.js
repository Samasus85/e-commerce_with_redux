import { Loading } from "../components/Loading/Loading";

const ProductPag = ({products, loading}) => {
    if (loading) {
        return <Loading />
      };
    
    return ( <ul className="list-group">
        {products.map((count, i)=>(
<li className="list-group-item">
    {count.name}
    <img src={count.flag}/>
</li>
    ))}
    </ul> );
}
 
export default ProductPag;