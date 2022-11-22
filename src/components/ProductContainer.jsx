export const ProductContainer = () => {
    return (
        <section className="productSection">
            <div className="productContainer">
                {
                    Menu.map(menu => {
                        return (
                            <div className="box" key={menu.id}>
                                {menu.name}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
};