export const StockList = () =>{
    return(
        <ul className="list-group">
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
            <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
        </li>
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
            <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
        </li>
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
            <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
        </li>
        </ul>
    )
}