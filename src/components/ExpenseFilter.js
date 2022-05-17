import './ExpenseFilter.css'

function ExpenseFilter(props){

    const yearChangeHandler = (event)=>{
       props.onChangeFilter(event.target.value);
    }
    return(
        <div className='expenses-filter'>
            <div className='expense-filter__control'>
                <label>Filter by Year</label>
                <select onChange={yearChangeHandler}>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;