const DisplayProducts = ({products})=> 
    {
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {products.map((el)=>
                    (
                    <div className="card">
                        <img src={el.image} 
                        alt="SlikaNeka" />
                        <div>
                            <h4 className="category">{el.title}</h4>
                            <p className="description">{el["description"]}</p>
                            <span className="price">{el["price"]}</span>
                        </div>
                    </div>
                    )
            )}                 
        </div>
            );
    };

export default DisplayProducts;