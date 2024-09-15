

const Product = ({ name, el, baseFix, returnFixPrice, fixName, newPrice, data }) => {


    const returnDataEl = data.map((r) => {
        return r
    })

    console.log(returnDataEl);
    

    return (
        <div>
            <div>{name}</div>
            {el.length ? (
                el.map((el, index) => (
                    <div key={index}>
                        {baseFix(el) &&

                            data.includes(el.Товар)
                            &&
                            returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                ))
                //el.Товар.indexOf("Airwrap ") != -1
            ) : (
                <tr></tr>
            )}
        </div>
    )
}

export default Product