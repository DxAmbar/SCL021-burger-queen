const nav = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">welcome</Link>
                </li>
                <li>
                    <Link to="/orders">orders</Link>
                </li>
                <li>
                    <Link to="/kitchen">kitchen</Link>
                </li>
                <li>
                    <Link to="/neworder">newOrder</Link>
                </li>
                <li>
                    <Link to="/chooseorder">chooseOrder</Link>
                </li>
                <li>
                    <Link to="/breakfast">breakfast</Link>
                </li>
                <li>
                    <Link to="/food">food</Link>
                </li>
            </ul>
        </>
    );
};